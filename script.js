let jobs = [];

document.addEventListener("DOMContentLoaded", () => {

fetch('./jobs.json')
    .then(r => {
        if (!r.ok) throw new Error("jobs.json load error");
        return r.json();
    })
    .then(data => {
        jobs = data;
        showJobs(jobs);
    })
    .catch(err => {
        console.error("JSON error:", err);
        document.getElementById("jobs-container").innerHTML =
            "<p style='color:red;text-align:center'>Jobs yüklenmedi</p>";
    });

document.getElementById("searchInput").addEventListener("input", (e) => {
    let val = e.target.value.toLowerCase();

    let filtered = jobs.filter(j =>
        (j.title || "").toLowerCase().includes(val) ||
        (j.city || "").toLowerCase().includes(val)
    );

    showJobs(filtered);
});

});

function showJobs(data) {

const container = document.getElementById("jobs-container");

container.innerHTML = "";

data.forEach(job => {

    container.innerHTML += `
    <div class="job-card">

        <img src="${job.image || ''}" alt="job image">

        <div class="job-content">

            <div class="job-title">${job.title || ''}</div>

            <div class="job-info">📍 ${job.city || ''}</div>

            <div class="salary">💰 ${job.salary || ''}</div>

            <div class="job-info">${job.description || ''}</div>

            <div class="job-info">☎ ${job.phone || ''}</div>

            <div class="job-info">☎ ${job.phone2 || ''}</div>

            <div class="buttons">

                <a class="btn whatsapp"
                   href="https://wa.me/${job.whatsapp || ''}"
                   target="_blank">
                   WhatsApp
                </a>

                <a class="btn call"
                   href="tel:${job.phone || ''}">
                   Ara
                </a>

            </div>

        </div>

    </div>
    `;
});
```

}
