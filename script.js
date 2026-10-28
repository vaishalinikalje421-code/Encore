document.addEventListener("DOMContentLoaded", () => {

    // Select hero elements
    const heroContent = document.querySelector(".hero-content");
    const heroLabel = document.querySelector(".hero-label");
    const heroSubLabel = document.querySelector(".hero-sub-label");
    const heroTitle = document.querySelector(".hero h1");
    const heroDescription = document.querySelector(".hero-description");
    const heroButtons = document.querySelector(".hero-buttons");

    // Add animation styles
    const animatedElements = [
        heroLabel,
        heroSubLabel,
        heroTitle,
        heroDescription,
        heroButtons
    ];

    animatedElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, 200 + index * 180);
        }
    });

    // Smooth scroll for hero buttons
    const heroLinks = document.querySelectorAll(
        ".hero-buttons a, .nav-button"
    );

    heroLinks.forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {

    // Select About section elements
    const aboutContent = document.querySelector(".about-content");
    const aboutGallery = document.querySelector(".about-gallery");
    const aboutCards = document.querySelectorAll(".about-card");

    // Respect users who prefer reduced motion
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion && "IntersectionObserver" in window) {

        // Prepare elements for reveal animation
        const revealElements = [
            aboutContent,
            aboutGallery,
            ...aboutCards
        ].filter(Boolean);

        revealElements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                `opacity 0.7s ease ${index * 0.12}s, ` +
                `transform 0.7s ease ${index * 0.12}s`;
        });

        // Reveal elements when they enter the viewport
        const aboutObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            aboutObserver.observe(element);
        });

    }

    // Add a subtle click interaction to the About gallery
    const galleryImages = document.querySelectorAll(
        ".about-gallery img"
    );

    galleryImages.forEach(image => {

        image.style.cursor = "pointer";

        image.addEventListener("click", () => {

            // Toggle a highlight class on the clicked photo
            image.classList.toggle("photo-highlight");

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

    const eventCards = document.querySelectorAll(".event-card");
    const eventsHeading = document.querySelector(".events-heading");

    // Respect reduced-motion preferences
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal event cards on scroll
    if (!reduceMotion && "IntersectionObserver" in window) {

        const revealItems = [
            eventsHeading,
            ...eventCards
        ].filter(Boolean);

        revealItems.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(25px)";
            element.style.transition =
                `opacity 0.7s ease ${index * 0.15}s, ` +
                `transform 0.7s ease ${index * 0.15}s`;
        });

        const eventsObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealItems.forEach(element => {
            eventsObserver.observe(element);
        });
    }

    // Add accessible focus feedback to event links
    const eventLinks = document.querySelectorAll(
        ".event-action, .events-link"
    );

    eventLinks.forEach(link => {

        link.addEventListener("focus", () => {
            link.style.outline = "2px solid #a78bfa";
            link.style.outlineOffset = "5px";
        });

        link.addEventListener("blur", () => {
            link.style.outline = "";
            link.style.outlineOffset = "";
        });

    });

});

document.addEventListener("DOMContentLoaded", () => {
    const teamSection = document.querySelector(".team");

    if (!teamSection) return;

    const teamHeading = teamSection.querySelector(".team-heading");
    const teamCards = teamSection.querySelectorAll(".team-card");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal the heading and cards while scrolling
    if (!reduceMotion && "IntersectionObserver" in window) {
        const revealItems = [
            teamHeading,
            ...teamCards
        ].filter(Boolean);

        revealItems.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transform = "translateY(25px)";
            item.style.transition =
                `opacity 0.7s ease ${index * 0.12}s, ` +
                `transform 0.7s ease ${index * 0.12}s`;
        });

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        revealItems.forEach(item => observer.observe(item));
    }

    // Keyboard accessibility for team cards
    teamCards.forEach(card => {
        card.addEventListener("focusin", () => {
            card.style.borderColor = "#a78bfa";
        });

        card.addEventListener("focusout", () => {
            card.style.borderColor = "";
        });
    });

    // Highlight a team card when clicked
    teamCards.forEach(card => {
        card.addEventListener("click", () => {
            teamCards.forEach(otherCard => {
                otherCard.classList.remove("team-card-active");
            });

            card.classList.add("team-card-active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    if (!contactForm || !formStatus) return;

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document
            .getElementById("contactName")
            .value.trim();

        const email = document
            .getElementById("contactEmail")
            .value.trim();

        const subject = document
            .getElementById("contactSubject")
            .value.trim();

        const message = document
            .getElementById("contactMessage")
            .value.trim();

        // Check that every field has a value
        if (!name || !email || !subject || !message) {
            formStatus.textContent =
                "Please fill in all fields before submitting.";
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formStatus.textContent =
                "Please enter a valid email address.";
            return;
        }

        // Show a local confirmation
        formStatus.textContent =
            `Thank you, ${name}! Your message is ready. ` +
            "Email delivery will be available once the form is connected to a service.";

        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
