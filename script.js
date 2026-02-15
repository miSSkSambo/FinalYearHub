/* SUBTITLE TYPING EFFECT */
const subtitleText="Ultimate AI Intelligence System";
let si=0;

function typeSubtitle(){
  if(si<subtitleText.length){
    document.getElementById("typingSubtitle").innerHTML+=subtitleText.charAt(si);
    si++;
    setTimeout(typeSubtitle,50);
  }
}
window.addEventListener("load",typeSubtitle);

/* DARK MODE */
function toggleMode(){
  document.body.classList.toggle("dark");
}

/* CANVAS */
const canvas=document.getElementById("neuralCanvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<60;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    dx:(Math.random()-0.5),
    dy:(Math.random()-0.5)
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;

    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}
animate();

/* PASTE YOUR FULL PROJECTS ARRAY HERE */

function displayProjects(){
  let container=document.getElementById("projectContainer");
  container.innerHTML="";
  projects.forEach(p=>{
    container.innerHTML+=`
      <div class="card">
        <span class="tag">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <button class="ai-btn" onclick="openProject('${p.title}')">View</button>
      </div>
    `;
  });
}
displayProjects();

function openProject(title){
  let p=projects.find(x=>x.title===title);
  document.getElementById("aiModal").style.display="flex";
  document.getElementById("aiContent").innerHTML=`
    <h2>${p.title}</h2>
    <p><b>Description:</b><br>${p.description}</p>
    <p><b>Problem:</b><br>${p.problem}</p>
    <p><b>Solution:</b><br>${p.solution}</p>
    <br><button onclick="closeModal()">Close</button>
  `;
}

function closeModal(){
  document.getElementById("aiModal").style.display="none";
}

function startAIQuiz(){
  let pick=projects[Math.floor(Math.random()*projects.length)];
  openProject(pick.title);
}
