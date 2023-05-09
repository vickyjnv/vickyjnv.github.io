$(function () {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 18 || hours <= 6;
  const body = document.querySelector("body");
  const toggle = document.getElementById("toggle");
  const input = document.getElementById("switch");
  if (night) {
    input.checked = !0;
    body.classList.add("night");
  }
  toggle.addEventListener("click", function () {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove("night");
    } else {
      body.classList.add("night");
    }
  });
  const introHeight = document.querySelector(".intro").offsetHeight;
  const topButton = document.getElementById("top-button");
  const $topButton = $("#top-button");
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    !1
  );
  topButton.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  const hand = document.querySelector(".emoji.wave-hand");
  function waveOnLoad() {
    hand.classList.add("wave");
    setTimeout(function () {
      hand.classList.remove("wave");
    }, 2000);
  }
  setTimeout(function () {
    waveOnLoad();
  }, 1000);
  hand.addEventListener("mouseover", function () {
    hand.classList.add("wave");
  });
  hand.addEventListener("mouseout", function () {
    hand.classList.remove("wave");
  });
  window.sr = ScrollReveal({
    reset: !1,
    duration: 600,
    easing: "cubic-bezier(.694,0,.335,1)",
    scale: 1,
    viewFactor: 0.3,
  });
  sr.reveal(".background");
  sr.reveal(".skills");
  sr.reveal(".experience", { viewFactor: 0.2 });
  sr.reveal(".featured-projects", { viewFactor: 0.1 });
  sr.reveal(".other-projects", { viewFactor: 0.05 });
});
if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    !1
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = !1;
  });
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}







//js code for skillz

const skillz = document.querySelector(".skillz");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.skills.forEach(category => {
      //data.forEach((category) => {
      const categoryElement = document.createElement("div");
      categoryElement.classList.add("skillz__category");

      const categoryLabelElement = document.createElement("div");
      categoryLabelElement.classList.add("skillz__category__label");
      categoryLabelElement.textContent = category.label;
      categoryElement.appendChild(categoryLabelElement);

      const skillListElement = document.createElement("ul");
      category.skills.forEach((skill) => {
        const skillElement = document.createElement("li");
        skillElement.classList.add("skillz__category__item");
        skillElement.textContent = skill;
        skillListElement.appendChild(skillElement);
      });

      categoryElement.appendChild(skillListElement);
      skillz.appendChild(categoryElement);
    });
  })
  .catch((error) => console.log(error));


//Fetch certification from json and show in div class

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const jobsContainer = document.querySelector('.certifications');

    // Loop through certification data and add to jobs container
    data.certifications.forEach(certification => {
      const jobElement = document.createElement('div');
      jobElement.className = 'job';

      const timePlaceElement = document.createElement('div');
      timePlaceElement.className = 'time-place';

      const companyElement = document.createElement('div');
      companyElement.className = 'job__company';

      const linkElement = document.createElement('a');
      linkElement.href = certification.url;
      linkElement.target = '_blank';
      linkElement.textContent = certification.title;

      const timeElement = document.createElement('div');
      timeElement.className = 'job__time';
      timeElement.textContent = certification.date;

      companyElement.appendChild(linkElement);
      timePlaceElement.appendChild(companyElement);
      timePlaceElement.appendChild(timeElement);
      jobElement.appendChild(timePlaceElement);

      const positionElement = document.createElement('div');
      positionElement.className = 'job__position';
      positionElement.textContent = certification.organization;
      jobElement.appendChild(positionElement);

      jobsContainer.appendChild(jobElement);
    });
  })
  .catch(error => console.error(error));

//Js code for Education
// Fetch data from education.json file
// Fetch the JSON data from the file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    //const jobs = document.getElementById('education-list');
    const jobs = document.querySelector('.education-list');

    // Loop through the data and create a job element for each item
    data.education.forEach(item => {
      const jobElement = document.createElement('div');
      jobElement.classList.add('job');

      const timePlaceElement = document.createElement('div');
      timePlaceElement.classList.add('time-place');

      const jobCompanyElement = document.createElement('div');
      jobCompanyElement.classList.add('job__company');

      const companyLinkElement = document.createElement('a');
      companyLinkElement.innerText = item.schoolName;
      companyLinkElement.href = item.schoolUrl;

      jobCompanyElement.appendChild(companyLinkElement);

      const jobTimeElement = document.createElement('div');
      jobTimeElement.classList.add('job__time');
      jobTimeElement.innerText = item.timePeriod;

      timePlaceElement.appendChild(jobCompanyElement);
      timePlaceElement.appendChild(jobTimeElement);

      const jobPositionElement = document.createElement('div');
      jobPositionElement.classList.add('job__position');
      jobPositionElement.innerText = item.degree;

      jobElement.appendChild(timePlaceElement);
      jobElement.appendChild(jobPositionElement);

      jobs.appendChild(jobElement);
    });
  });



//Js code For Jobs

// Fetch JSON data from file
// Fetch JSON data from file
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Loop through each job and create HTML elements
    data.jobsList.forEach(job => {
      const jobDiv = document.createElement("div");
      jobDiv.className = "job";

      const timePlaceDiv = document.createElement("div");
      timePlaceDiv.className = "time-place";

      const companyDiv = document.createElement("div");
      companyDiv.className = "job__company";

      const companyLink = document.createElement("a");
      companyLink.href = job.companyLink;
      companyLink.target = "_blank";
      companyLink.innerText = job.companyName;
      companyDiv.appendChild(companyLink);

      const timeDiv = document.createElement("div");
      timeDiv.className = "job__time";
      timeDiv.innerText = job.duration;

      timePlaceDiv.appendChild(companyDiv);
      timePlaceDiv.appendChild(timeDiv);

      const positionDiv = document.createElement("div");
      positionDiv.className = "job__position";
      positionDiv.innerText = job.position;

      jobDiv.appendChild(timePlaceDiv);
      jobDiv.appendChild(positionDiv);

      document.querySelector(".jobs").appendChild(jobDiv);
    });
  })
  .catch(error => console.log(error));





fetch('more-certifications.json')
  .then(response => response.json())
  .then(data => {
    const jobsContainer = document.querySelector('.certifications-extra');

    // Loop through certification data and add to jobs container
    data.forEach(certification => {
      const jobElement = document.createElement('div');
      jobElement.className = 'job';

      const timePlaceElement = document.createElement('div');
      timePlaceElement.className = 'time-place';

      const companyElement = document.createElement('div');
      companyElement.className = 'job__company';

      const linkElement = document.createElement('a');
      linkElement.href = certification.url;
      linkElement.target = '_blank';
      linkElement.textContent = certification.title;

      const timeElement = document.createElement('div');
      timeElement.className = 'job__time';
      timeElement.textContent = certification.date;

      companyElement.appendChild(linkElement);
      timePlaceElement.appendChild(companyElement);
      timePlaceElement.appendChild(timeElement);
      jobElement.appendChild(timePlaceElement);

      const positionElement = document.createElement('div');
      positionElement.className = 'job__position';
      positionElement.textContent = certification.organization;
      jobElement.appendChild(positionElement);

      jobsContainer.appendChild(jobElement);
    });
  })
  .catch(error => console.error(error));


