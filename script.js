console.log("Portfolio loaded successfully!");


/* =========================
   ABOUT ANIMATION
========================= */

const aboutSection = document.querySelector(".about-content");
const interestCards = document.querySelectorAll(".interest-card");

const aboutObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                aboutSection.classList.add("show");

                interestCards.forEach((card) => {
                    card.classList.add("show");
                });

            }

        });

    },
    {
        threshold: 0.2
    }
);

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}


/* =========================
   PROJECT ANIMATION
========================= */

const projectCard = document.querySelector(".project-card-large");

const projectObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                projectCard.classList.add("show");
            }

        });

    },
    {
        threshold: 0.2
    }
);

if (projectCard) {
    projectObserver.observe(projectCard);
}


/* =========================
   EDUCATION ANIMATION
========================= */

const educationSection = document.querySelector(".experience-section");
const educationItems = document.querySelectorAll(".timeline-item");

const educationObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                educationSection.classList.add("show");

                educationItems.forEach((item, index) => {

                    setTimeout(() => {
                        item.classList.add("show");
                    }, index * 200);

                });

            }

        });

    },
    {
        threshold: 0.2
    }
);

if (educationSection) {
    educationObserver.observe(educationSection);
}