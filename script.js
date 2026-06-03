document.addEventListener("DOMContentLoaded", () => {

    showJobs(jobs);

    document.getElementById("searchInput").addEventListener("input", (e) => {

        let val = e.target.value.toLowerCase();

        let filtered = jobs.filter(j =>
            j.title.toLowerCase().includes(val) ||
            j.city.toLowerCase().includes(val)
        );

        showJobs(filtered);
    });

});

/* Syçanyň koordinatlaryny CSS-e iberýär */
document.addEventListener("mousemove", function(e){

    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");

});

/* Kartlary görkezýär */
function showJobs(data) {

    const container = document.getElementById("jobs-container");

    container.innerHTML = "";

    data.forEach((job, index) => {

        container.innerHTML += `
        <div class="job-card" style="animation-delay:${index * 0.1}s">

            <img src="${job.image}" alt="${job.title}" loading="lazy">

            <div class="job-content">

                <div class="job-title">${job.title}</div>

                <div class="job-info">📍 ${job.city}</div>

                <div class="job-info">👤 ${job.cinsiyet}</div>

                <div class="salary">💰 ${job.salary}</div>

                <div class="job-info">${job.description}</div>

                <div class="buttons">

                    <a
                        class="btn whatsapp"
                        href="https://wa.me/${job.whatsapp}"
                        target="_blank"
                    >
                        WhatsApp
                    </a>

                    <a
                        class="btn call"
                        href="tel:${job.phone}"
                    >
                        Ara
                    </a>

                </div>

            </div>

        </div>
        `;
    });

    animateCards();
}

/* Kartlar çykanda animasiýa */
function animateCards(){

    const cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 100);

    });

}

/* Kartyň üstüne syçan gelende effekt */
document.addEventListener("mouseover", function(e){

    const card = e.target.closest(".job-card");

    if(card){

        card.style.transform = "translateY(-8px) scale(1.02)";

    }

});

document.addEventListener("mouseout", function(e){

    const card = e.target.closest(".job-card");

    if(card){

        card.style.transform = "translateY(0) scale(1)";

    }

});
const canvas = document.getElementById("bgCanvas");

if(canvas){

const ctx = canvas.getContext("2d");

function resizeCanvas(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();

const particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
dx:(Math.random()-0.5)*0.5,
dy:(Math.random()-0.5)*0.5
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,255,255,0.4)";
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",resizeCanvas);

}
