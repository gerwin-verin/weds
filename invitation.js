// Countdown Logic
const targetDate = new Date("November 28, 2026 10:00:00").getTime();
const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  if (document.getElementById("days")) {
    document.getElementById("days").innerText = String(d).padStart(2, "0");
    document.getElementById("hours").innerText = String(h).padStart(2, "0");
    document.getElementById("minutes").innerText = String(m).padStart(2, "0");
    document.getElementById("seconds").innerText = String(s).padStart(2, "0");
  }
};
setInterval(updateCountdown, 1000);
updateCountdown();

// Intersection Observer for Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      let sectionOpeningTimeline = anime.timeline({
        loop: false,
      });

      let sectionBibleTimeline = anime.timeline({
        loop: false, // Set to true if you want the cycle to repeat infinitely
      });

      if (entry.isIntersecting) {
        if (entry.target.id === "section-opening") {
          sectionOpeningTimeline
            .add({
              targets: "#txtWeddingOf",
              opacity: [0, 1],
              duration: 500, // 1 second duration
              easing: "easeOutExpo", // Even, steady transition
              delay: 13000, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtGerwin",
              opacity: [0, 1],
              duration: 750, // 1 second duration
              easing: "easeOutExpo", // Even, steady transition
              delay: 250, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtAnd",
              opacity: [0, 1],
              duration: 750, // 1 second duration
              easing: "easeOutExpo", // Even, steady transition
              delay: 5, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtVerin",
              opacity: [0, 1],
              duration: 750, // 1 second duration
              easing: "easeOutExpo", // Even, steady transition
              delay: 5, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtDate",
              opacity: [0, 1],
              duration: 500, // 1 second duration
              easing: "easeOutExpo", // Even, steady transition
              delay: 100, // Stay invisible for 0.5 seconds before fading back in
            });

          setTimeout(function () {
            const container = document.getElementById("gif-scroll-down");
            const img = document.createElement("img");
            img.src = "v1.0.0/assets/svg/scrolldown-2.gif";
            img.width = 40;
            img.height = 40;
            container.appendChild(img);
          }, 16500);
        } else if (entry.target.id === "section-bible") {
          sectionBibleTimeline
            .add({
              targets: ".imgCross",
              opacity: [0, 1],
              duration: 250, // 1 second duration
              easing: "linear", // Even, steady transition
              delay: 500, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtBible",
              opacity: [0, 1],
              duration: 250, // 1 second duration
              easing: "linear", // Even, steady transition
              delay: 500, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtBible2",
              opacity: [0, 1],
              duration: 250, // 1 second duration
              easing: "linear", // Even, steady transition
              delay: 500, // Stay invisible for 0.5 seconds before fading back in
            })
            .add({
              targets: "#txtBible3",
              opacity: [0, 1],
              duration: 250, // 1 second duration
              easing: "linear", // Even, steady transition
              delay: 500, // Stay invisible for 0.5 seconds before fading back in
            });
        }

        observer.unobserve(entry.target);
      } else {
        if (entry.target.id === "section-opening") {
          sectionOpeningTimeline.add({
            targets: [
              "#txtWeddingOf",
              "#txtGerwin",
              "#txtAnd",
              "#txtVerin",
              "#txtDate",
            ],
            opacity: 0,
            duration: 0, // 1 second duration
            easing: "linear", // Even, steady transition
            delay: 0,
          });
        } else if (entry.target.id === "section-bible") {
          sectionBibleTimeline.add({
            targets: [".imgCross", "#txtBible", "#txtBible2", "#txtBible3"],
            opacity: 0,
            duration: 0, // 1 second duration
            easing: "linear", // Even, steady transition
            delay: 0,
          });
        }
      }
    });
  }, options);

  document
    .querySelectorAll(".scroll-section")
    .forEach((sec) => observer.observe(sec));
});
