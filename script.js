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

function showJobs(data) {
    const container = document.getElementById("jobs-container");

    container.innerHTML = "";

    data.forEach(job => {
        container.innerHTML += `
        <div class="job-card">

            <img src="${job.image}" />

            <div class="job-content">
                <div class="job-title">${job.title}</div>
                <div>📍 ${job.city}</div>
                <div>💰 ${job.salary}</div>
                <div>${job.description}</div>

                <a href="https://wa.me/${job.whatsapp}">WhatsApp</a>
                <a href="tel:${job.phone}">Ara</a>
            </div>

        </div>
        `;
    });
}
