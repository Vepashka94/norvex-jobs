let jobs = [];

fetch('jobs.json')
.then(response => response.json())
.then(data => {
console.log(data);
jobs = data;
showJobs(jobs);
});

function showJobs(data){

```
const container = document.getElementById("jobs-container");

container.innerHTML = "";

data.forEach(job => {

    container.innerHTML += `
    <div class="job-card">

        <img src="${job.image}" alt="">

        <div class="job-content">

            <div class="job-title">${job.title}</div>

            <div class="job-info">${job.city}</div>

            <div class="salary">${job.salary}</div>

            <div class="job-info">${job.description}</div>

            <div class="job-info">${job.phone}</div>

            <div class="job-info">${job.phone2}</div>

            <div class="buttons">

                <a class="btn whatsapp"
                href="https://wa.me/${job.whatsapp}"
                target="_blank">
                WhatsApp
                </a>

                <a class="btn call"
                href="tel:${job.phone}">
                Ara
                </a>

            </div>

        </div>

    </div>
    `;
});
```

}

document.getElementById("searchInput").addEventListener("keyup", function(){

```
let value = this.value.toLowerCase();

let filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value) ||
    job.city.toLowerCase().includes(value)
);

showJobs(filtered);
```

});
