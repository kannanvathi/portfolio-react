import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Navbar Component
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo">Bharathikannan<span className="logo-dot">.</span></a>
        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setMobileOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setMobileOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a></li>
          <li><a href="#services" onClick={() => setMobileOpen(false)}>Services</a></li>
          <li><a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a></li>
          <li><a href="#testimonials" onClick={() => setMobileOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>Hire Me</a></li>
        </ul>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

// Hero Component
function Hero() {
  const [counters, setCounters] = useState({ years: 0, repos: 0, clients: 0, satisfaction: 0 });
  const heroRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true;
        animateCounter('years', 7, 40);
        animateCounter('repos', 24, 40);
        animateCounter('clients', 15, 40);
        animateCounter('satisfaction', 99, 40);
      }
    });
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = (key, target, duration) => {
    let current = 0;
    const increment = target / duration;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounters(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 40);
  };

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot"></span>
          Available for Freelance Projects
        </div>
        <h1>
          Fullstack Developer<br />
          &amp; Team Lead <strong>Bharathikannan P</strong>
        </h1>
        <p className="hero-subtitle">
          Seven years shaping enterprise-grade web products — from insurance AI platforms
          to large-scale test management systems. I lead teams, design architecture,
          and ship interfaces that feel effortless.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="#projects" className="btn-secondary">
            View Selected Work
          </a>
          <a href="https://github.com/kannanvathi" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <h3>{counters.years}<sup>+</sup></h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>{counters.repos}<sup>+</sup></h3>
            <p>GitHub Repos</p>
          </div>
          <div className="stat-item">
            <h3>{counters.clients}<sup>+</sup></h3>
            <p>Clients Worldwide</p>
          </div>
          <div className="stat-item">
            <h3>{counters.satisfaction}<sup>%</sup></h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Tech Marquee Component
function TechMarquee() {
  const items = ['Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Java', 'Python', 'AWS', 'Azure', 'OpenAI', 'Claude AI', 'REST APIs', 'CI/CD', 'Figma', 'Team Leadership'];
  const doubled = [...items, ...items];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}<i>✦</i></span>
        ))}
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">About</span>
          <h2 className="section-title">Engineering craft with<br /><span className="em">quiet precision</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a Fullstack Developer and Team Lead with over seven years spent building
              enterprise software that people actually rely on — insurance document platforms,
              test management systems, and commerce products serving global teams.
            </p>
            <p>
              My work sits at the intersection of architecture and craft: Vue.js and Angular
              on the front, Java, Python and Node.js behind it, with AI services and cloud
              infrastructure woven in where they create real leverage.
            </p>
            <p>
              I don't stop at fulfilling requirements. I analyse, challenge, and improve —
              mentoring engineers, raising the quality bar, and delivering products that
              outlast the sprint they were born in.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1rem' }}>
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div className="about-card reveal">
            <h3>Quick facts</h3>
            <ul className="info-list">
              <li><span className="label">Name</span><span className="value">Bharathikannan Palanisamy</span></li>
              <li><span className="label">Location</span><span className="value">Chennai, India</span></li>
              <li><span className="label">Experience</span><span className="value">7+ Years</span></li>
              <li><span className="label">Specialization</span><span className="value">Fullstack Development</span></li>
              <li><span className="label">Availability</span><span className="value" style={{ color: '#4ade80' }}>Open to Projects</span></li>
              <li><span className="label">Timezone</span><span className="value">IST (UTC+5:30)</span></li>
              <li><span className="label">Languages</span><span className="value">English, Tamil</span></li>
              <li><span className="label">GitHub</span><span className="value"><a href="https://github.com/kannanvathi" target="_blank" rel="noopener noreferrer" style={{ color: '#d8b46a', textDecoration: 'none' }}>kannanvathi</a></span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Experience Component
function Experience() {
  const experiences = [
    {
      title: 'Team Lead',
      company: 'Intellect Design Arena',
      date: 'Oct 2022 — Present',
      desc: 'Leading a front-end development team building enterprise fintech applications.',
      bullets: [
        'Architecting features in Vue.js and modern JavaScript with industry best practices',
        'Facilitating Scrum ceremonies, sprint planning, and risk management',
        'Mentoring junior developers through structured code reviews and knowledge sharing',
        'Championing a culture of quality, transparency, and ownership across the team'
      ]
    },
    {
      title: 'Vue.js Consultant',
      company: 'Capgemini',
      date: 'Apr 2022 — Oct 2022',
      desc: 'Delivered frontend solutions as a Vue.js specialist consultant for enterprise clients.',
      bullets: [
        'Collaborated with cross-functional teams on high-stakes client deliverables',
        'Implemented scalable Vue.js architectures for enterprise-scale projects'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'DCKAP',
      date: 'Sep 2019 — Jun 2022',
      desc: 'Led major UI revamp initiatives and shipped full-stack product features.',
      bullets: [
        'Spearheaded a complete UI revamp in Vue.js and Laravel, lifting user engagement',
        'Ran UX research and translated findings directly into feature improvements',
        'Owned RESTful API integrations and complex state management with Vuex'
      ]
    },
    {
      title: 'UI Developer',
      company: 'Elite Software Solutions',
      date: 'Nov 2017 — Sep 2019',
      desc: 'Built dynamic interfaces and single-page applications for diverse clients.',
      bullets: [
        'Developed SPAs with the Vue.js framework from the ground up',
        'Presented UX designs and advocated for user-centric decisions'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Experience</span>
          <h2 className="section-title">A journey of<br /><span className="em">building &amp; leading</span></h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item reveal" key={index}>
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-company">{exp.company}</p>
                </div>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <div className="timeline-desc">
                <p>{exp.desc}</p>
                <ul>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Component
function Skills() {
  const skills = [
    { icon: 'Fe', title: 'Frontend Development', tags: ['Vue.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vuex', 'Responsive Design'] },
    { icon: 'Be', title: 'Backend & Languages', tags: ['Java', 'Python', 'Node.js', 'RESTful APIs', 'Laravel', 'MVC Architecture'] },
    { icon: 'Cl', title: 'Cloud & DevOps', tags: ['AWS', 'Azure', 'Elastic Beanstalk', 'S3', 'Lambda', 'CI/CD'] },
    { icon: 'Ai', title: 'AI & Machine Learning', tags: ['OpenAI', 'Claude AI', 'Prompt Engineering', 'Document AI', 'NLP'] },
    { icon: 'Ux', title: 'Design & UX', tags: ['User Experience', 'UI Design', 'Graphic Design', 'Figma', 'Web Accessibility'] },
    { icon: 'Ld', title: 'Leadership', tags: ['Team Leadership', 'Mentoring', 'Sprint Planning', 'Risk Management', 'Client Handling'] }
  ];

  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical <span className="em">expertise</span></h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card reveal" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span className="skill-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Component
function Services() {
  const services = [
    { num: '01', title: 'Full-Stack Web Development', desc: 'End-to-end product development with Vue.js, Angular, Node.js and RESTful APIs — from first sketch to production deployment.' },
    { num: '02', title: 'Frontend Architecture', desc: 'Scalable, maintainable frontend foundations: component libraries, state management, performance budgets, and design systems.' },
    { num: '03', title: 'UI/UX Design & Development', desc: 'Refined interfaces built around real user behaviour — responsive, accessible, and pixel-perfect in execution.' },
    { num: '04', title: 'Technical Consulting', desc: 'Independent guidance on stack selection, architecture decisions, performance audits, and engineering best practice.' },
    { num: '05', title: 'Team Leadership & Mentoring', desc: 'Sprint planning, code review discipline, and developer growth — helping teams ship quality work on time.' },
    { num: '06', title: 'API Integration & Modernization', desc: 'Third-party integrations, legacy system modernization, and migration to modern frameworks without downtime.' }
  ];

  return (
    <section id="services">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Services</span>
          <h2 className="section-title">What I can do<br /><span className="em">for you</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal" key={index}>
              <div className="service-number">{service.num}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Carousel Component
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const slides = [
    { src: '/images/submission%20dashboard.png', caption: 'Submission Dashboard' },
    { src: '/images/submission%20dashboard%202.png', caption: 'Submission Analytics' },
    { src: '/images/submission%20dashboard%203.png', caption: 'Dashboard Overview' },
    { src: '/images/classification.png', caption: 'Document Classification' },
    { src: '/images/usecase%20review.png', caption: 'Use Case Review' },
    { src: '/images/compare%20view.png', caption: 'Compare View' }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(autoPlayRef.current);
  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
  };

  const handleTouchStart = (e) => {
    autoPlayRef.current.touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const diff = autoPlayRef.current.touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  };

  return (
    <div className="carousel-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={slide.src} alt={slide.caption} />
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-prev" onClick={prevSlide}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="carousel-btn carousel-next" onClick={nextSlide}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)} key={index}></button>
        ))}
      </div>
      <div className="carousel-counter">
        <span>{String(currentIndex + 1).padStart(2, '0')}</span> / <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

// Projects Component
function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected <span className="em">work</span></h2>
        </div>
        <div className="featured-project reveal">
          <div className="featured-project-content">
            <div className="featured-badge">✦ Featured Project</div>
            <h3 className="featured-title">Insurance Document Extraction Tool</h3>
            <p className="featured-desc">
              An enterprise-grade, AI-powered document processing platform for the insurance
              industry. Java and Python services on AWS and Azure, with OpenAI and Claude AI
              driving intelligent classification, data extraction, and automated review workflows.
            </p>
            <div className="featured-highlights">
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>Submission Dashboards</span></div>
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>AI Classification</span></div>
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>Use Case Review</span></div>
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>Compare Views</span></div>
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>OpenAI &amp; Claude AI</span></div>
              <div className="highlight-item"><span className="highlight-icon">✦</span><span>AWS &amp; Azure</span></div>
            </div>
            <div className="project-tech" style={{ marginTop: '1.5rem' }}>
              <span>Java</span><span>Python</span><span>Vue.js</span><span>AWS</span><span>Azure</span><span>OpenAI</span><span>Claude AI</span>
            </div>
            <a href="#contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Discuss This Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
          <div className="featured-project-carousel">
            <Carousel />
          </div>
        </div>

        <div className="more-projects">
          <div className="more-projects-header reveal">
            <span className="section-label">More Work</span>
            <h3 className="more-projects-title">Other projects I've <span className="em">delivered</span></h3>
          </div>
          <div className="projects-grid">
            <a
              href="https://www.tejautomation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal"
            >
              <div className="project-card-top">
                <span className="project-status live">Live</span>
                <span className="project-link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </span>
              </div>
              <h4>Tej Automation — Corporate Website</h4>
              <p>
                Full corporate web presence for a UAE-based turnkey industrial automation
                and engineering firm. Covers integrated automation, process instrumentation,
                valve automation, and digital engineering services as a multi-brand
                technology partner — with service catalog, enquiry flow, and
                SEO-optimized responsive delivery.
              </p>
              <div className="project-card-tech">
                <span>React</span>
                <span>Vite</span>
                <span>Responsive</span>
                <span>SEO</span>
              </div>
            </a>

            <div className="project-card reveal">
              <div className="project-card-top">
                <span className="project-status progress">In Progress</span>
                <span className="project-domain">swastik-intl.com</span>
              </div>
              <h4>Swastik International — Energy Trading</h4>
              <p>
                Corporate website for an independent energy &amp; commodity trading company
                based in Sharjah, UAE. Showcasing petroleum, petrochemical, and integrated
                energy solutions — bunkering, base oils, bitumen, fuel oils, and marine fuel —
                for clients across international markets. Currently in active development
                with staged previews on AWS Amplify.
              </p>
              <div className="project-card-tech">
                <span>React</span>
                <span>Vite</span>
                <span>AWS Amplify</span>
                <span>Corporate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      text: "Bharathikannan is an exceptional developer who consistently delivers high-quality work. His ability to understand complex requirements and translate them into elegant solutions is remarkable. A true professional and team leader.",
      name: 'Senior Tech Lead',
      role: 'Intellect Design Arena',
      initials: 'SK'
    },
    {
      text: "Working with Bharathikannan was a great experience. He delivered our Vue.js project on time with excellent code quality. His attention to detail and proactive communication made the entire process smooth and efficient.",
      name: 'Project Manager',
      role: 'DCKAP',
      initials: 'RC'
    },
    {
      text: "Bharathikannan's expertise in frontend development and his mentoring skills helped our team significantly improve our development practices. He's not just a developer — he's a true leader who elevates everyone around him.",
      name: 'Engineering Director',
      role: 'Capgemini',
      initials: 'AP'
    }
  ];

  return (
    <section id="testimonials">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Words from<br /><span className="em">colleagues &amp; clients</span></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card reveal" key={index}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Component
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's build something<br /><span className="em">remarkable</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Get in touch</h3>
            <p>
              Available for freelance projects, consulting, and full-time opportunities.
              Whether you're in the UAE, the USA, or anywhere in the world —
              let's discuss how I can help bring your vision to life.
            </p>
            <ul className="contact-links">
              <li>
                <a href="mailto:kannanvathi@gmail.com">
                  <span className="icon">✉</span>
                  <span>kannanvathi@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919791252556">
                  <span className="icon">☏</span>
                  <span>+91 97912 52556</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/bharathikannanp" target="_blank" rel="noopener noreferrer">
                  <span className="icon">in</span>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/kannanvathi" target="_blank" rel="noopener noreferrer">
                  <span className="icon">⌘</span>
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Discussion" required />
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <input type="text" id="budget" name="budget" placeholder="$1,000 — $5,000" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" placeholder="Tell me about your project, timeline, and requirements…" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {submitted ? '✓ Message Sent' : 'Send Message'}
              {!submitted && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">© 2026 <b>Bharathikannan Palanisamy</b> — designed &amp; built with care.</p>
        <div className="footer-socials">
          <a href="https://linkedin.com/in/bharathikannanp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://github.com/kannanvathi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">⌘</a>
          <a href="mailto:kannanvathi@gmail.com" aria-label="Email">✉</a>
        </div>
      </div>
    </footer>
  );
}

// Scroll Reveal Hook
function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    revealOnScroll();
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      window.removeEventListener('load', revealOnScroll);
    };
  }, []);
}

// Main App Component
function App() {
  useScrollReveal();

  return (
    <div className="App">
      <div className="bg-grid"></div>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
