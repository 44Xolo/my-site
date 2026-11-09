(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.from((r||document).querySelectorAll(s))};
var FORM_ENDPOINT="";/* paste your Formspree URL here, e.g. https://formspree.io/f/xxxxxxxx */
var DATA=[
{id:"code",code:"CODE",name:"CODE: Coding & Software",cat:"Digital",dur:12,level:"Beginner",intake:21,desc:"HTML/CSS/JS, Git and project delivery for community apps."},
{id:"ai",code:"AI",name:"AI: Artificial Intelligence Literacy",cat:"Digital",dur:8,level:"Intermediate",intake:28,desc:"Prompting, data cleaning, ethical use and small tools for local problems."},
{id:"green",code:"GREEN",name:"GREEN: Solar & Circular Economy",cat:"Sustainability",dur:10,level:"Beginner",intake:35,desc:"Solar PV basics, e-waste repurposing and green entrepreneurship."},
{id:"build",code:"BUILD",name:"BUILD: Makers & Urban Workshop",cat:"Making",dur:6,level:"Beginner",intake:42,desc:"Welding, woodwork and digital fabrication for local prototypes."},
{id:"entrepreneur",code:"ENTREPRENEUR",name:"ENTREPRENEUR: Micro-Business Incubation",cat:"Enterprise",dur:16,level:"Intermediate",intake:56,desc:"Business model canvas, costing, market testing and funding readiness."},
{id:"education",code:"EDUCATION",name:"EDUCATION: Tutor & Facilitator Track",cat:"Education",dur:12,level:"Advanced",intake:49,desc:"Train-the-trainer: pedagogy, facilitation and digital classroom tools."},
{id:"connect",code:"CONNECT",name:"CONNECT: Digital Inclusion & Access",cat:"Access",dur:4,level:"Beginner",intake:"Weekly",desc:"Device refurbishing, connectivity clinics and basic digital skills."}];
var SLOTS={code:["Mon/Wed 09:00-12:00","Tue/Thu 14:00-17:00"],ai:["Mon 14:00-16:00","Fri 09:00-11:00"],green:["Wed 09:00-15:00"],build:["Tue/Thu 09:00-13:00"],entrepreneur:["Thu 10:00-13:00"],education:["Mon-Fri 08:00-12:00"],connect:["Sat 09:00-12:00"]};
var PROGRAM_IMAGES={code:"coding-workspace.jpg",ai:"computer-workspace.jpg",green:"solar-panel-installation.jpg",build:"workshop-machinery.jpg",entrepreneur:"community-workshop.jpg",education:"learning-workspace.jpg",connect:"community-event.jpg"};
var fmtIntake=function(v){if(typeof v!=="number")return v;return new Date(Date.now()+v*864e5).toLocaleDateString("en-ZA",{day:"2-digit",month:"short",year:"numeric"})};
var esc=function(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
/* nav */
var tg=$(".nav-toggle");if(tg)tg.addEventListener("click",function(){var o=$("#nav").classList.toggle("open");tg.setAttribute("aria-expanded",o)});
/* reveal */
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}})},{threshold:.1});$$(".reveal").forEach(function(el){io.observe(el)})}else $$(".reveal").forEach(function(el){el.classList.add("is-visible")});
/* accordion */
$$(".acc-btn").forEach(function(b){b.addEventListener("click",function(){var p=b.nextElementSibling,o=b.getAttribute("aria-expanded")==="true";b.setAttribute("aria-expanded",!o);p.style.maxHeight=o?0:p.scrollHeight+"px";b.lastChild.textContent=o?"+":"-"})});
/* modal */
function modal(t,title){$("#modal-title").textContent=title||"Thank you";$("#modal-text").textContent=t;$("#modal").classList.add("open");$("#modal-x").focus()}
$("#modal-x").addEventListener("click",function(){$("#modal").classList.remove("open")});
$("#modal").addEventListener("click",function(e){if(e.target.id==="modal")e.target.classList.remove("open")});
/* lightbox */
var imgs=$$(".gallery-grid img"),cur=0,lastGalleryFocus=null;
var lb=$("#lb");
function show(i){if(!lb||!imgs.length)return;cur=(i+imgs.length)%imgs.length;$("#lb-img").src=imgs[cur].src;$("#lb-img").alt=imgs[cur].alt;$("#lb-cap").textContent=imgs[cur].alt}
function openLightbox(i,trigger){if(!lb)return;lastGalleryFocus=trigger||document.activeElement;show(i);lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.classList.add("lightbox-open");$("#lb-x").focus()}
function closeLightbox(){if(!lb)return;lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.classList.remove("lightbox-open");if(lastGalleryFocus&&lastGalleryFocus.focus)lastGalleryFocus.focus()}
imgs.forEach(function(im,i){im.setAttribute("tabindex","0");im.setAttribute("role","button");im.setAttribute("aria-haspopup","dialog");im.setAttribute("aria-label","Open image: "+im.alt);im.addEventListener("click",function(){openLightbox(i,im)});im.addEventListener("keydown",function(e){if(e.key=== "Enter"||e.key=== " "){e.preventDefault();openLightbox(i,im)}})});
if(lb){$("#lb-x").addEventListener("click",closeLightbox);$("#lb-p").addEventListener("click",function(){show(cur-1)});$("#lb-n").addEventListener("click",function(){show(cur+1)});lb.addEventListener("click",function(e){if(e.target===lb)closeLightbox()});}
document.addEventListener("keydown",function(e){var modalEl=$("#modal");if(lb&&lb.classList.contains("open")){if(e.key=== "Escape"){e.preventDefault();closeLightbox()}else if(e.key==="ArrowRight"){e.preventDefault();show(cur+1)}else if(e.key=== "ArrowLeft"){e.preventDefault();show(cur-1)}else if(e.key=== "Tab"){var controls=$$("button:not([disabled]), [href], [tabindex]:not([tabindex='-1'])",lb).filter(function(el){return el.offsetParent!==null});if(controls.length){var first=controls[0],last=controls[controls.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}} }else if(e.key=== "Escape"&&modalEl){modalEl.classList.remove("open")}});
/* programmes */
var list=$("#programme-list");
if(list){var cat=$("#prog-cat");["All"].concat(DATA.map(function(d){return d.cat}).filter(function(v,i,a){return a.indexOf(v)===i})).forEach(function(c){cat.add(new Option(c,c))});
function render(){var q=$("#prog-search").value.trim().toLowerCase(),c=cat.value,s=$("#prog-sort").value;
var r=DATA.filter(function(d){return(c==="All"||d.cat===c)&&(!q||(d.name+d.desc+d.code).toLowerCase().indexOf(q)>-1)}).sort(function(a,b){return s==="za"?b.name.localeCompare(a.name):s==="dur"?a.dur-b.dur:a.name.localeCompare(b.name)});
var hl=function(t){t=esc(t);return q?t.replace(new RegExp("("+q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+")","ig"),"<mark>$1</mark>"):t};
list.innerHTML=r.length?r.map(function(d){return'<article class="prog" id="'+d.id+'"><div><img class="prog-image" src="images/'+PROGRAM_IMAGES[d.id]+'" alt="'+esc(d.name)+' at BASIC"><span class="badge">'+d.code+'</span><p>'+d.cat+' | '+d.level+'<br>'+d.dur+' weeks | Intake '+fmtIntake(d.intake)+'</p></div><div><h3>'+hl(d.name)+'</h3><p>'+hl(d.desc)+'</p></div><div><a class="btn" href="enquiry.html?programme='+d.id+'">Volunteer</a></div></article>'}).join(""):"<p>No programmes match your search.</p>";
$("#prog-count").textContent=r.length+" / "+DATA.length+" programmes"}
["input","change"].forEach(function(ev){$(".tools").addEventListener(ev,render)});render()}
/* validation */
function check(el){var v=el.value,msg="",rules=(el.dataset.rules||"").split("|"),n=(el.labels&&el.labels[0]?el.labels[0].textContent:"Field");
for(var i=0;i<rules.length&&!msg;i++){var r=rules[i];
if(r==="required"&&!v.trim())msg=n+" is required";
else if(r==="checked"&&!el.checked)msg="Please tick this box to continue";
else if(r.indexOf("min:")===0&&v.length<+r.slice(4))msg="Must be at least "+r.slice(4)+" characters";
else if(r.indexOf("max:")===0&&v.length>+r.slice(4))msg="Must be under "+r.slice(4)+" characters";
else if(r==="email"&&v&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))msg="Enter a valid email";
else if(r==="sa-phone"&&v&&!/^(\+27|0)[6-8][0-9]{8}$/.test(v.replace(/[\s-]/g,"")))msg="Use SA format: 082 123 4567 or +27 82 123 4567";
else if(r==="future-date"&&v&&new Date(v+"T23:59:59")<=new Date())msg="Date must be in the future"}
var e=$("#"+el.id+"-e");if(e)e.textContent=msg;el.classList.toggle("invalid",!!msg);el.classList.toggle("valid",!msg&&!!v&&el.type!=="checkbox");if(el.type==="checkbox")el.setAttribute("aria-invalid",!!msg);return!msg}
function validate(f){var ok=true;$$("[data-rules]",f).forEach(function(el){if(el.closest("[hidden]"))return;if(!check(el))ok=false});return ok}
$$("[data-rules]").forEach(function(el){el.addEventListener(el.type==="checkbox"||el.tagName==="SELECT"?"change":"blur",function(){check(el)})});
/* enquiry */
var ef=$("#enq-form");
if(ef){var type="Volunteer",pq=new URLSearchParams(location.search).get("programme");if(pq&&SLOTS[pq])$("#e-prog").value=pq;
$$(".tab").forEach(function(t){t.addEventListener("click",function(){$$(".tab").forEach(function(x){x.classList.remove("active")});t.classList.add("active");type=t.dataset.type;$("#vol-box").hidden=type!=="Volunteer";$("#spon-box").hidden=type!=="Sponsor";$("#enq-result").hidden=true})});
ef.addEventListener("submit",function(e){e.preventDefault();var okV=validate(ef),okA=true;if(type==="Volunteer"){okA=$$(".avail:checked",ef).length>0;$("#e-avail-e").textContent=okA?"":"Select at least one availability option"}else $("#e-avail-e").textContent="";if(!okV||!okA)return;var out,n=$("#e-name").value,p=$("#e-prog").value.toUpperCase();
if(type==="Volunteer"){var d=new Date();d.setMonth(d.getMonth()+1);out="Thank you "+n+"!\nProgramme: "+p+"\nExperience: "+($("input[name=e-level]:checked")||{}).value+"\nAvailability: "+$$(".avail:checked",ef).map(function(x){return x.value}).join(", ")+"\nNext intake: "+d.toLocaleDateString("en-ZA",{month:"long",year:"numeric"})+"\nAvailable slots:\n- "+SLOTS[$("#e-prog").value].join("\n- ")+"\nWe will reply within 48 hours at "+$("#e-email").value+"."}
else if(type==="Sponsor"){var base=+$("#s-type").value,m=Math.min(36,Math.max(1,parseInt($("#s-months").value)||12)),t=+$("#s-tier").value,tot=Math.round(base*m/12*t);
out="Sponsorship estimate for "+n+"\nBase: R"+base.toLocaleString("en-ZA")+"/year | "+m+" months | tier x"+t+"\nTotal: R"+tot.toLocaleString("en-ZA")+"\n"+(m>=6?"Availability: immediate":"Availability: short-term, limited slots")}
else out="Partnership enquiry received from "+n+".\nOur Partnerships Lead will reply within 48 hours at "+$("#e-email").value+".";
var r=$("#enq-result");r.textContent=out;r.hidden=false;r.focus();modal(out)})}
/* news filters and newsletter */
var ng=$("#news-grid");
if(ng){
var cards=$$(".news-card",ng),filterButtons=$$("[data-newsfilter]"),count=$("#news-count"),empty=$("#news-empty");
function filterNews(category){
var visible=0;
cards.forEach(function(card){var show=category=== "All" || card.dataset.cat===category;card.hidden=!show;if(show){visible++}});
filterButtons.forEach(function(button){var selected=button.dataset.newsfilter===category;button.classList.toggle("active",selected);button.setAttribute("aria-pressed",selected?"true":"false")});
if(count)count.textContent=visible+" / "+cards.length+" stories";
if(empty)empty.hidden=visible>0;
}
filterButtons.forEach(function(button){button.addEventListener("click",function(){filterNews(button.dataset.newsfilter)})});
var storyDetails={
"Open day at the Community Future Lab":"Join us at the Community Future Lab for a free open day from 09:00 to 14:00. Visitors can tour the lab, meet facilitators and take part in short coding, solar-energy and making demonstrations.\n\nParents, learners, local businesses and community organisations are welcome. Bring an identification document if you would like to register for a programme. Contact the team through the enquiry page for accessibility or group-booking assistance.",
"CODE intake: applications are open":"Applications are now open for the next twelve-week CODE cohort. The programme teaches HTML, CSS, JavaScript and Git through practical lessons, teamwork and a community web application project.\n\nSessions are available at different times during the week. Beginners are welcome, and applicants should have basic digital literacy and access to a device during programme sessions. Visit the enquiry page to check availability and submit an application.",
"Solar training turns offcuts into a working demo":"GREEN programme participants recently completed a small solar photovoltaic demonstration using repurposed components and workshop offcuts. Under facilitator guidance, learners practised component identification, safe wiring, battery basics and basic fault checking.\n\nThe project demonstrates that practical environmental solutions can begin with inexpensive, locally available materials. Facilitators continue to emphasise safe installation practices and will never ask learners to work on live electrical systems.",
"Sponsors back new lab equipment":"Local organisations have sponsored new devices, computers, tools and workshop safety equipment for the BASIC labs. The donation will expand hands-on learning and reduce waiting time for shared equipment during programmes.\n\nBASIC welcomes sponsorships of infrastructure, programme materials and equipment. Sponsors may contact the partnerships team through the enquiry page to discuss programme support, contribution options and recognition opportunities."
};
cards.forEach(function(card){var title=$("h3",card).textContent;function openStory(){modal(storyDetails[title]||card.textContent,title)}var read=document.createElement("button");read.type="button";read.className="btn news-read-more";read.textContent="Read full story";read.setAttribute("aria-haspopup","dialog");read.addEventListener("click",openStory);$("div",card).appendChild(read);card.addEventListener("click",function(e){if(!e.target.closest("button"))openStory()})});
filterNews(new URLSearchParams(location.search).get("category")||"All");
}
var newsletter=$(".news-form");
if(newsletter){newsletter.addEventListener("submit",function(e){e.preventDefault();if(!validate(newsletter))return;var name=$('[name="nl-name"]',newsletter).value,email=$('[name="nl-email"]',newsletter).value;try{localStorage.setItem("basic-newsletter",email)}catch(error){}modal("Thanks "+name+"! "+email+" has been added to the BASIC newsletter list.");newsletter.reset();$$("input",newsletter).forEach(function(input){input.classList.remove("valid","invalid")})})}
/* contact */
var cf=$("#contact-form");
if(cf)cf.addEventListener("submit",function(e){e.preventDefault();if(!validate(cf))return;
var recipient="info@basicfuturelabs.org",sub="[BASIC "+$("#c-type").value+"] Message from "+$("#c-name").value,body="Name: "+$("#c-name").value+"\nEmail: "+$("#c-email").value+"\nPhone: "+($("#c-phone").value||"N/A")+"\nType: "+$("#c-type").value+"\n\n"+$("#c-msg").value;
var payload={name:$("#c-name").value,email:$("#c-email").value,phone:$("#c-phone").value,type:$("#c-type").value,message:$("#c-msg").value,newsletter:$("#c-news").checked,_subject:sub};
var fallback=function(note){$("#mail-pre").textContent=(note?note+"\n\n":"")+"To: "+recipient+"\nSubject: "+sub+"\n\n"+body;$("#mail-link").href="mailto:"+recipient+"?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);$("#mail-link").hidden=false;$("#mail-out").hidden=false;$("#mail-out").focus()};
if(FORM_ENDPOINT){var btn=$("#c-send");btn.disabled=true;btn.textContent="Sending...";fetch(FORM_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(payload)}).then(function(r){if(!r.ok)throw 0;$("#mail-pre").textContent="Thank you "+payload.name+"! Your message was sent. We will reply within 2 working days at "+payload.email+".";$("#mail-link").hidden=true;$("#mail-out").hidden=false;$("#mail-out").focus();cf.reset();$$(".valid,.invalid",cf).forEach(function(x){x.classList.remove("valid","invalid")})}).catch(function(){fallback("We could not send your message automatically. Please send it with your email app:")}).then(function(){btn.disabled=false;btn.textContent="Send message"});return}
fallback("Your message is ready. Open it in your email app to send:");});


var pb=document.createElement("div");pb.className="progress";document.body.appendChild(pb);
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;pb.style.width=(h>0?scrollY/h*100:0)+"%"},{passive:true});
var sp=$("#splash"),seen=false,reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
try{seen=sessionStorage.getItem("basic-splash")==="1";sessionStorage.setItem("basic-splash","1")}catch(e){}
if(sp){if(seen||reduce)sp.remove();else sp.innerHTML="BASIC.".split("").map(function(c,i){return'<span style="--i:'+i+'">'+c+'</span>'}).join("")}
var wait=sp&&!seen&&!reduce;document.documentElement.style.setProperty("--base",wait?"2.2s":".1s");
var h1=$(".hero h1");if(h1){h1.setAttribute("aria-label",h1.textContent);h1.innerHTML=h1.textContent.split(" ").map(function(w,i){return'<span class="w" aria-hidden="true"><span style="--i:'+i+'">'+esc(w)+'</span></span>'}).join(" ")}
$$(".two,.three,.four,.stats,.gallery-grid").forEach(function(g){g.classList.add("stagger");Array.from(g.children).forEach(function(c,i){c.style.setProperty("--i",i)})});
$$("[data-count]").forEach(function(el){var end=+el.dataset.count,dec=+(el.dataset.dec||0),suf=el.dataset.suffix||"";if(reduce||!("IntersectionObserver" in window))return;el.textContent=(0).toFixed(dec)+suf;
var o=new IntersectionObserver(function(es){if(!es[0].isIntersecting)return;o.disconnect();setTimeout(function(){var t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1500),e=1-Math.pow(1-p,3);el.textContent=(end*e).toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)})(t0)},wait?2300:100)});o.observe(el)});
})();
