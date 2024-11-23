document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const text = "Bienvenido a mi Curriculum Vitae";
    let index = 0;
    const typingEffect = document.getElementById("typing-effect");

    function typeWriter() {
        if (index < text.length) {
            typingEffect.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Animate skill cards
    gsap.utils.toArray('.skill-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Create and animate job cards
    const jobContainer = document.querySelector('.job-container');
    const jobs = [
        {
            title: "Apoyo Administrativo",
            company: "Mananuf Cocina 2020",
            location: "Melgar, Colombia",
            period: "Diciembre 2022 – Noviembre 2023",
            responsibilities: [
                "Registro de facturas y control de pagos",
                "Análisis de datos financieros",
                "Elaboración de informes financieros básicos",
                "Gestión y actualización de archivos y bases de datos"
            ]
        },
        {
            title: "Auxiliar de Cocina",
            company: "Hotel Almirante Cartagena",
            location: "Cartagena, Colombia",
            period: "Abril 2022 – Agosto 2022",
            responsibilities: [
                "Apoyo en actividades de terraza y cocina principal",
                "Preparación de platos y control de inventarios",
                "Cumplimiento de normativas de higiene y seguridad alimentaria"
            ]
        },
        {
            title: "Pasante de Gastronomía",
            company: "Hotel Almirante Cartagena",
            location: "Cartagena, Colombia",
            period: "Octubre 2021 – Abril 2022",
            responsibilities: [
                "Preparación de ingredientes y organización de la cocina",
                "Colaboración en la elaboración de platos sencillos",
                "Apoyo en la recepción y almacenamiento de mercancías"
            ]
        }
    ];

    jobs.forEach((job, index) => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>${job.company}</strong></p>
            <p>${job.location} | ${job.period}</p>
            <ul>
                ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
            </ul>
        `;
        jobContainer.appendChild(jobCard);

        gsap.from(jobCard, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: jobCard,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });


});