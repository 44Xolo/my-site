/* gsap-animations.js
   Requires GSAP 3 + ScrollTrigger (loaded in index.html before this file).
   Leaves site.js alone: splash, .reveal, counters, lightbox and modal are untouched.
   If GSAP fails to load or the visitor prefers reduced motion, the page stays fully readable. */
(function () {
  "use strict";

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();

  mm.add(
    {
      motion: "(prefers-reduced-motion: no-preference)",
      wide: "(min-width: 900px)",
      fine: "(hover: hover) and (pointer: fine)"
    },
    function (ctx) {
      var c = ctx.conditions;
      if (!c.motion) return; // reduced motion: leave everything static

      var cleanups = [];

      /* 1. Scroll progress bar */
      gsap.to(".g-progress span", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2
        }
      });

      /* 2. Hero image: gentle zoom-out as it scrolls into view */
      if (document.querySelector(".hero-image img")) {
        gsap.fromTo(
          ".hero-image img",
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-image",
              start: "top bottom",
              end: "bottom 40%",
              scrub: true
            }
          }
        );
      }

      /* 3. Programmes: pinned horizontal scroll (desktop only).
            On smaller screens the row stays natively swipeable. */
      var prog = document.querySelector(".g-prog");
      var viewport = document.querySelector(".g-prog__viewport");
      var track = document.querySelector(".g-prog__track");

      if (c.wide && prog && viewport && track) {
        prog.classList.add("is-pinned");
        cleanups.push(function () { prog.classList.remove("is-pinned"); });

        var distance = function () {
          return Math.max(0, track.scrollWidth - viewport.clientWidth);
        };

        var slide = gsap.to(track, {
          x: function () { return -distance(); },
          ease: "none",
          scrollTrigger: {
            trigger: prog,
            start: "top top",
            end: function () { return "+=" + distance(); },
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        });

        gsap.to(".g-prog__bar span", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: prog,
            start: "top top",
            end: function () { return "+=" + distance(); },
            scrub: true,
            invalidateOnRefresh: true
          }
        });

        // Cards brighten as they travel into the left half of the screen
        gsap.utils.toArray(".g-card").forEach(function (card) {
          gsap.fromTo(
            card,
            { opacity: 0.35 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: slide,
                start: "left 92%",
                end: "left 55%",
                scrub: true
              }
            }
          );
        });
      }

      /* 4. Process timeline: rail draws as you scroll, each step lights up */
      var steps = document.querySelector(".g-steps");
      if (steps) {
        steps.classList.add("g-anim");
        cleanups.push(function () { steps.classList.remove("g-anim"); });

        gsap.fromTo(
          ".g-steps__line",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: steps,
              start: "top 70%",
              end: "bottom 60%",
              scrub: true
            }
          }
        );

        gsap.utils.toArray(".g-step").forEach(function (step) {
          ScrollTrigger.create({
            trigger: step,
            start: "top 70%",
            toggleClass: { targets: step, className: "is-on" }
          });
          gsap.from(step.querySelector(".g-step__body"), {
            x: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 80%", once: true }
          });
        });
      }

      /* 5. Cities: two big names slide past each other */
      if (document.querySelector(".g-cities")) {
        var cityScroll = {
          trigger: ".g-cities",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        };
        gsap.fromTo(".g-city--a", { xPercent: 6 }, { xPercent: -6, ease: "none", scrollTrigger: cityScroll });
        gsap.fromTo(".g-city--b", { xPercent: -6 }, { xPercent: 6, ease: "none", scrollTrigger: cityScroll });
      }

      /* 6. Closing headline: words rise out of a mask, once */
      var h = document.querySelector(".g-cta h2");
      if (h) {
        var original = h.textContent.trim();
        var words = original.split(/\s+/);
        h.setAttribute("aria-label", original);
        h.innerHTML = words
          .map(function (w) {
            return '<span class="g-mask" aria-hidden="true"><span class="g-word">' + w + "</span></span>";
          })
          .join(" ");
        cleanups.push(function () {
          h.textContent = original;
          h.removeAttribute("aria-label");
        });

        gsap.from(h.querySelectorAll(".g-word"), {
          yPercent: 115,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.07,
          scrollTrigger: { trigger: h, start: "top 85%", once: true }
        });
      }

      /* 7. Magnetic buttons on the closing CTA (mouse users only) */
      if (c.fine) {
        var ac = new AbortController();
        cleanups.push(function () { ac.abort(); });

        document.querySelectorAll(".g-cta .btn").forEach(function (btn) {
          var xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
          var yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

          btn.addEventListener(
            "mousemove",
            function (e) {
              var r = btn.getBoundingClientRect();
              xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
              yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
            },
            { signal: ac.signal }
          );
          btn.addEventListener(
            "mouseleave",
            function () { xTo(0); yTo(0); },
            { signal: ac.signal }
          );
        });
      }

      return function () {
        cleanups.forEach(function (fn) { fn(); });
      };
    }
  );

  // Re-measure once fonts and images have settled so pin distances are exact
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();