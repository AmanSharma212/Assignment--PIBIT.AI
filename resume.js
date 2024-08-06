const resumeData = {
    "name": "Aman Sharma",
    "contact": {
        "location": "Mumbai, Maharashtra",
        "phone": "+91-9082541808",
        "email": "sharma.aman00212@gmail.com",
        "linkedin": "https://linkedin.com/in/amansharma005",
        "github": "https://github.com/AmanSharma212"
    },
    "projects": [
        {
            "name": "Bank Loan Analysis",
            "tech": ["Python", "Power BI"],
            "duration": "Jan 2024 - Mar 2024",
            "description": [
                "Got into the Finance domain with a Bank Loan Analysis using Power BI and SQL.",
                "Explored the ins and outs of Power BI covering everything needed to know to master data visualization and analysis."
            ]
        },
        {
            "name": "FIFA Player Analysis",
            "tech": ["Python"],
            "duration": "Sept 2023 – Nov 2023",
            "description": [
                "Created a FIFA players analysis project developed an innovative initiative aimed at extracting insights and patterns from data related to professional soccer players.",
                "Collected and analyzed extensive datasets containing information on player statistics attributes ratings and performance history."
            ]
        },
        {
            "name": "Sign Language Detection",
            "tech": ["Python"],
            "duration": "Jan 2023 - May 2023",
            "description": [
                "Created a System for dumb and deaf people that helps in communication using Sign Language.",
                "Developed and implemented a computer vision system that recognizes and interprets sign language gestures in real time."
            ]
        }
    ],
    "certifications": [
        {
            "name": "Getting and Cleaning Data on R studio",
            "date": "March 2024",
            "provider": "Coursera"
        },
        {
            "name": "Introduction to Statistics from Stanford Online",
            "date": "Nov 2023",
            "provider": "Coursera"
        },
        {
            "name": "Power BI",
            "date": "April 2023",
            "provider": "Atos"
        },
        {
            "name": "Web Developments",
            "date": "March 2022",
            "provider": "Max Academy"
        }
    ],
    "technical_skills": {
        "languages": ["C", "C++", "Python", "R programming", "HTML", "CSS"],
        "technologies_frameworks": ["Excel", "SQL", "Power BI", "NumPy", "Pandas", "Matplotlib"],
        "skills": ["Problem-Solving", "Data Analytics"]
    },
    "education": [
        {
            "institution": "Lovely Professional University, Phagwara, Punjab",
            "degree": "M. Tech. in Data Science and Analytics",
            "cgpa": "8.17",
            "duration": "Aug 2023 – Present"
        },
        {
            "institution": "Universal College of Engineering, Mumbai, Maharashtra",
            "degree": "B. Tech in Computer Science",
            "cgpa": "8.79",
            "duration": "Aug 2019 – May 2023"
        },
        {
            "institution": "Shri T.P Bhatia, Mumbai, Maharashtra",
            "degree": "Higher Secondary",
            "percentage": "78.77",
            "duration": "July 2017 – June 2019"
        },
        {
            "institution": "Mother Teresa English Secondary School, Mumbai, Maharashtra",
            "degree": "Secondary",
            "percentage": "84",
            "duration": "June 2007 – July 2017"
        }
    ]
};

function displayResume(resume) {
    const resumeContainer = document.getElementById('resume');

    // Name and Contact
    const header = document.createElement('div');
    header.classList.add('section');
    header.innerHTML = `
        <h1>${resume.name}</h1>
        <div class="contact-list">
            <div><strong>Location:</strong> ${resume.contact.location}</div>
            <div><strong>Phone:</strong> ${resume.contact.phone}</div>
            <div><strong>Email:</strong> <a href="mailto:${resume.contact.email}">${resume.contact.email}</a></div>
            <div><strong>LinkedIn:</strong> <a href="${resume.contact.linkedin}" target="_blank">${resume.contact.linkedin}</a></div>
            <div><strong>GitHub:</strong> <a href="${resume.contact.github}" target="_blank">${resume.contact.github}</a></div>
        </div>
    `;
    resumeContainer.appendChild(header);

    // Projects
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('section');
    projectsSection.innerHTML = `<h2>Projects</h2>`;
    resume.projects.forEach(proj => {
        const projDiv = document.createElement('div');
        projDiv.innerHTML = `
            <h3>${proj.name} (${proj.duration})</h3>
            <ul>
                ${proj.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>
            <p><strong>Tech:</strong> ${proj.tech.join(', ')}</p>
        `;
        projectsSection.appendChild(projDiv);
    });
    resumeContainer.appendChild(projectsSection);

    // Certifications
    const certificationsSection = document.createElement('div');
    certificationsSection.classList.add('section');
    certificationsSection.innerHTML = `<h2>Certifications</h2>`;
    resume.certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.innerHTML = `<p><strong>${cert.name}</strong> - ${cert.date} (${cert.provider})</p>`;
        certificationsSection.appendChild(certDiv);
    });
    resumeContainer.appendChild(certificationsSection);

    // Technical Skills
    const skillsSection = document.createElement('div');
    skillsSection.classList.add('section');
    skillsSection.innerHTML = `<h2>Technical Skills</h2>`;
    const skillsDiv = document.createElement('div');
    skillsDiv.classList.add('skill-list');
    skillsDiv.innerHTML = `
        <div><strong>Languages:</strong> ${resume.technical_skills.languages.join(', ')}</div>
        <div><strong>Technologies/Frameworks:</strong> ${resume.technical_skills.technologies_frameworks.join(', ')}</div>
        <div><strong>Skills:</strong> ${resume.technical_skills.skills.join(', ')}</div>
    `;
    skillsSection.appendChild(skillsDiv);
    resumeContainer.appendChild(skillsSection);

    // Education
    const educationSection = document.createElement('div');
    educationSection.classList.add('section');
    educationSection.innerHTML = `<h2>Education</h2>`;
    resume.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
            <p><strong>${edu.institution}</strong></p>
            <p>${edu.degree}</p>
            <p>${edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}</p>
            <p>${edu.since ? `Since: ${edu.since}` : `Duration: ${edu.duration}`}</p>
        `;
        educationSection.appendChild(eduDiv);
    });
    resumeContainer.appendChild(educationSection);
}

document.addEventListener('DOMContentLoaded', () => {
    displayResume(resumeData);
});
