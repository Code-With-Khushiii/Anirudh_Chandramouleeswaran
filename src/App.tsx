import { useEffect, useState } from 'react';
import { ChevronDown, ExternalLink, Lightbulb, Linkedin, Mail, Menu, Phone, Rocket, Target, TrendingUp, Users, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const summary = "FP&A & Business Intelligence Analyst with experience in financial modeling, budgeting, cost optimization, predictive analytics, and dashboard development across finance, supply chain, operations, and transportation datasets. Delivered measurable business impact, including $630K in operational cost savings, 12% reduction in procurement costs, and 8% improvement in gross profit through vendor analysis, forecasting, and data-driven financial recommendations. Skilled in Power BI for executive dashboard development and KPI reporting, with experience using SQL, Python, and R for data analysis, forecasting, statistical modeling, automation, and data-driven business insights.";

  const experience = [
    {
      company: "RailInc Corp",
      role: "Student Quantitative Research Consultant",
      location: "Cary, NC",
      dates: "Mar 2026 - May 2026",
      highlights: [
        "Conducted quantitative analysis, time-series analysis, and statistical modeling in R across multi-year transportation and commodity datasets to identify lead-lag relationships between rail flow patterns and corn/wheat basis spread dynamics.",
        "Designed predictive analytics and forecasting frameworks using regression modeling, lead-lag analysis, SHAP analysis, and walk-forward validation to evaluate commodity basis spread patterns and out-of-sample model performance.",
        "Developed analytical reports and business intelligence insights translating transportation, logistics, and commodity market data into recommendations on supply-demand conditions, market trends, and operational performance."
      ]
    },
    {
      company: "GSLAB | GAVS & Ashley Furniture India Pvt. Ltd.",
      role: "Business Intelligence Intern",
      location: "Chennai, India",
      dates: "May 2024 - Jul 2024",
      highlights: [
        "Delivered a $630K cost savings initiative across operations, finance, and supply chain by analyzing production data, identifying foam material optimization opportunities, and presenting cost-reduction recommendations to business stakeholders.",
        "Analyzed 2.13T+ foam component combinations using Python-based calculations to identify optimal material matches, reduce material waste, and improve production planning efficiency across furniture manufacturing workflows.",
        "Designed interactive Power BI dashboards with drill-through filters, DAX measures, and KPI dashboards to monitor production, cost, and operational performance, improving visibility into efficiency gaps and cost drivers."
      ]
    },
    {
      company: "Effimech Engineers Pvt. Ltd.",
      role: "Finance Intern",
      location: "Chennai, India",
      dates: "Feb 2023 - Oct 2023",
      highlights: [
        "Performed budgeting, cost analysis, and financial modeling for industrial compressor procurement by comparing vendor quotes, acquisition costs, logistics expenses, and resale pricing assumptions, supporting negotiations that reduced procurement costs by 12%.",
        "Evaluated purchase price, transportation costs, markup thresholds, and resale margins to identify profitable pricing ranges, improving gross profit by 8% through data-backed procurement and pricing recommendations.",
        "Built Power BI dashboards to track budget vs. actuals, purchase trends, vendor performance, and cost variance, improving reporting efficiency and finance leadership visibility into procurement performance."
      ]
    }
  ];

  const projects = [
    {
      title: "Credit Card Debt Risk & Consumer Behavior Analytics",
      subtitle: "Python",
      category: "Risk Analytics",
      introduction: "Performed statistical modeling, machine learning analysis, sentiment extraction, and behavioral clustering on credit card survey data.",
      problem: "Consumer credit behavior can be difficult to interpret without segmentation and behavioral risk modeling.",
      objective: "Identify elevated-risk debt accumulation patterns and consumer overspending drivers.",
      methodology: [
        "Applied statistical modeling and machine learning analysis in Python.",
        "Performed sentiment extraction and behavioral clustering.",
        "Analyzed credit card survey data to identify consumer risk patterns."
      ],
      results: [
        "Identified the 30-40 age group as the most debt-prone segment.",
        "Uncovered psychological factors influencing credit card usage and repayment behavior.",
        "Generated insights into consumer overspending and financial decision-making."
      ],
      conclusion: "The project connected consumer behavior analytics with credit card debt risk segmentation."
    },
    {
      title: "Retail Profitability Prediction & Deployment Automation",
      subtitle: "Python, R",
      category: "Predictive Modeling",
      introduction: "Built a retail profitability classification and deployment workflow using engineered features and automated decision thresholds.",
      problem: "Retail teams need scalable workflows to distinguish profitable orders from orders requiring managerial review.",
      objective: "Improve profitability classification accuracy and automate approval workflows for profitable orders.",
      methodology: [
        "Cleaned and engineered a 9,993-row retail dataset.",
        "Created features, removed duplicates, corrected data types, and clipped outliers.",
        "Built a profitability classification workflow using a 0.6 threshold."
      ],
      results: [
        "Enabled automated approval of 95.2% profitable orders.",
        "Flagged 81.1% unprofitable orders for managerial review.",
        "Improved model accuracy and data quality through structured preprocessing."
      ],
      conclusion: "The project demonstrated predictive modeling, data cleaning, and deployment-oriented automation for retail profitability decisions."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Analytics & Programming',
      skills: ['Python', 'pandas', 'NumPy', 'SQL', 'R', 'PyTorch', 'Machine Learning']
    },
    {
      icon: TrendingUp,
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau', 'DAX', 'KPI Reporting', 'Data Visualization']
    },
    {
      icon: Users,
      title: 'Predictive Modeling & Statistics',
      skills: ['Regression Analysis', 'Hypothesis Testing', 'A/B Testing', 'Random Forest', 'Cross-Validation', 'Forecasting', 'Classification', 'Clustering']
    },
    {
      icon: Lightbulb,
      title: 'Finance & FP&A',
      skills: ['Financial Planning & Analysis', 'Financial Modeling', 'Budgeting', 'Cost Analysis', 'Variance Analysis', 'Budget vs. Actuals', 'Profitability Analysis', 'DCF Analysis']
    },
    {
      icon: Rocket,
      title: 'Data Management',
      skills: ['Data Cleaning', 'Feature Engineering', 'Model Evaluation', 'Predictive Analytics']
    },
    {
      icon: Target,
      title: 'Tools & Reporting',
      skills: ['Advanced Excel']
    }
  ];

  const education = [
    {
      school: "Duke University, The Fuqua School of Business",
      degree: "Master of Quantitative Management: Business Analytics, Finance",
      location: "Durham, NC",
      dates: "May 2026",
      details: "Athletics: Student-Athlete; ranked 16th nationally in the National Collegiate Table Tennis Association (NCTTA)."
    },
    {
      school: "Shiv Nadar University",
      degree: "B.Sc. Economics (Data Science) Hons.",
      location: "Chennai, India",
      dates: "May 2025",
      details: "Economics and data science foundation with applied analytics, statistical modeling, and finance coursework."
    }
  ];

  const papers: Array<{ title: string; publication: string; year: string; link: string }> = [];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0 pr-4 text-lg sm:text-xl md:text-2xl font-display text-black tracking-wide leading-tight truncate">
              <span className="md:hidden">ANIRUDH</span>
              <span className="hidden md:inline">ANIRUDH CHANDRAMOULEESWARAN</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id ? "text-black font-medium" : "text-brown hover:text-black"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img src="images/image.png" alt="Anirudh Chandramouleeswaran" className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              ANIRUDH CHANDRAMOULEESWARAN
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              FP&A & BUSINESS INTELLIGENCE ANALYST
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              DURHAM, NC, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">{summary}</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => scrollToSection('experience')} className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                VIEW EXPERIENCE
              </button>
              <button onClick={() => scrollToSection('contact')} className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'COST SAVINGS', value: '$630K', detail: 'Operations & Supply Chain Impact' },
              { label: 'PROCUREMENT COST REDUCTION', value: '12%', detail: 'Vendor Analysis & Negotiation' },
              { label: 'COMPONENT COMBINATIONS', value: '2.13T+', detail: 'Python-Based Optimization' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors" onClick={() => scrollToSection('summary')} />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              FP&A, business intelligence, and predictive analytics professional turning finance, operations, supply chain, and transportation data into measurable business impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Target, title: 'FP&A', detail: 'Build financial models, budget analyses, variance reports, cost models, and profitability recommendations for finance leaders.' },
              { icon: Rocket, title: 'Business Intelligence', detail: 'Design Power BI dashboards with DAX, drill-through filters, KPI reporting, and executive-ready operational insights.' },
              { icon: Lightbulb, title: 'Predictive Analytics', detail: 'Use Python, R, SQL, regression, forecasting, SHAP analysis, validation, and ML workflows to support data-driven decisions.' }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Quantitative research, business intelligence, operations analytics, and finance experience across transportation, furniture manufacturing, and industrial procurement.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{role.location} | {role.dates}</div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Consumer behavior analytics, credit risk patterns, profitability prediction, and deployment automation projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onClick={() => setSelectedProject(index)}>
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">{project.category}</span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">{project.title}</h3>
                <p className="text-sm text-brown mb-4 font-light">{project.subtitle}</p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">{project.introduction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">{projects[selectedProject].title}</h2>
              <button onClick={() => setSelectedProject(null)} className="text-brown hover:text-black transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">{projects[selectedProject].category}</span>
                <p className="text-brown font-light mt-2">{projects[selectedProject].subtitle}</p>
              </div>
              {[
                ['INTRODUCTION', projects[selectedProject].introduction],
                ['PROBLEM STATEMENT', projects[selectedProject].problem],
                ['OBJECTIVE', projects[selectedProject].objective],
                ['CONCLUSION', projects[selectedProject].conclusion]
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="text-lg font-display text-black mb-3 tracking-wide">{title}</h3>
                  <p className="text-brown leading-relaxed font-light">{body}</p>
                </div>
              ))}
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Analytics, BI, predictive modeling, FP&A, finance, and data management capabilities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">{edu.location} | {edu.dates}</div>
                </div>
                <p className="text-brown leading-relaxed font-light">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss FP&A, business intelligence, predictive analytics, financial modeling, or dashboard development opportunities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a href="tel:+19195054255" className="text-white/80 font-light hover:text-white transition-colors">+1 (919) 505-4255</a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a href="https://www.linkedin.com/in/anirudh-chandramouleeswaran" target="_blank" rel="noopener noreferrer" className="text-white/80 font-light hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a href="mailto:chandramouleeswarananirudh@gmail.com" className="text-white/80 font-light hover:text-white transition-colors">chandramouleeswarananirudh@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Anirudh Chandramouleeswaran | FP&A & Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
