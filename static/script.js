
const hackingCommands = [
    "ssh root@matrix.neo",
    "Password: ********",
    "Access granted...",
    "cd /home/joao",
    "ls -la projects/",
    "python3 neural_net.py",
    "Initializing AI...",
    "Loading algorithms...",
    "System infiltrated ✓",
    "Welcome to the Matrix"
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;
let currentCommand = "";

function typeHackingText() {
    const hackingElement = document.getElementById('hackingText');
    
    if (!isDeleting && charIndex < hackingCommands[commandIndex].length) {
        // Typing
        currentCommand += hackingCommands[commandIndex].charAt(charIndex);
        hackingElement.textContent = currentCommand;
        charIndex++;
        setTimeout(typeHackingText, Math.random() * 100 + 50);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        currentCommand = hackingCommands[commandIndex].substring(0, charIndex - 1);
        hackingElement.textContent = currentCommand;
        charIndex--;
        setTimeout(typeHackingText, 30);
    } else {
        // Switch between typing and deleting
        isDeleting = !isDeleting;
        if (!isDeleting) {
            commandIndex = (commandIndex + 1) % hackingCommands.length;
        }
        setTimeout(typeHackingText, isDeleting ? 1000 : 500);
    }
}

// Language translations
const translations = {
    pt: {
        name: "João Rodrigues",
        title: "Senior Software Engineer",
        location: "📍 São Paulo, SP - Brazil",
        summaryTitle: "Resumo Profissional",
        summary: "Engenheiro de Software com sólida experiência em desenvolvimento de sistemas, análise de dados e automação de processos. Forte domínio da linguagem Python, com foco em desenvolvimento de APIs, automação de tarefas, manipulação e análise de grandes volumes de dados. Experiência comprovada em frameworks como Django e Flask, além de PostgreSQL para gerenciamento de banco de dados. Profissional com abordagem analítica para solução de problemas, otimização de desempenho de aplicações e desenvolvimento de soluções escaláveis.",
        techTitle: "Tecnologias & Ferramentas",
        experienceTitle: "Projetos & Experiência",
        educationTitle: "Formação Acadêmica",
        certTitle: "Certificações",
        footerCopyright: "© 2025 João Rodrigues. Todos os direitos reservados.",
        footerSubtitle: "Software Engineer | Python Developer | Automation Specialist",
        langButton: "EN",
        experience1: {
            title: "Desenvolvimento de APIs Enterprise",
            company: "Sistemas de Backend & Microserviços",
            date: "setembro de 2024 – presente",
            desc: "Desenvolvimento de APIs escaláveis com Python (Flask, Django REST Framework), implementação de autenticação segura (JWT, OAuth2), gerenciamento de banco de dados (PostgreSQL, MySQL) e documentação completa com Swagger/OpenAPI. Testes automatizados e práticas de CI/CD."
        },
        experience2: {
            title: "Automação de Processos Financeiros",
            company: "Data Analysis & Process Automation",
            date: "março de 2025 – presente",
            desc: "Automação de tarefas complexas utilizando Python/Pandas/NumPy para análise de dados financeiros, desenvolvimento de dashboards interativos com React e integração de sistemas via APIs RESTful. Otimização de processos manuais com ganhos significativos de eficiência."
        },
        experience3: {
            title: "Desenvolvimento Fullstack & DevOps",
            company: "Web Applications & Cloud Infrastructure",
            date: "janeiro de 2018 – setembro de 2024",
            desc: "Projetos completos de desenvolvimento web utilizando Python (Django, Flask), React, Java e Spring Boot. Implementação de infraestrutura em nuvem (AWS, Oracle Cloud), automação de deploys, web scraping, testes automatizados e metodologias ágeis. Soluções para diversos setores incluindo imobiliário, industrial e plataformas de videoconferência."
        },
        experience4: {
            title: "Robótica & Sistemas Autônomos",
            company: "Automation & Embedded Systems",
            date: "janeiro de 2017 - julho de 2018",
            desc: "Desenvolvimento de sistemas robóticos utilizando C++, programação de robôs autônomos, participação em competições de robótica com conquista de medalhas. Experiência em sistemas embarcados e controle de automação industrial."
        },
        education1: {
            title: "Bacharelado em Engenharia de Controle e Automação",
            company: "Instituto Federal de São Paulo - IFSP",
            date: "Conclusão prevista: julho/2025"
        },
        education2: {
            title: "Técnico em Automação Industrial",
            company: "Instituto Federal de São Paulo - IFSP",
            date: "2016 - 2019"
        }
    },
    en: {
        name: "João Rodrigues",
        title: "Senior Software Engineer",
        location: "📍 São Paulo, SP - Brazil",
        summaryTitle: "Professional Summary",
        summary: "Software Engineer with solid experience in systems development, data analysis, and process automation. Strong command of Python language, focused on API development, task automation, manipulation and analysis of large data volumes. Proven experience with frameworks like Django and Flask, plus PostgreSQL for database management. Professional with analytical approach to problem-solving, application performance optimization, and scalable solutions development.",
        techTitle: "Technologies & Tools",
        experienceTitle: "Projects & Experience",
        educationTitle: "Academic Background",
        certTitle: "Certifications",
        footerCopyright: "© 2025 João Rodrigues. All rights reserved.",
        footerSubtitle: "Software Engineer | Python Developer | Automation Specialist",
        langButton: "PT",
        experience1: {
            title: "Enterprise API Development",
            company: "Backend Systems & Microservices",
            date: "September 2024 – present",
            desc: "Development of scalable APIs with Python (Flask, Django REST Framework), secure authentication implementation (JWT, OAuth2), database management (PostgreSQL, MySQL) and complete documentation with Swagger/OpenAPI. Automated testing and CI/CD practices."
        },
        experience2: {
            title: "Financial Process Automation",
            company: "Data Analysis & Process Automation",
            date: "March 2025 – present",
            desc: "Complex task automation using Python/Pandas/NumPy for financial data analysis, interactive dashboard development with React and system integration via RESTful APIs. Manual process optimization with significant efficiency gains."
        },
        experience3: {
            title: "Fullstack Development & DevOps",
            company: "Web Applications & Cloud Infrastructure",
            date: "January 2018 – September 2024",
            desc: "Complete web development projects using Python (Django, Flask), React, Java and Spring Boot. Cloud infrastructure implementation (AWS, Oracle Cloud), deployment automation, web scraping, automated testing and agile methodologies. Solutions for various sectors including real estate, industrial and video conferencing platforms."
        },
        experience4: {
            title: "Robotics & Autonomous Systems",
            company: "Automation & Embedded Systems",
            date: "January 2017 - July 2018",
            desc: "Development of robotic systems using C++, autonomous robot programming, participation in robotics competitions with medal achievements. Experience in embedded systems and industrial automation control."
        },
        education1: {
            title: "Bachelor's in Control and Automation Engineering",
            company: "Federal Institute of São Paulo - IFSP",
            date: "Expected completion: July/2025"
        },
        education2: {
            title: "Industrial Automation Technician",
            company: "Federal Institute of São Paulo - IFSP",
            date: "2016 - 2019"
        }
    }
};

let currentLang = 'pt';

// Function to update content based on language
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update basic info
    document.querySelector('.profile-title').textContent = t.title;
    document.querySelector('.profile-location').textContent = t.location;
    
    // Update section titles
    document.querySelectorAll('.section-title')[0].textContent = t.summaryTitle;
    document.querySelectorAll('.section-title')[1].textContent = t.techTitle;
    document.querySelectorAll('.section-title')[2].textContent = t.experienceTitle;
    document.querySelectorAll('.section-title')[3].textContent = t.educationTitle;
    document.querySelectorAll('.section-title')[4].textContent = t.certTitle;
    
    // Update summary
    document.querySelector('.summary').innerHTML = t.summary.replace(/Python|Django|Flask|PostgreSQL|APIs/g, '<span class="highlight">    </footer></body></html></span>');
    
    // Update experiences
    const experiences = document.querySelectorAll('.experience-item');
    experiences[0].querySelector('.experience-title').textContent = t.experience1.title;
    experiences[0].querySelector('.experience-company').textContent = t.experience1.company;
    experiences[0].querySelector('.experience-date').textContent = t.experience1.date;
    experiences[0].querySelector('.experience-desc').textContent = t.experience1.desc;
    
    experiences[1].querySelector('.experience-title').textContent = t.experience2.title;
    experiences[1].querySelector('.experience-company').textContent = t.experience2.company;
    experiences[1].querySelector('.experience-date').textContent = t.experience2.date;
    experiences[1].querySelector('.experience-desc').textContent = t.experience2.desc;
    
    experiences[2].querySelector('.experience-title').textContent = t.experience3.title;
    experiences[2].querySelector('.experience-company').textContent = t.experience3.company;
    experiences[2].querySelector('.experience-date').textContent = t.experience3.date;
    experiences[2].querySelector('.experience-desc').textContent = t.experience3.desc;
    
    experiences[3].querySelector('.experience-title').textContent = t.experience4.title;
    experiences[3].querySelector('.experience-company').textContent = t.experience4.company;
    experiences[3].querySelector('.experience-date').textContent = t.experience4.date;
    experiences[3].querySelector('.experience-desc').textContent = t.experience4.desc;
    
    // Update education
    experiences[4].querySelector('.experience-title').textContent = t.education1.title;
    experiences[4].querySelector('.experience-company').textContent = t.education1.company;
    experiences[4].querySelector('.experience-date').textContent = t.education1.date;
    
    experiences[5].querySelector('.experience-title').textContent = t.education2.title;
    experiences[5].querySelector('.experience-company').textContent = t.education2.company;
    experiences[5].querySelector('.experience-date').textContent = t.education2.date;
    
    // Update footer
    document.querySelector('.footer-text p:first-child').textContent = t.footerCopyright;
    document.querySelector('.footer-subtitle').textContent = t.footerSubtitle;
    
    // Update button text
    document.getElementById('langText').textContent = t.langButton;
}

// Language toggle event
document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    updateLanguage(currentLang);
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Initialize with Portuguese
updateLanguage('pt');

// Start hacking animation
setTimeout(typeHackingText, 1000);
