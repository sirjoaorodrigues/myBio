// Hacking animation commands
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
    
    if (!hackingElement) return;
    
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
        title: "Senior Software Engineer",
        location: "📍 São Paulo, SP - Brazil",
        summaryTitle: "Resumo Profissional",
        summary: '<span class="highlight">Engenheiro de Software</span> com sólida experiência em desenvolvimento de sistemas, análise de dados e automação de processos. Forte domínio da linguagem <span class="highlight">Python</span>, com foco em desenvolvimento de <span class="highlight">APIs</span>, automação de tarefas, manipulação e análise de grandes volumes de dados. Experiência comprovada em frameworks como <span class="highlight">Django e Flask</span>, além de <span class="highlight">PostgreSQL</span> para gerenciamento de banco de dados. Profissional com abordagem analítica para solução de problemas, otimização de desempenho de aplicações e desenvolvimento de soluções escaláveis.',
        techTitle: "Tecnologias & Ferramentas",
        experienceTitle: "Projetos & Experiência",
        educationTitle: "Formação Acadêmica",
        certTitle: "Certificações",
        footerCopyright: "© 2025 João Rodrigues. Todos os direitos reservados.",
        footerSubtitle: "Software Engineer | Python Developer | Automation Specialist",
        langButton: "EN"
    },
    en: {
        title: "Senior Software Engineer",
        location: "📍 São Paulo, SP - Brazil",
        summaryTitle: "Professional Summary",
        summary: '<span class="highlight">Software Engineer</span> with solid experience in systems development, data analysis, and process automation. Strong command of <span class="highlight">Python</span> language, focused on <span class="highlight">API</span> development, task automation, manipulation and analysis of large data volumes. Proven experience with frameworks like <span class="highlight">Django and Flask</span>, plus <span class="highlight">PostgreSQL</span> for database management. Professional with analytical approach to problem-solving, application performance optimization, and scalable solutions development.',
        techTitle: "Technologies & Tools",
        experienceTitle: "Projects & Experience",
        educationTitle: "Academic Background",
        certTitle: "Certifications",
        footerCopyright: "© 2025 João Rodrigues. All rights reserved.",
        footerSubtitle: "Software Engineer | Python Developer | Automation Specialist",
        langButton: "PT"
    }
};

let currentLang = 'pt';

// Function to update content based on language
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Update elements that exist
    const elements = {
        profileTitle: document.getElementById('profileTitle'),
        profileLocation: document.getElementById('profileLocation'),
        summaryTitle: document.getElementById('summaryTitle'),
        summaryText: document.getElementById('summaryText'),
        techTitle: document.getElementById('techTitle'),
        experienceTitle: document.getElementById('experienceTitle'),
        educationTitle: document.getElementById('educationTitle'),
        certTitle: document.getElementById('certTitle'),
        footerCopyright: document.getElementById('footerCopyright'),
        footerSubtitle: document.getElementById('footerSubtitle'),
        langText: document.getElementById('langText')
    };

    // Update each element if it exists
    if (elements.profileTitle) elements.profileTitle.textContent = t.title;
    if (elements.profileLocation) elements.profileLocation.textContent = t.location;
    if (elements.summaryTitle) elements.summaryTitle.textContent = t.summaryTitle;
    if (elements.summaryText) elements.summaryText.innerHTML = t.summary;
    if (elements.techTitle) elements.techTitle.textContent = t.techTitle;
    if (elements.experienceTitle) elements.experienceTitle.textContent = t.experienceTitle;
    if (elements.educationTitle) elements.educationTitle.textContent = t.educationTitle;
    if (elements.certTitle) elements.certTitle.textContent = t.certTitle;
    if (elements.footerCopyright) elements.footerCopyright.textContent = t.footerCopyright;
    if (elements.footerSubtitle) elements.footerSubtitle.textContent = t.footerSubtitle;
    if (elements.langText) elements.langText.textContent = t.langButton;
}

// Initialize language toggle
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage(currentLang);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with Portuguese
    updateLanguage('pt');
    
    // Initialize language toggle
    initLanguageToggle();
    
    // Start hacking animation after a short delay
    setTimeout(typeHackingText, 1000);
});