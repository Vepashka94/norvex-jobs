let jobs = [];

fetch('jobs.json')
.then(r => r.json())
.then(data => {
    jobs = data;
    showJobs(jobs);
});

function showJobs(data){

    const container = document.getElementById("jobs-container");

    container.innerHTML = "";

    data.forEach(job => {

        container.innerHTML += `
        <div class="job-card">

            <img src="${job.image}">

            <div class="job-content">
                <div>${job.title}</div>
                <div>${job.city}</div>
                <div>${job.salary}</div>

                <a href="https://wa.me/${job.whatsapp}">WhatsApp</a>
                <a href="tel:${job.phone}">Ara</a>
            </div>

        </div>`;
    });
}

document.getElementById("searchInput").addEventListener("keyup", e => {
    let val = e.target.value.toLowerCase();

    let filtered = jobs.filter(j =>
        j.title.toLowerCase().includes(val) ||
        j.city.toLowerCase().includes(val)
    );

    showJobs(filtered);
});
