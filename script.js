gsap.registerPlugin();

// ===== ABOUT SECTION SCROLL REVEAL =====
const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".about-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".about-visual",
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 },
        );

        gsap.fromTo(
          ".about-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.4,
          },
        );

        gsap.to(".about-card", {
          y: 6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.25,
          delay: 0.6,
        });

        aboutObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const aboutSection = document.getElementById("about");
if (aboutSection) aboutObserver.observe(aboutSection);

// ===== SKILLS SECTION SCROLL REVEAL =====
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".skills-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".skills-category",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.15,
          },
        );

        gsap.fromTo(
          ".skill-logo",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "power3.out",
            delay: 0.3,
          },
        );

        skillsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const skillsSection = document.getElementById("skills");
if (skillsSection) skillsObserver.observe(skillsSection);

// ===== PROJECTS SECTION SCROLL REVEAL =====
const projectsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".projects-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".project-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2,
          },
        );

        projectsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

const projectsSection = document.getElementById("projects");
if (projectsSection) projectsObserver.observe(projectsSection);

// ===== SERVICES SECTION SCROLL REVEAL =====
const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".services-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".service-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2,
          },
        );

        servicesObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const servicesSection = document.getElementById("services");
if (servicesSection) servicesObserver.observe(servicesSection);

// ===== CONTACT SECTION SCROLL REVEAL =====
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".contact-item",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        );

        gsap.fromTo(
          ".contact-input",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            delay: 0.3,
          },
        );

        contactObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

const contactSection = document.getElementById("contact");
if (contactSection) contactObserver.observe(contactSection);

// ===== FOOTER SCROLL REVEAL =====
const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.fromTo(
          ".footer-section",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        );
        footerObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

const footerSection = document.querySelector(".footer-section");
if (footerSection) footerObserver.observe(footerSection);

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== MOBILE MENU =====
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");

  if (!menuOpen) {
    menuOpen = true;
    mobileMenu.classList.remove("pointer-events-none");

    gsap.to(mobileMenu, {
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
      onStart: () => {
        mobileMenu.style.pointerEvents = "auto";
      },
    });

    gsap.fromTo(
      ".mobile-link",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
      },
    );
  } else {
    menuOpen = false;

    gsap.to(mobileMenu, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.style.pointerEvents = "none";
        mobileMenu.classList.add("pointer-events-none");
      },
    });
  }
});

// Close on link click
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (menuOpen) {
      menuToggle.classList.remove("active");
      menuOpen = false;
      gsap.to(mobileMenu, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          mobileMenu.style.pointerEvents = "none";
          mobileMenu.classList.add("pointer-events-none");
        },
      });
    }
  });
});

window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Navbar entrance
  tl.from("#navbar", {
    y: -20,
    opacity: 0,
    duration: 0.6,
  })
    .from(
      ".logo-reveal",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.3",
    )
    .from(
      ".nav-item",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
      },
      "-=0.3",
    )
    .from(
      ".navbar-cta",
      {
        y: -10,
        opacity: 0,
        duration: 0.4,
      },
      "-=0.3",
    );

  tl.from(".badge-reveal", {
    y: 20,
    opacity: 0,
    duration: 0.8,
  })
    .from(
      ".heading-reveal span",
      {
        y: 80,
        opacity: 0,
        duration: 1.0,
        stagger: 0.08,
      },
      "-=0.4",
    )
    .from(
      ".para-reveal",
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.6",
    )
    .from(
      ".cta-reveal a",
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      },
      "-=0.4",
    )
    .from(
      ".trust-reveal",
      {
        y: 15,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.2",
    )
    .from(
      ".cards-reveal",
      {
        x: 80,
        opacity: 0,
        duration: 1.2,
      },
      "-=0.8",
    )
    .from(
      ".glass-card",
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      },
      "-=0.6",
    );
});

document.querySelectorAll(".glass-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -6,
      borderColor: "rgba(59,130,246,0.2)",
      boxShadow: "0 20px 60px rgba(59,130,246,0.1)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      borderColor: "rgba(255,255,255,0.06)",
      boxShadow: "none",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  });
});

document.querySelector(".cards-reveal")?.addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  gsap.to(".glass-card", {
    x: x * 8,
    y: y * 8,
    rotateX: y * 2,
    rotateY: x * 2,
    duration: 1,
    ease: "power2.out",
    overwrite: "auto",
  });
});

document.querySelector(".cards-reveal")?.addEventListener("mouseleave", () => {
  gsap.to(".glass-card", {
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    duration: 0.8,
    ease: "power2.out",
    overwrite: "auto",
  });
});
