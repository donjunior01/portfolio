import { Platform } from 'react-native';
import { PERSONAL_INFO, EDUCATION, SKILLS, PROJECTS, EXPERIENCE, CERTIFICATIONS } from '../../assets/data/portfolioData';

export const generateCV = () => {
  const cvContent = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
${PERSONAL_INFO.location}
${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

EDUCATION
${EDUCATION.map(edu => `
${edu.degree} - ${edu.field}
${edu.institution}, ${edu.location}
${edu.startDate} - ${edu.endDate}
${edu.gpa ? `GPA: ${edu.gpa}` : ''}

Relevant Coursework:
${edu.coursework?.join(', ')}

Achievements:
${edu.achievements?.map(a => `• ${a}`).join('\n')}
`).join('\n')}

TECHNICAL SKILLS
Languages: ${SKILLS.languages?.map(s => s.name).join(', ')}
Frontend: ${SKILLS.frontend?.map(s => s.name).join(', ')}
Backend: ${SKILLS.backend?.map(s => s.name).join(', ')}
Database: ${SKILLS.database?.map(s => s.name).join(', ')}
Tools: ${SKILLS.tools?.map(s => s.name).join(', ')}

PROJECTS
${PROJECTS.slice(0, 5).map(project => `
${project.title}
${project.description}
Technologies: ${project.tech.join(', ')}
${project.github ? `GitHub: ${project.github}` : ''}
${project.demo ? `Demo: ${project.demo}` : ''}
Key Highlights:
${project.highlights?.map(h => `• ${h}`).join('\n')}
`).join('\n')}

${EXPERIENCE && EXPERIENCE.length > 0 ? `EXPERIENCE
${EXPERIENCE.map(exp => `
${exp.title}
${exp.company}, ${exp.location}
${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}

${exp.description}

Responsibilities:
${exp.responsibilities?.map(r => `• ${r}`).join('\n')}

Achievements:
${exp.achievements?.map(a => `• ${a}`).join('\n')}
`).join('\n')}` : ''}

${CERTIFICATIONS && CERTIFICATIONS.length > 0 ? `CERTIFICATIONS
${CERTIFICATIONS.map(cert => `
• ${cert.name} - ${cert.issuer} (${cert.date})
${cert.credentialId ? `  Credential ID: ${cert.credentialId}` : ''}
`).join('\n')}` : ''}

${ACHIEVEMENTS && ACHIEVEMENTS.length > 0 ? `ACHIEVEMENTS & AWARDS
${ACHIEVEMENTS.map(ach => `
• ${ach.title} (${ach.date})
  ${ach.description}
`).join('\n')}` : ''}
`.trim();

  return cvContent;
};

const generateCVHTML = () => {
  return `<!DOCTYPE html>
<html>
<head>
  <title>${PERSONAL_INFO.name} - CV</title>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #ffffff;
      color: #1a202c;
      line-height: 1.4;
    }
    
    .cv-container {
      display: grid;
      grid-template-columns: 260px 1fr;
      max-width: 8.27in;
      height: 11.69in;
      margin: 0 auto;
      background: white;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    
    /* LEFT SIDEBAR - Dark Blue Theme */
    .sidebar {
      background: linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%);
      color: white;
      padding: 30px 20px;
      position: relative;
    }
    
    .sidebar::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(180deg, #3b82f6, #2563eb);
    }
    
    /* Profile Section */
    .profile {
      text-align: center;
      margin-bottom: 25px;
      padding-bottom: 20px;
      border-bottom: 2px solid rgba(255,255,255,0.2);
    }
    
    .profile-photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
      margin: 0 auto 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: 700;
      color: white;
      border: 4px solid rgba(255,255,255,0.3);
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    
    .profile h1 {
      font-size: 20pt;
      font-weight: 700;
      margin-bottom: 5px;
      letter-spacing: 0.5px;
    }
    
    .profile .role {
      font-size: 10pt;
      opacity: 0.95;
      font-weight: 500;
      line-height: 1.3;
    }
    
    /* Contact Section */
    .contact-section {
      margin-bottom: 25px;
    }
    
    .sidebar-title {
      font-size: 11pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid rgba(255,255,255,0.3);
    }
    
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;
      font-size: 8.5pt;
      line-height: 1.3;
    }
    
    .contact-icon {
      width: 18px;
      min-width: 18px;
      height: 18px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.15);
      border-radius: 4px;
      font-size: 10pt;
    }
    
    .contact-text {
      word-break: break-word;
    }
    
    /* Skills Section */
    .skills-section {
      margin-bottom: 25px;
    }
    
    .skill-item {
      margin-bottom: 12px;
    }
    
    .skill-name {
      font-size: 9pt;
      font-weight: 600;
      margin-bottom: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .skill-level {
      font-size: 8pt;
      opacity: 0.9;
    }
    
    .skill-bar {
      width: 100%;
      height: 6px;
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    
    .skill-fill {
      height: 100%;
      background: linear-gradient(90deg, #60a5fa, #93c5fd);
      border-radius: 10px;
      transition: width 0.3s ease;
    }
    
    /* Certifications in Sidebar */
    .cert-item {
      margin-bottom: 10px;
      font-size: 8pt;
      line-height: 1.3;
      padding: 8px;
      background: rgba(255,255,255,0.1);
      border-radius: 6px;
      border-left: 3px solid #60a5fa;
    }
    
    .cert-name {
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    .cert-issuer {
      opacity: 0.9;
      font-size: 7.5pt;
    }
    
    /* MAIN CONTENT AREA */
    .main-content {
      padding: 35px 35px 30px 35px;
      background: white;
    }
    
    /* Header in Main */
    .main-header {
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 3px solid #2563eb;
    }
    
    .main-title {
      font-size: 32pt;
      font-weight: 800;
      color: #1e40af;
      letter-spacing: -0.5px;
      margin-bottom: 3px;
    }
    
    .main-subtitle {
      font-size: 12pt;
      color: #64748b;
      font-weight: 600;
    }
    
    /* Section Styles */
    .section {
      margin-bottom: 18px;
    }
    
    .section-header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    }
    
    .section-icon {
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14pt;
      flex-shrink: 0;
    }
    
    .section-title {
      font-size: 13pt;
      font-weight: 700;
      color: #1e40af;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .section-line {
      flex: 1;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, transparent);
    }
    
    /* Summary */
    .summary-text {
      font-size: 9pt;
      line-height: 1.5;
      color: #475569;
      text-align: justify;
      padding: 12px 15px;
      background: #f8fafc;
      border-left: 4px solid #3b82f6;
      border-radius: 4px;
    }
    
    /* Education */
    .education-item {
      margin-bottom: 12px;
      padding: 12px 15px;
      background: #f8fafc;
      border-radius: 6px;
      border-left: 4px solid #10b981;
    }
    
    .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5px;
    }
    
    .edu-degree {
      font-size: 10pt;
      font-weight: 700;
      color: #1e40af;
    }
    
    .edu-date {
      font-size: 8pt;
      color: #64748b;
      font-weight: 600;
      background: white;
      padding: 3px 8px;
      border-radius: 4px;
    }
    
    .edu-institution {
      font-size: 9pt;
      color: #334155;
      font-weight: 600;
      margin-bottom: 3px;
    }
    
    .edu-details {
      font-size: 8pt;
      color: #64748b;
      margin-bottom: 5px;
    }
    
    .edu-achievements {
      margin-top: 5px;
      padding-left: 15px;
    }
    
    .edu-achievements li {
      font-size: 8pt;
      color: #475569;
      margin-bottom: 2px;
      line-height: 1.3;
    }
    
    /* Experience */
    .experience-item {
      margin-bottom: 12px;
      padding: 12px 15px;
      background: #f8fafc;
      border-radius: 6px;
      border-left: 4px solid #f59e0b;
    }
    
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5px;
    }
    
    .exp-title {
      font-size: 10pt;
      font-weight: 700;
      color: #1e40af;
    }
    
    .exp-date {
      font-size: 8pt;
      color: #64748b;
      font-weight: 600;
      background: white;
      padding: 3px 8px;
      border-radius: 4px;
      white-space: nowrap;
    }
    
    .exp-company {
      font-size: 9pt;
      color: #334155;
      font-weight: 600;
      margin-bottom: 6px;
    }
    
    .exp-responsibilities {
      padding-left: 15px;
    }
    
    .exp-responsibilities li {
      font-size: 8pt;
      color: #475569;
      margin-bottom: 3px;
      line-height: 1.35;
    }
    
    /* Technical Skills Grid */
    .tech-skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    .tech-category {
      padding: 10px;
      background: #f8fafc;
      border-radius: 6px;
      border-left: 3px solid #3b82f6;
    }
    
    .tech-category-name {
      font-size: 9pt;
      font-weight: 700;
      color: #1e40af;
      margin-bottom: 5px;
    }
    
    .tech-list {
      font-size: 8pt;
      color: #475569;
      line-height: 1.4;
    }
    
    /* Print Styles */
    @media print {
      body {
        background: white;
      }
      
      .cv-container {
        box-shadow: none;
        max-width: 100%;
        height: auto;
      }
      
      .section {
        page-break-inside: avoid;
      }
      
      @page {
        size: A4;
        margin: 0;
      }
    }
  </style>
</head>
<body>
  <div class="cv-container">
    <!-- LEFT SIDEBAR -->
    <div class="sidebar">
      <!-- Profile -->
      <div class="profile">
        <div class="profile-photo">${PERSONAL_INFO.name.split(' ').map(n => n[0]).join('')}</div>
        <h1>${PERSONAL_INFO.name}</h1>
        <div class="role">${PERSONAL_INFO.title}</div>
      </div>
      
      <!-- Contact -->
      <div class="contact-section">
        <div class="sidebar-title">CONTACT</div>
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div class="contact-text">${PERSONAL_INFO.email}</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div class="contact-text">${PERSONAL_INFO.phone}</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-text">${PERSONAL_INFO.location}</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">💻</div>
          <div class="contact-text">${PERSONAL_INFO.github.replace('https://github.com/', '')}</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">🔗</div>
          <div class="contact-text">${PERSONAL_INFO.linkedin.replace('https://www.linkedin.com/in/', '')}</div>
        </div>
      </div>
      
      <!-- Top Skills with Progress Bars -->
      <div class="skills-section">
        <div class="sidebar-title">TOP SKILLS</div>
        ${SKILLS.languages.slice(0, 5).map(skill => `
          <div class="skill-item">
            <div class="skill-name">
              <span>${skill.name}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
        ${SKILLS.frontend.slice(0, 3).map(skill => `
          <div class="skill-item">
            <div class="skill-name">
              <span>${skill.name}</span>
              <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <!-- Certifications -->
      <div class="contact-section">
        <div class="sidebar-title">CERTIFICATIONS</div>
        ${CERTIFICATIONS.slice(0, 4).map(cert => `
          <div class="cert-item">
            <div class="cert-name">${cert.icon} ${cert.name}</div>
            <div class="cert-issuer">${cert.issuer} • ${cert.date}</div>
          </div>
        `).join('')}
      </div>
    </div>
    
    <!-- MAIN CONTENT -->
    <div class="main-content">
      <!-- Header -->
      <div class="main-header">
        <div class="main-title">${PERSONAL_INFO.name.toUpperCase()}</div>
        <div class="main-subtitle">${PERSONAL_INFO.title}</div>
      </div>
      
      <!-- Professional Summary -->
      <div class="section">
        <div class="section-header">
          <div class="section-icon">👤</div>
          <div class="section-title">Professional Summary</div>
          <div class="section-line"></div>
        </div>
        <div class="summary-text">${PERSONAL_INFO.bio}</div>
      </div>
      
      <!-- Education -->
      <div class="section">
        <div class="section-header">
          <div class="section-icon">🎓</div>
          <div class="section-title">Education</div>
          <div class="section-line"></div>
        </div>
        ${EDUCATION.map(edu => `
          <div class="education-item">
            <div class="edu-header">
              <div class="edu-degree">${edu.degree}</div>
              <div class="edu-date">${edu.startDate} - ${edu.endDate}</div>
            </div>
            <div class="edu-institution">${edu.institution}</div>
            <div class="edu-details">${edu.field} • GPA: ${edu.gpa} • ${edu.location}</div>
            <ul class="edu-achievements">
              ${edu.achievements.slice(0, 3).map(a => `<li>${a}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <!-- Professional Experience -->
      <div class="section">
        <div class="section-header">
          <div class="section-icon">💼</div>
          <div class="section-title">Professional Experience</div>
          <div class="section-line"></div>
        </div>
        ${EXPERIENCE.slice(0, 3).map(exp => `
          <div class="experience-item">
            <div class="exp-header">
              <div class="exp-title">${exp.title}</div>
              <div class="exp-date">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</div>
            </div>
            <div class="exp-company">${exp.company} • ${exp.location}</div>
            <ul class="exp-responsibilities">
              ${exp.responsibilities.slice(0, 4).map(r => `<li>${r}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <!-- Technical Skills -->
      <div class="section">
        <div class="section-header">
          <div class="section-icon">⚡</div>
          <div class="section-title">Technical Skills</div>
          <div class="section-line"></div>
        </div>
        <div class="tech-skills-grid">
          <div class="tech-category">
            <div class="tech-category-name">Backend & Database</div>
            <div class="tech-list">${SKILLS.backend.map(s => s.name).join(' • ')} • ${SKILLS.database.map(s => s.name).join(' • ')}</div>
          </div>
          <div class="tech-category">
            <div class="tech-category-name">Tools & DevOps</div>
            <div class="tech-list">${SKILLS.tools.map(s => s.name).join(' • ')} • ${SKILLS.other.map(s => s.name).join(' • ')}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
};

export const downloadCV = () => {
  if (Platform.OS === 'web') {
    const cvHTML = generateCVHTML();
    const blob = new Blob([cvHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_CV.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  }
  return false;
};

export const printCV = () => {
  if (Platform.OS === 'web') {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(generateCVHTML());
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 250);
    return true;
  }
  return false;
};
