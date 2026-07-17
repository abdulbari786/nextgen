// Central course dataset — drives /courses listing and /courses/:slug detail pages.

const stack = (arr) => arr;

export const courses = [
  {
    slug: "full-stack-python",
    category: "Software Development",
    glyph: "🐍",
    title: "Full Stack Python Development",
    tagline: "Django, Flask, React & PostgreSQL — build and deploy production apps.",
    description: [
      "Python now powers the back end of everything from fintech platforms to AI products. This program takes you from core Python syntax to shipping a deployed, full-stack application with a React front end, a Django REST back end and a PostgreSQL database.",
      "You'll write real code every day, get weekly mentor code reviews, and ship five portfolio projects — ending with a capstone deployed on the cloud with Docker and CI/CD."
    ],
    duration: "5 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 34999,
    originalFee: 49999,
    stats: { placed: "60+", rating: "4.8", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "🌐", title: "Full-Stack Skill Set", desc: "Front end and back end, taught as one connected system, not two separate courses." },
      { glyph: "📈", title: "High Demand", desc: "Python remains the most-hired-for backend language across product and services companies." },
      { glyph: "🔧", title: "Versatility", desc: "The same skills carry over into data, automation and AI-adjacent roles." },
      { glyph: "🚀", title: "Career Growth", desc: "Structured path from junior developer to full-stack owner of a feature." },
      { glyph: "🏗", title: "Real Projects", desc: "Five shipped projects, not toy exercises — including a deployed capstone." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Python & Web Foundations", desc: "Core Python, OOP, HTML/CSS/JS fundamentals, and how the web actually works." },
      { phase: "Month 2", title: "Front-End Mastery", desc: "React.js, component architecture, responsive layouts, and API-driven UIs." },
      { phase: "Month 3–4", title: "Back-End & Databases", desc: "Django, Flask, REST APIs, PostgreSQL, MongoDB — real server-side engineering." },
      { phase: "Month 5", title: "Deploy & Get Hired", desc: "Docker, AWS, CI/CD, capstone project, and dedicated placement drives." }
    ],
    learn: [
      { glyph: "🖥", title: "IT & Web Fundamentals", desc: "SDLC, Agile basics, client-server architecture and HTTP fundamentals." },
      { glyph: "🎨", title: "Front-End Development", desc: "HTML5, CSS3, JavaScript (ES6+) and React for dynamic interfaces." },
      { glyph: "⚙️", title: "Back-End Development", desc: "Django and Flask for server logic, auth, and business rules." },
      { glyph: "🗄", title: "Databases", desc: "MySQL, PostgreSQL and MongoDB, with Django ORM for data modelling." },
      { glyph: "🌿", title: "Version Control", desc: "Git and GitHub workflows used in real engineering teams." },
      { glyph: "☁️", title: "Deployment & DevOps", desc: "Docker, AWS and CI/CD pipelines to ship apps that stay up." }
    ],
    prerequisites: ["Comfortable using a computer and the internet", "No prior coding experience required", "Basic logical / analytical thinking", "Willingness to code every single day"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "Python's readable syntax makes it a genuinely friendly first language." },
      { glyph: "🔄", title: "Career Changers", desc: "A structured, guided path into a tech role from any background." },
      { glyph: "💡", title: "Junior Programmers", desc: "Go from scripting basics to a deployable, full-stack skill set." },
      { glyph: "🎯", title: "Working Professionals", desc: "Evening and weekend batches so you can upskill without quitting." }
    ],
    techStack: stack(["Python 3.x","Django","Flask","DRF","HTML5/CSS3","JavaScript (ES6+)","React.js","PostgreSQL","MySQL","MongoDB","Git & GitHub","Docker","AWS","Postman","Linux","VS Code"]),
    curriculum: [
      {
        title: "IT Fundamentals & Web Basics", subtitle: "SDLC · Agile · Client-Server · HTTP", count: "8 Classes",
        left: ["Software development lifecycle (SDLC)", "Agile & Scrum introduction", "Application lifecycle management", "Web technology overview"],
        right: ["How the internet works", "Client–server architecture", "HTTP/HTTPS & REST concepts", "Browser dev tools"],
        project: "Project 1 — Static portfolio website"
      },
      {
        title: "Python Programming", subtitle: "Core Python · OOP · File Handling", count: "14 Classes",
        left: ["Variables, data types & operators", "Control structures & loops", "Functions & lambda expressions", "Lists, tuples, sets, dictionaries"],
        right: ["OOP: classes, inheritance, polymorphism", "File handling (CSV, JSON, XML)", "Exception handling", "Modules, packages & pip"],
        project: "Project 2 — Command-line automation tool"
      },
      {
        title: "Front-End Development", subtitle: "HTML · CSS · JavaScript · React", count: "18 Classes",
        left: ["Semantic HTML5 & CSS3 Flexbox/Grid", "Responsive design & media queries", "Bootstrap 5 components", "DOM manipulation & events"],
        right: ["Fetch API, promises & async/await", "React components, props & state", "React Hooks (useState, useEffect)", "Routing with React Router"],
        project: "Project 3 — Dynamic front-end web app"
      },
      {
        title: "Back-End: Django & Flask", subtitle: "MVT · ORM · Auth · REST APIs", count: "22 Classes",
        left: ["Django MVT architecture & URL routing", "Django ORM, models & admin panel", "Authentication, sessions & forms", "Django REST Framework"],
        right: ["Flask app structure & Jinja2", "Flask-SQLAlchemy & blueprints", "JWT-based authentication", "Building & testing REST APIs"],
        project: "Project 4 — Full-stack Django web application"
      },
      {
        title: "Databases", subtitle: "MySQL · PostgreSQL · MongoDB", count: "10 Classes",
        left: ["SQL: SELECT, JOIN, GROUP BY", "MySQL & PostgreSQL setup and queries", "Database design & normalization"],
        right: ["MongoDB documents & collections", "PyMongo & MongoEngine", "SQLAlchemy for Flask"],
        project: "Project 5 — E-commerce backend with REST API"
      },
      {
        title: "DevOps & Capstone", subtitle: "Docker · AWS · CI/CD · Placement Prep", count: "12 Classes",
        left: ["Git branching & pull requests", "Docker containers & docker-compose", "AWS EC2 / Elastic Beanstalk deployment"],
        right: ["Capstone: React + Django REST + PostgreSQL", "Resume & LinkedIn building", "Mock technical interviews"],
        project: "Capstone — Production-ready full-stack application"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "Full Stack Developer", desc: "Owns both the interface and the server logic behind it, end to end." },
      { tag: "High Demand", title: "Python Developer", desc: "Focused on back-end logic, data processing and server-side scripting." },
      { tag: "Web Focus", title: "Python Web Developer", desc: "Builds production web apps with Django or Flask." },
      { tag: "API Specialist", title: "Python API Developer", desc: "Designs REST APIs that connect services and front ends." },
      { tag: "Microservices", title: "Flask Developer", desc: "Ships lightweight, fast-moving services with Flask." },
      { tag: "Freelance / Startup", title: "Full Stack Consultant", desc: "Independent delivery of complete web products for clients." }
    ],
    faqs: [
      { q: "Is this course suitable for a complete beginner?", a: "Yes. We start from Python syntax basics with no assumptions, and build up to production deployment by month five." },
      { q: "Which frameworks do you cover — Django or Flask?", a: "Both. Django for rapid, full-featured development and Flask for lightweight services — you'll learn when to reach for each." },
      { q: "Will I have real projects for my portfolio?", a: "Yes — five hands-on projects, including a deployed capstone with a React front end and Django REST back end." },
      { q: "Are EMI options available?", a: "Yes, 0%-interest EMI over 3, 6 or 12 months through our partner banks. Ask your counsellor for details." }
    ]
  },

  {
    slug: "full-stack-java",
    category: "Software Development",
    glyph: "☕",
    title: "Full Stack Java Development",
    tagline: "Core Java, Spring Boot, React & microservices for enterprise-grade apps.",
    description: [
      "Java still runs the backbone of banking, insurance and large enterprise systems — and Spring Boot has made it faster than ever to build with. This program takes you from Core Java and OOP through Spring Boot, microservices and a React front end.",
      "You'll build REST APIs, connect them to relational databases, and deploy a multi-service application — the exact skill set enterprise hiring teams screen for."
    ],
    duration: "5 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 36999,
    originalFee: 52999,
    stats: { placed: "45+", rating: "4.8", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "🏢", title: "Enterprise-Ready", desc: "The stack most Indian service companies hire freshers into." },
      { glyph: "🧩", title: "Microservices", desc: "Learn to design and connect independent services, not just monoliths." },
      { glyph: "📈", title: "High Demand", desc: "Java + Spring remains one of the largest fresher hiring categories." },
      { glyph: "🔧", title: "Strong Fundamentals", desc: "OOP and data structures taught properly, not skipped over." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects including a multi-module Spring Boot application." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Core Java & OOP", desc: "Java syntax, collections, exception handling, and solid OOP fundamentals." },
      { phase: "Month 2", title: "Front-End with React", desc: "HTML/CSS/JS and React for building the interfaces Java APIs will power." },
      { phase: "Month 3–4", title: "Spring Boot & Microservices", desc: "Spring MVC, Spring Data JPA, REST APIs, security and microservices patterns." },
      { phase: "Month 5", title: "Deploy & Get Hired", desc: "Docker, cloud deployment, capstone project and placement drives." }
    ],
    learn: [
      { glyph: "☕", title: "Core Java", desc: "OOP, collections, generics, multithreading and exception handling." },
      { glyph: "🎨", title: "Front-End Development", desc: "HTML5, CSS3, JavaScript and React for the interface layer." },
      { glyph: "🌱", title: "Spring & Spring Boot", desc: "Spring MVC, Spring Data JPA, Spring Security, and REST controllers." },
      { glyph: "🧩", title: "Microservices", desc: "Service design, API gateways, and inter-service communication." },
      { glyph: "🗄", title: "Databases", desc: "MySQL and PostgreSQL, with JPA/Hibernate for ORM." },
      { glyph: "☁️", title: "Deployment", desc: "Docker, Maven builds and cloud deployment on AWS." }
    ],
    prerequisites: ["Basic computer literacy", "No prior programming experience required", "Comfort with logical problem-solving", "Consistent daily practice"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "A guided, structured path from zero programming to job-ready Java." },
      { glyph: "🔄", title: "Career Changers", desc: "Enter the largest fresher-hiring segment in Indian IT services." },
      { glyph: "💡", title: "CS Graduates", desc: "Turn academic Java knowledge into an enterprise-ready skill set." },
      { glyph: "🎯", title: "Working Professionals", desc: "Weekend batches designed around a full-time job." }
    ],
    techStack: stack(["Core Java","Spring Boot","Spring MVC","Spring Data JPA","Hibernate","REST APIs","HTML5/CSS3","JavaScript","React.js","MySQL","PostgreSQL","Maven","Git & GitHub","Docker","AWS","Postman"]),
    curriculum: [
      {
        title: "Core Java & OOP", subtitle: "Syntax · Collections · Multithreading", count: "16 Classes",
        left: ["Variables, control flow & arrays", "OOP: classes, inheritance, polymorphism", "Interfaces & abstract classes", "Collections framework"],
        right: ["Exception handling", "Multithreading basics", "Generics", "File I/O"],
        project: "Project 1 — Console-based inventory system"
      },
      {
        title: "Front-End Development", subtitle: "HTML · CSS · JavaScript · React", count: "16 Classes",
        left: ["Semantic HTML5 & responsive CSS", "Bootstrap 5 components", "JavaScript ES6+ fundamentals", "DOM manipulation & events"],
        right: ["Fetch API & async/await", "React components & props/state", "React Hooks", "React Router"],
        project: "Project 2 — Dynamic single-page application"
      },
      {
        title: "Spring & Spring Boot", subtitle: "MVC · Dependency Injection · REST", count: "20 Classes",
        left: ["Spring core & dependency injection", "Spring Boot project structure", "Spring MVC & REST controllers", "Spring Data JPA & repositories"],
        right: ["Validation & exception handling", "Spring Security basics", "JWT authentication", "Testing with JUnit & Mockito"],
        project: "Project 3 — Spring Boot REST API"
      },
      {
        title: "Microservices & Databases", subtitle: "Service Design · MySQL · PostgreSQL", count: "16 Classes",
        left: ["Microservices architecture patterns", "Service-to-service communication", "API gateway concepts"],
        right: ["MySQL & PostgreSQL design", "Hibernate ORM mapping", "Database transactions"],
        project: "Project 4 — Multi-service ordering system"
      },
      {
        title: "DevOps & Capstone", subtitle: "Docker · AWS · CI/CD · Placement Prep", count: "12 Classes",
        left: ["Maven builds & dependency management", "Docker containers & images", "AWS deployment basics"],
        right: ["Capstone: React + Spring Boot + MySQL", "Resume & LinkedIn building", "Mock technical interviews"],
        project: "Capstone — Enterprise-style full-stack application"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "Full Stack Java Developer", desc: "Builds and maintains both the API layer and the UI consuming it." },
      { tag: "High Demand", title: "Java Backend Developer", desc: "Focused on Spring Boot services, business logic and databases." },
      { tag: "Enterprise", title: "Software Engineer", desc: "Works within large engineering teams on enterprise applications." },
      { tag: "API Specialist", title: "API Developer", desc: "Designs and documents REST APIs consumed by multiple clients." },
      { tag: "Microservices", title: "Microservices Engineer", desc: "Designs and operates independently deployable services." },
      { tag: "Infrastructure", title: "Application Support Engineer", desc: "Maintains and troubleshoots deployed Java applications." }
    ],
    faqs: [
      { q: "Do I need to know Java before joining?", a: "No — we start from Java fundamentals and build up to Spring Boot and microservices step by step." },
      { q: "Is Spring Boot covered in depth?", a: "Yes, it's the core of the back-end module: REST controllers, Spring Data JPA, Spring Security and testing." },
      { q: "Will I work on microservices, not just monoliths?", a: "Yes — module 4 is dedicated to microservice design and a multi-service project." },
      { q: "Do you help with interview preparation?", a: "Yes — mock technical interviews, DSA fundamentals and resume support are part of the final month." }
    ]
  },

  {
    slug: "mern-full-stack",
    category: "Software Development",
    glyph: "⚛️",
    title: "MERN Full Stack Development",
    tagline: "MongoDB, Express, React & Node — the JavaScript-everywhere stack.",
    description: [
      "One language, the whole stack. The MERN program teaches you to build fast, modern web applications using JavaScript on both the client and the server — the stack behind most startup and product-company codebases today.",
      "You'll build REST and GraphQL-style APIs with Node and Express, model data in MongoDB, and ship polished, responsive interfaces in React."
    ],
    duration: "4.5 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 33999,
    originalFee: 47999,
    stats: { placed: "35+", rating: "4.7", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "⚡", title: "One Language, Full Stack", desc: "JavaScript everywhere means faster learning and faster shipping." },
      { glyph: "🚀", title: "Startup-Ready", desc: "The default stack for modern product teams and early-stage startups." },
      { glyph: "🧱", title: "Component Thinking", desc: "Build reusable, testable UI with React the way real teams do." },
      { glyph: "🗄", title: "Flexible Data", desc: "MongoDB's document model matches how modern apps actually store data." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects including a deployed, full-stack MERN capstone." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "JavaScript Foundations", desc: "Modern JS (ES6+), async programming, and core web fundamentals." },
      { phase: "Month 2", title: "React Front-End", desc: "Components, hooks, state management and routing." },
      { phase: "Month 3", title: "Node, Express & MongoDB", desc: "Building REST APIs, authentication, and document-based data modelling." },
      { phase: "Month 4–4.5", title: "Integration, Deploy & Get Hired", desc: "Connect front and back end, deploy to the cloud, capstone and placement prep." }
    ],
    learn: [
      { glyph: "🟨", title: "Modern JavaScript", desc: "ES6+, closures, promises, async/await and modules." },
      { glyph: "⚛️", title: "React.js", desc: "Components, hooks, context API and React Router." },
      { glyph: "🟩", title: "Node.js & Express", desc: "Building REST APIs, middleware and server-side architecture." },
      { glyph: "🗄", title: "MongoDB", desc: "Schema design with Mongoose and document-based data modelling." },
      { glyph: "🔐", title: "Auth & Security", desc: "JWT authentication, password hashing and API security basics." },
      { glyph: "☁️", title: "Deployment", desc: "Deploying MERN apps with Docker, Render/AWS and environment configs." }
    ],
    prerequisites: ["Basic computer literacy", "No prior programming experience required", "Curiosity about how modern websites work", "Willingness to code every single day"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "A single language across the stack keeps the learning curve gentle." },
      { glyph: "🔄", title: "Career Changers", desc: "The most in-demand stack for product and startup roles." },
      { glyph: "💡", title: "Front-End Developers", desc: "Extend existing JS/React knowledge into full-stack ownership." },
      { glyph: "🎯", title: "Working Professionals", desc: "Evening and weekend batches for working adults." }
    ],
    techStack: stack(["JavaScript (ES6+)","React.js","Redux / Context API","Node.js","Express.js","MongoDB","Mongoose","REST APIs","JWT Auth","Git & GitHub","Docker","AWS / Render","Postman","Tailwind CSS"]),
    curriculum: [
      {
        title: "JavaScript & Web Foundations", subtitle: "ES6+ · Async · DOM", count: "12 Classes",
        left: ["Variables, functions & scope", "Arrays, objects & destructuring", "DOM manipulation & events"],
        right: ["Promises & async/await", "Fetch API & JSON", "ES6 modules"],
        project: "Project 1 — Interactive landing page"
      },
      {
        title: "React Front-End", subtitle: "Components · Hooks · Routing", count: "18 Classes",
        left: ["Components, props & JSX", "useState & useEffect", "Context API for state sharing"],
        right: ["React Router for navigation", "Form handling & validation", "Consuming REST APIs"],
        project: "Project 2 — Task management app"
      },
      {
        title: "Node.js & Express", subtitle: "Server Architecture · REST APIs", count: "16 Classes",
        left: ["Node.js fundamentals & npm", "Express routing & middleware", "Building REST endpoints"],
        right: ["Error handling middleware", "Environment configuration", "API testing with Postman"],
        project: "Project 3 — REST API service"
      },
      {
        title: "MongoDB & Authentication", subtitle: "Schema Design · JWT · Security", count: "14 Classes",
        left: ["MongoDB documents & collections", "Mongoose schemas & models", "Relationships & population"],
        right: ["JWT-based authentication", "Password hashing with bcrypt", "Role-based access control"],
        project: "Project 4 — Auth-protected blog platform"
      },
      {
        title: "Integration, Deploy & Capstone", subtitle: "Full-Stack Wiring · Cloud Deploy", count: "12 Classes",
        left: ["Connecting React to Express APIs", "Docker basics for MERN apps", "Deployment to AWS / Render"],
        right: ["Capstone: full MERN marketplace app", "Resume & LinkedIn building", "Mock technical interviews"],
        project: "Capstone — Deployed MERN marketplace application"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "MERN Stack Developer", desc: "Builds complete products using a single JavaScript codebase end to end." },
      { tag: "High Demand", title: "React Developer", desc: "Specialises in building fast, component-driven interfaces." },
      { tag: "Back-End Focus", title: "Node.js Developer", desc: "Builds and scales JavaScript-based server applications." },
      { tag: "Startup Ready", title: "Product Engineer", desc: "Owns features end to end in small, fast-moving product teams." },
      { tag: "API Specialist", title: "API Developer", desc: "Designs REST APIs consumed by web and mobile clients." },
      { tag: "Freelance", title: "Full Stack Freelancer", desc: "Delivers complete web products independently for clients." }
    ],
    faqs: [
      { q: "Do I need to know JavaScript before starting?", a: "No — the first month covers modern JavaScript from the ground up before React begins." },
      { q: "Is this different from the Full Stack Python track?", a: "Yes — MERN uses JavaScript across the entire stack, while the Python track uses Django/Flask on the back end." },
      { q: "Will I learn state management like Redux?", a: "You'll learn Context API deeply and get an introduction to Redux patterns for larger apps." },
      { q: "Is deployment covered?", a: "Yes — you'll deploy your capstone with Docker to a cloud platform as part of the final module." }
    ]
  },

  {
    slug: "data-science-ai",
    category: "Data & AI",
    glyph: "📊",
    title: "Data Science & AI",
    tagline: "Python, statistics, ML and Generative AI for data-driven decision-making.",
    description: [
      "Every serious company now runs on data. This program builds you into a data scientist who can clean and explore data, build predictive models, and apply Generative AI tools to real business problems.",
      "You'll work through the full data science lifecycle — from raw data to a deployed model — using Python, SQL, and the modern ML and GenAI toolchain."
    ],
    duration: "6 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 44999,
    originalFee: 62999,
    stats: { placed: "50+", rating: "4.9", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "📈", title: "End-to-End Lifecycle", desc: "From raw data to a deployed, monitored model — the full pipeline." },
      { glyph: "🧠", title: "Statistics That Stick", desc: "Applied statistics taught through real datasets, not just formulas." },
      { glyph: "🤖", title: "GenAI Integrated", desc: "LLMs and prompt engineering woven into the curriculum, not bolted on." },
      { glyph: "🔧", title: "Tool Fluency", desc: "Pandas, scikit-learn, SQL and visualization tools used daily." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects across regression, classification, NLP and GenAI." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Python & Statistics", desc: "Python for data, probability, descriptive and inferential statistics." },
      { phase: "Month 2", title: "Data Wrangling & Visualization", desc: "Pandas, NumPy, SQL, and storytelling with Matplotlib/Power BI." },
      { phase: "Month 3–4", title: "Machine Learning", desc: "Regression, classification, clustering, and model evaluation." },
      { phase: "Month 5", title: "Deep Learning & Generative AI", desc: "Neural networks, NLP, LLMs and prompt engineering." },
      { phase: "Month 6", title: "Capstone & Placement", desc: "End-to-end project, model deployment and interview preparation." }
    ],
    learn: [
      { glyph: "🐍", title: "Python for Data", desc: "NumPy, Pandas and data manipulation at scale." },
      { glyph: "📐", title: "Statistics & Probability", desc: "Hypothesis testing, distributions and inferential statistics." },
      { glyph: "📊", title: "Data Visualization", desc: "Matplotlib, Seaborn and Power BI for data storytelling." },
      { glyph: "🤖", title: "Machine Learning", desc: "Regression, classification, clustering with scikit-learn." },
      { glyph: "🧠", title: "Deep Learning & NLP", desc: "Neural networks, transformers and text analytics." },
      { glyph: "✨", title: "Generative AI", desc: "LLMs, prompt engineering and building GenAI-powered features." }
    ],
    prerequisites: ["Basic Python familiarity is helpful, not required", "Comfort with school-level mathematics", "Curiosity about data and patterns", "Analytical, detail-oriented mindset"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "No prior data or ML background needed — we build it from zero." },
      { glyph: "🔄", title: "Career Changers", desc: "Analysts, engineers and graduates moving into data-driven roles." },
      { glyph: "💡", title: "Analysts & Developers", desc: "Level up existing skills into full data science and ML capability." },
      { glyph: "🎯", title: "Working Professionals", desc: "Flexible weekend and evening batches available." }
    ],
    techStack: stack(["Python","NumPy","Pandas","Matplotlib","Seaborn","SQL","scikit-learn","TensorFlow","PyTorch (intro)","Power BI","Hugging Face","OpenAI API","Git & GitHub","Jupyter","Streamlit"]),
    curriculum: [
      {
        title: "Python & Statistics Foundations", subtitle: "Programming · Probability · Inference", count: "16 Classes",
        left: ["Python essentials for data work", "NumPy arrays & vectorized operations", "Descriptive statistics"],
        right: ["Probability distributions", "Hypothesis testing", "Confidence intervals"],
        project: "Project 1 — Exploratory data analysis report"
      },
      {
        title: "Data Wrangling & Visualization", subtitle: "Pandas · SQL · Dashboards", count: "16 Classes",
        left: ["Pandas: cleaning & transforming data", "Handling missing data & outliers", "SQL for data extraction"],
        right: ["Matplotlib & Seaborn visualization", "Power BI dashboard building", "Data storytelling principles"],
        project: "Project 2 — Business intelligence dashboard"
      },
      {
        title: "Machine Learning", subtitle: "Regression · Classification · Clustering", count: "22 Classes",
        left: ["Linear & logistic regression", "Decision trees & random forests", "Support vector machines"],
        right: ["K-means & hierarchical clustering", "Model evaluation & cross-validation", "Feature engineering & selection"],
        project: "Project 3 — Customer churn prediction model"
      },
      {
        title: "Deep Learning & NLP", subtitle: "Neural Networks · Transformers", count: "18 Classes",
        left: ["Neural network fundamentals", "CNNs for image data (intro)", "RNNs & sequence models (intro)"],
        right: ["Text preprocessing & embeddings", "Transformer architecture basics", "Sentiment analysis pipeline"],
        project: "Project 4 — NLP-based review classifier"
      },
      {
        title: "Generative AI & Capstone", subtitle: "LLMs · Prompt Engineering · Deployment", count: "14 Classes",
        left: ["LLM fundamentals & tokenization", "Prompt engineering techniques", "Using the OpenAI / Hugging Face APIs"],
        right: ["Retrieval-augmented generation (intro)", "Deploying models with Streamlit", "Resume, portfolio & mock interviews"],
        project: "Capstone — GenAI-powered data product"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "Data Scientist", desc: "Builds models and derives insight from complex, messy datasets." },
      { tag: "High Demand", title: "Machine Learning Engineer", desc: "Takes models from notebooks into production systems." },
      { tag: "Foundational", title: "Data Analyst", desc: "Turns raw data into dashboards and decisions for the business." },
      { tag: "Emerging", title: "GenAI Engineer", desc: "Builds features and products powered by LLMs and prompt design." },
      { tag: "Research", title: "NLP Engineer", desc: "Specialises in language-focused ML and text analytics." },
      { tag: "Cross-Functional", title: "Business Intelligence Analyst", desc: "Owns reporting, dashboards and metrics for decision-makers." }
    ],
    faqs: [
      { q: "Do I need a math or statistics background?", a: "School-level math is enough — we teach statistics and probability from first principles with applied examples." },
      { q: "Is Generative AI actually covered, or just mentioned?", a: "It has a dedicated month: LLM fundamentals, prompt engineering, and a GenAI-powered capstone project." },
      { q: "Will I work with real datasets?", a: "Yes — every module uses real, messy datasets rather than pre-cleaned textbook data." },
      { q: "What's the difference between this and Data Analytics with GenAI?", a: "This program goes deeper into machine learning and deep learning; the Analytics track focuses more on BI, dashboards and reporting." }
    ]
  },

  {
    slug: "ai-ml-genai",
    category: "Data & AI",
    glyph: "🤖",
    title: "AI, Machine Learning & Generative AI",
    tagline: "Deep learning, LLMs, agents and MLOps for the AI-native career.",
    description: [
      "This is our flagship AI program — built for people who want to specialise deeply in machine learning, deep learning and the current wave of Generative AI and agentic systems.",
      "You'll go beyond using AI tools to actually building with them: fine-tuning models, designing prompt systems and RAG pipelines, and deploying AI features into real applications."
    ],
    duration: "6 Months",
    level: "Intermediate → Pro",
    mode: "Online + Offline",
    batch: "Max 12 / batch",
    fee: 47999,
    originalFee: 67999,
    stats: { placed: "40+", rating: "4.9", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "🧠", title: "Deep Learning Core", desc: "CNNs, RNNs, transformers — built and understood, not just imported." },
      { glyph: "✨", title: "GenAI & LLMs", desc: "Prompt engineering, fine-tuning and RAG, covered in real depth." },
      { glyph: "🕸", title: "AI Agents", desc: "Build multi-step, tool-using AI agents for real workflows." },
      { glyph: "⚙️", title: "MLOps Basics", desc: "Model versioning, monitoring and deployment, not just training." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects culminating in a deployed agentic AI application." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "ML Foundations", desc: "Python for ML, statistics refresher, and classical machine learning." },
      { phase: "Month 2", title: "Deep Learning", desc: "Neural networks, CNNs, RNNs and training at scale." },
      { phase: "Month 3", title: "NLP & Transformers", desc: "Attention, transformer architecture and modern language models." },
      { phase: "Month 4", title: "Generative AI & LLMs", desc: "Prompt engineering, fine-tuning, RAG and vector databases." },
      { phase: "Month 5", title: "AI Agents & MLOps", desc: "Agentic systems, tool use, model deployment and monitoring." },
      { phase: "Month 6", title: "Capstone & Placement", desc: "Deployed AI product, portfolio and interview preparation." }
    ],
    learn: [
      { glyph: "🐍", title: "ML Foundations", desc: "Python, statistics and classical machine learning algorithms." },
      { glyph: "🧠", title: "Deep Learning", desc: "Neural networks, CNNs and RNNs with TensorFlow/PyTorch." },
      { glyph: "🔤", title: "NLP & Transformers", desc: "Attention mechanisms and transformer-based language models." },
      { glyph: "✨", title: "Generative AI", desc: "Prompt engineering, fine-tuning and retrieval-augmented generation." },
      { glyph: "🕸", title: "AI Agents", desc: "Designing tool-using, multi-step autonomous agents." },
      { glyph: "⚙️", title: "MLOps", desc: "Model versioning, deployment, and monitoring in production." }
    ],
    prerequisites: ["Basic Python programming knowledge", "Comfort with fundamental math (algebra, basic calculus helpful)", "Some exposure to data concepts is a plus", "Strong curiosity about how AI systems work"],
    audience: [
      { glyph: "💡", title: "Developers", desc: "Software engineers looking to specialise into AI/ML roles." },
      { glyph: "📊", title: "Data Professionals", desc: "Analysts and data scientists deepening into deep learning and GenAI." },
      { glyph: "🔄", title: "Career Changers", desc: "Motivated learners with basic Python ready to go deep on AI." },
      { glyph: "🎯", title: "Working Professionals", desc: "Weekend and evening batches for a focused, intensive track." }
    ],
    techStack: stack(["Python","TensorFlow","PyTorch","scikit-learn","Hugging Face Transformers","LangChain","OpenAI API","Vector DBs (FAISS/Pinecone)","Docker","FastAPI","Git & GitHub","MLflow","AWS / GCP","Streamlit"]),
    curriculum: [
      {
        title: "ML Foundations", subtitle: "Python · Statistics · Classical ML", count: "16 Classes",
        left: ["Python & NumPy for ML", "Statistics & probability refresher", "Regression & classification models"],
        right: ["Decision trees & ensembles", "Model evaluation metrics", "Feature engineering"],
        project: "Project 1 — Predictive model with scikit-learn"
      },
      {
        title: "Deep Learning", subtitle: "Neural Networks · CNNs · RNNs", count: "18 Classes",
        left: ["Neural network architecture & training", "Backpropagation & optimizers", "Convolutional neural networks"],
        right: ["Recurrent neural networks & LSTMs", "Regularization & hyperparameter tuning", "TensorFlow & PyTorch basics"],
        project: "Project 2 — Image classification system"
      },
      {
        title: "NLP & Transformers", subtitle: "Attention · BERT · Embeddings", count: "16 Classes",
        left: ["Text preprocessing & embeddings", "Attention mechanism explained", "Transformer architecture"],
        right: ["Pretrained models (BERT/GPT family)", "Fine-tuning for downstream tasks", "Hugging Face pipelines"],
        project: "Project 3 — Custom text classification model"
      },
      {
        title: "Generative AI & LLMs", subtitle: "Prompting · Fine-Tuning · RAG", count: "18 Classes",
        left: ["LLM fundamentals & tokenization", "Prompt engineering patterns", "Fine-tuning & parameter-efficient tuning"],
        right: ["Vector databases & embeddings", "Retrieval-augmented generation (RAG)", "Evaluating LLM outputs"],
        project: "Project 4 — RAG-powered knowledge assistant"
      },
      {
        title: "AI Agents, MLOps & Capstone", subtitle: "Agents · Deployment · Monitoring", count: "16 Classes",
        left: ["Agentic architectures & tool use", "LangChain for agent workflows", "Model versioning with MLflow"],
        right: ["Deploying models with FastAPI & Docker", "Monitoring model drift", "Resume, portfolio & mock interviews"],
        project: "Capstone — Deployed AI agent application"
      }
    ],
    careers: [
      { tag: "Flagship", title: "AI / ML Engineer", desc: "Designs, trains and ships machine learning systems into production." },
      { tag: "Emerging", title: "Generative AI Engineer", desc: "Builds LLM-powered features, agents and RAG pipelines." },
      { tag: "Research", title: "Deep Learning Engineer", desc: "Works on neural network architectures for vision and language." },
      { tag: "High Demand", title: "NLP Engineer", desc: "Specialises in language models and text-based AI systems." },
      { tag: "Infrastructure", title: "MLOps Engineer", desc: "Owns model deployment, monitoring and reliability." },
      { tag: "Applied", title: "AI Product Engineer", desc: "Integrates AI capabilities into real product experiences." }
    ],
    faqs: [
      { q: "Do I need a math-heavy background to join?", a: "Basic algebra is enough to start; we build up the math intuition alongside the models, rather than requiring it upfront." },
      { q: "How is this different from the Data Science & AI program?", a: "This track goes deeper into deep learning, transformers, agentic AI and MLOps — it's the specialist path for AI-focused roles." },
      { q: "Will I actually build AI agents, or just talk about them?", a: "You'll build a working, tool-using AI agent as part of the curriculum and again in the capstone." },
      { q: "Is prior ML experience required?", a: "Not required, but basic Python and comfort with data concepts will help you move faster in the first month." }
    ]
  },

  {
    slug: "cloud-devops",
    category: "Cloud & DevOps",
    glyph: "☁️",
    title: "MultiCloud DevOps (AWS & Azure)",
    tagline: "CI/CD, containers, Infrastructure as Code and multi-cloud deployment.",
    description: [
      "Modern applications don't just get written — they get deployed, scaled and kept alive. This program builds you into a DevOps engineer fluent across AWS and Azure, comfortable with containers, pipelines and infrastructure as code.",
      "You'll set up real CI/CD pipelines, containerize applications with Docker and Kubernetes, and manage infrastructure with Terraform — the exact skills cloud teams hire for."
    ],
    duration: "4 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 38999,
    originalFee: 54999,
    stats: { placed: "30+", rating: "4.7", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "☁️", title: "Multi-Cloud Fluency", desc: "Not locked into one vendor — comfortable across AWS and Azure." },
      { glyph: "🔁", title: "CI/CD Pipelines", desc: "Build real pipelines with GitHub Actions and Jenkins, not slides." },
      { glyph: "📦", title: "Containers & Orchestration", desc: "Docker and Kubernetes, from a single container to a cluster." },
      { glyph: "🏗", title: "Infrastructure as Code", desc: "Provision cloud infrastructure repeatably with Terraform." },
      { glyph: "🔧", title: "Real Projects", desc: "Five projects including a full CI/CD-deployed application." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Linux, Networking & Git", desc: "Linux administration, shell scripting, networking basics and Git workflows." },
      { phase: "Month 2", title: "AWS & Azure Core Services", desc: "Compute, storage, networking and IAM across both major clouds." },
      { phase: "Month 3", title: "Containers & Orchestration", desc: "Docker, Kubernetes, and container-based deployment patterns." },
      { phase: "Month 4", title: "CI/CD, IaC & Get Hired", desc: "Pipelines, Terraform, monitoring, capstone and placement prep." }
    ],
    learn: [
      { glyph: "🐧", title: "Linux & Scripting", desc: "Linux administration and Bash scripting for automation." },
      { glyph: "☁️", title: "AWS Core Services", desc: "EC2, S3, VPC, IAM and core AWS architecture patterns." },
      { glyph: "🔷", title: "Azure Core Services", desc: "Azure VMs, storage, networking and resource management." },
      { glyph: "📦", title: "Docker & Kubernetes", desc: "Containerizing apps and orchestrating them at scale." },
      { glyph: "🔁", title: "CI/CD Pipelines", desc: "GitHub Actions and Jenkins for automated build & deploy." },
      { glyph: "🏗", title: "Infrastructure as Code", desc: "Terraform for repeatable, version-controlled infrastructure." }
    ],
    prerequisites: ["Basic computer and command-line familiarity", "No prior cloud experience required", "Some programming/scripting exposure is a plus", "Comfort with systematic, process-driven work"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "A structured path into one of tech's highest-paying entry points." },
      { glyph: "🔄", title: "Career Changers", desc: "System admins and support engineers moving into cloud roles." },
      { glyph: "💡", title: "Developers", desc: "Engineers who want to own deployment, not just write code." },
      { glyph: "🎯", title: "Working Professionals", desc: "Weekend and evening batches for working IT professionals." }
    ],
    techStack: stack(["Linux","Bash","Git & GitHub","AWS (EC2, S3, IAM, VPC)","Microsoft Azure","Docker","Kubernetes","Terraform","Jenkins","GitHub Actions","Ansible (intro)","Prometheus & Grafana"]),
    curriculum: [
      {
        title: "Linux, Networking & Git", subtitle: "Administration · Scripting · Version Control", count: "12 Classes",
        left: ["Linux file system & permissions", "Bash scripting for automation", "Networking fundamentals"],
        right: ["Git branching strategies", "GitHub collaboration workflows", "SSH & remote server access"],
        project: "Project 1 — Automated server setup script"
      },
      {
        title: "AWS Core Services", subtitle: "EC2 · S3 · VPC · IAM", count: "16 Classes",
        left: ["EC2 instances & security groups", "S3 storage & static hosting", "VPC & networking on AWS"],
        right: ["IAM roles & policies", "RDS & managed databases", "AWS CLI & automation"],
        project: "Project 2 — Deployed app on AWS EC2"
      },
      {
        title: "Azure Core Services", subtitle: "VMs · Storage · Resource Groups", count: "10 Classes",
        left: ["Azure VMs & resource groups", "Azure Blob Storage", "Azure networking basics"],
        right: ["Azure Active Directory basics", "Azure CLI & PowerShell", "Cost management & monitoring"],
        project: "Project 3 — Multi-tier app on Azure"
      },
      {
        title: "Containers & Orchestration", subtitle: "Docker · Kubernetes", count: "16 Classes",
        left: ["Docker images & containers", "Dockerfile & docker-compose", "Container registries"],
        right: ["Kubernetes architecture", "Pods, deployments & services", "Helm basics"],
        project: "Project 4 — Kubernetes-orchestrated microservice"
      },
      {
        title: "CI/CD, IaC & Capstone", subtitle: "Pipelines · Terraform · Monitoring", count: "14 Classes",
        left: ["GitHub Actions pipelines", "Jenkins pipeline basics", "Terraform fundamentals"],
        right: ["Monitoring with Prometheus/Grafana", "Capstone: full CI/CD-deployed app", "Resume & mock interviews"],
        project: "Capstone — End-to-end CI/CD deployment pipeline"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "DevOps Engineer", desc: "Owns the pipeline from code commit to production deployment." },
      { tag: "High Demand", title: "Cloud Engineer", desc: "Designs and manages infrastructure on AWS and Azure." },
      { tag: "Infrastructure", title: "Site Reliability Engineer", desc: "Keeps production systems available, fast and observable." },
      { tag: "Automation", title: "Build & Release Engineer", desc: "Owns CI/CD pipelines and release processes." },
      { tag: "Platform", title: "Kubernetes Engineer", desc: "Manages containerized workloads at scale." },
      { tag: "Foundational", title: "Cloud Support Engineer", desc: "Supports and troubleshoots cloud infrastructure for teams." }
    ],
    faqs: [
      { q: "Do I need to already know AWS or Azure?", a: "No — we start from cloud fundamentals and build up to production-grade multi-cloud deployment." },
      { q: "Is Kubernetes covered, or just Docker?", a: "Both — you'll containerize an app with Docker and then orchestrate it with Kubernetes in a real project." },
      { q: "Do you cover Infrastructure as Code?", a: "Yes — Terraform is a dedicated part of the curriculum, used in the capstone deployment." },
      { q: "Is this suitable for someone from a non-coding background?", a: "Yes — some scripting exposure helps, but we teach Linux and Bash from the ground up." }
    ]
  },

  {
    slug: "cybersecurity",
    category: "Cybersecurity",
    glyph: "🔐",
    title: "Cybersecurity & Ethical Hacking",
    tagline: "SOC operations, ethical hacking and vulnerability management.",
    description: [
      "Every company with an internet connection needs people who can defend it. This program builds practical, hands-on cybersecurity skills — from SOC monitoring and network security to ethical hacking and penetration testing.",
      "You'll work in real lab environments, run actual penetration tests on sandboxed systems, and learn the frameworks and tools SOC analysts and pentesters use daily."
    ],
    duration: "5 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 12 / batch",
    fee: 41999,
    originalFee: 58999,
    stats: { placed: "25+", rating: "4.8", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "🛡", title: "Defensive & Offensive", desc: "Learn both SOC monitoring and how attackers actually operate." },
      { glyph: "🧪", title: "Real Lab Environments", desc: "Practice on sandboxed, legal environments — not production systems." },
      { glyph: "🔍", title: "Tool Fluency", desc: "Wireshark, Nmap, Burp Suite, Metasploit used hands-on throughout." },
      { glyph: "📋", title: "Framework-Driven", desc: "MITRE ATT&CK and OWASP Top 10 woven through every module." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects including a full penetration test report." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Networking & Security Foundations", desc: "Networking fundamentals, OS security, and core security concepts." },
      { phase: "Month 2", title: "SOC & Network Security", desc: "SIEM tools, log analysis, incident response and network defence." },
      { phase: "Month 3", title: "Ethical Hacking", desc: "Reconnaissance, scanning, exploitation on legal lab environments." },
      { phase: "Month 4", title: "Penetration Testing & Vulnerability Mgmt", desc: "Web app pentesting, OWASP Top 10, and vulnerability assessment." },
      { phase: "Month 5", title: "Capstone & Placement", desc: "Full pentest report, certifications guidance and interview prep." }
    ],
    learn: [
      { glyph: "🌐", title: "Networking Fundamentals", desc: "TCP/IP, subnetting, firewalls and network architecture." },
      { glyph: "🖥", title: "SOC Operations", desc: "SIEM tools, log analysis and incident response workflows." },
      { glyph: "🕵️", title: "Ethical Hacking", desc: "Reconnaissance, scanning and exploitation methodology." },
      { glyph: "🐞", title: "Penetration Testing", desc: "Web application testing against the OWASP Top 10." },
      { glyph: "🧯", title: "Vulnerability Management", desc: "Scanning, prioritising and remediating security vulnerabilities." },
      { glyph: "📜", title: "Compliance & Reporting", desc: "Writing pentest reports and understanding security compliance basics." }
    ],
    prerequisites: ["Basic networking / IT knowledge is helpful", "No prior security experience required", "Strong attention to detail", "Ethical mindset — labs are for legal, sandboxed practice only"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "A structured path from IT basics into a security specialisation." },
      { glyph: "🔄", title: "Career Changers", desc: "Network admins and IT support moving into security roles." },
      { glyph: "💡", title: "Developers", desc: "Engineers who want to understand and build more secure systems." },
      { glyph: "🎯", title: "Working Professionals", desc: "Weekend and evening batches for working IT professionals." }
    ],
    techStack: stack(["Wireshark","Nmap","Burp Suite","Metasploit","Kali Linux","SIEM (Splunk basics)","OWASP ZAP","MITRE ATT&CK","Nessus","John the Ripper","Linux","Networking Tools"]),
    curriculum: [
      {
        title: "Networking & Security Foundations", subtitle: "TCP/IP · OS Security · Core Concepts", count: "12 Classes",
        left: ["TCP/IP & subnetting", "Firewalls & network devices", "OS-level security (Windows/Linux)"],
        right: ["CIA triad & security principles", "Cryptography basics", "Security policies & compliance intro"],
        project: "Project 1 — Network architecture security review"
      },
      {
        title: "SOC & Network Security", subtitle: "SIEM · Log Analysis · Incident Response", count: "14 Classes",
        left: ["SIEM fundamentals (Splunk basics)", "Log analysis & correlation", "Intrusion detection systems"],
        right: ["Incident response workflow", "Network security monitoring", "Threat intelligence basics"],
        project: "Project 2 — SOC incident response simulation"
      },
      {
        title: "Ethical Hacking", subtitle: "Recon · Scanning · Exploitation", count: "16 Classes",
        left: ["Footprinting & reconnaissance", "Scanning with Nmap", "Vulnerability identification"],
        right: ["Exploitation with Metasploit", "Password attacks & cracking", "Privilege escalation basics"],
        project: "Project 3 — Lab-based ethical hacking exercise"
      },
      {
        title: "Penetration Testing", subtitle: "OWASP Top 10 · Burp Suite", count: "16 Classes",
        left: ["Web app pentesting methodology", "OWASP Top 10 vulnerabilities", "SQL injection & XSS testing"],
        right: ["Burp Suite hands-on practice", "API security testing basics", "Report writing standards"],
        project: "Project 4 — Web application penetration test"
      },
      {
        title: "Vulnerability Mgmt & Capstone", subtitle: "Scanning · Remediation · Placement Prep", count: "12 Classes",
        left: ["Vulnerability scanning with Nessus", "Risk prioritisation & remediation", "Compliance frameworks overview"],
        right: ["Capstone: full penetration test report", "Certification roadmap guidance", "Mock technical interviews"],
        project: "Capstone — End-to-end penetration test & report"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "SOC Analyst", desc: "Monitors, detects and responds to security incidents daily." },
      { tag: "High Demand", title: "Cybersecurity Analyst", desc: "Assesses and strengthens an organisation's security posture." },
      { tag: "Offensive Security", title: "Penetration Tester", desc: "Simulates real attacks to find vulnerabilities before attackers do." },
      { tag: "Specialised", title: "Ethical Hacker", desc: "Conducts authorised security testing across systems and apps." },
      { tag: "Risk-Focused", title: "Vulnerability Management Analyst", desc: "Tracks, prioritises and drives remediation of vulnerabilities." },
      { tag: "Infrastructure", title: "Network Security Engineer", desc: "Designs and maintains secure network infrastructure." }
    ],
    faqs: [
      { q: "Is this legal — will I be hacking real systems?", a: "All hands-on exploitation happens in isolated, legal lab environments built specifically for training." },
      { q: "Do I need networking knowledge before joining?", a: "Basic networking helps, but the first module builds those fundamentals from scratch." },
      { q: "Does this prepare me for certifications like CEH or CompTIA Security+?", a: "Yes — the curriculum aligns with major certification bodies, and we provide a certification roadmap in the final month." },
      { q: "What's the difference between SOC and pentesting roles?", a: "SOC is defensive (monitoring and responding), pentesting is offensive (finding vulnerabilities) — this course covers both paths." }
    ]
  },

  {
    slug: "data-analytics-genai",
    category: "Data & AI",
    glyph: "📈",
    title: "Data Analytics with Generative AI",
    tagline: "SQL, Excel, Power BI, Tableau and GenAI-assisted analytics.",
    description: [
      "Every team needs someone who can turn data into a decision. This program builds strong analytics fundamentals — SQL, Excel, and BI tools — and layers in Generative AI to speed up analysis and reporting.",
      "You'll build dashboards real businesses use, write production SQL queries, and learn to use GenAI tools to accelerate exploratory analysis and reporting."
    ],
    duration: "4 Months",
    level: "Beginner → Pro",
    mode: "Online + Offline",
    batch: "Max 15 / batch",
    fee: 29999,
    originalFee: 42999,
    stats: { placed: "38+", rating: "4.7", support: "100%", experience: "6+" },
    highlights: [
      { glyph: "📊", title: "Business-Ready BI", desc: "Dashboards and reports built the way analytics teams actually work." },
      { glyph: "🗃", title: "SQL Fluency", desc: "Real, production-style SQL — not just SELECT * queries." },
      { glyph: "✨", title: "GenAI-Assisted", desc: "Use AI tools to speed up analysis, summaries and reporting." },
      { glyph: "📈", title: "Storytelling with Data", desc: "Present findings clearly to non-technical stakeholders." },
      { glyph: "🏗", title: "Real Projects", desc: "Five projects across SQL, Excel, Power BI and Tableau." },
      { glyph: "🎓", title: "Dual Certification", desc: "NextGen certificate plus an industry-recognised partner credential." }
    ],
    roadmap: [
      { phase: "Month 1", title: "Excel & SQL Foundations", desc: "Advanced Excel and SQL for querying and shaping real data." },
      { phase: "Month 2", title: "Statistics & Python for Analytics", desc: "Applied statistics and Python (Pandas) for deeper analysis." },
      { phase: "Month 3", title: "Power BI & Tableau", desc: "Building interactive dashboards and business reports." },
      { phase: "Month 4", title: "GenAI Analytics & Get Hired", desc: "AI-assisted analysis, capstone project and placement prep." }
    ],
    learn: [
      { glyph: "📗", title: "Advanced Excel", desc: "Pivot tables, formulas, and Excel-based data modelling." },
      { glyph: "🗃", title: "SQL for Analytics", desc: "Joins, window functions, and query optimisation basics." },
      { glyph: "📐", title: "Applied Statistics", desc: "Descriptive statistics and hypothesis testing for business data." },
      { glyph: "🐍", title: "Python with Pandas", desc: "Data cleaning and analysis at a scale Excel can't handle." },
      { glyph: "📊", title: "Power BI & Tableau", desc: "Building interactive, stakeholder-ready dashboards." },
      { glyph: "✨", title: "GenAI for Analytics", desc: "Using AI tools to accelerate exploration and reporting." }
    ],
    prerequisites: ["Basic Excel familiarity is helpful", "No prior programming experience required", "Comfort with numbers and logical thinking", "Interest in business problem-solving"],
    audience: [
      { glyph: "🌱", title: "Beginners", desc: "One of the most accessible entry points into a data career." },
      { glyph: "🔄", title: "Career Changers", desc: "Commerce, finance and operations professionals moving into data." },
      { glyph: "💡", title: "Excel Power Users", desc: "Extend spreadsheet skills into SQL, BI tools and Python." },
      { glyph: "🎯", title: "Working Professionals", desc: "Evening and weekend batches for working professionals." }
    ],
    techStack: stack(["Excel","SQL (MySQL/PostgreSQL)","Python","Pandas","Power BI","Tableau","Google Sheets","OpenAI API","Git & GitHub"]),
    curriculum: [
      {
        title: "Excel & SQL Foundations", subtitle: "Formulas · Pivot Tables · Queries", count: "14 Classes",
        left: ["Advanced formulas & functions", "Pivot tables & data modelling", "Data cleaning in Excel"],
        right: ["SQL SELECT, WHERE, JOIN, GROUP BY", "Window functions & subqueries", "Query performance basics"],
        project: "Project 1 — Sales performance analysis in Excel & SQL"
      },
      {
        title: "Statistics & Python for Analytics", subtitle: "Applied Stats · Pandas", count: "12 Classes",
        left: ["Descriptive statistics for business data", "Hypothesis testing basics", "Correlation & trend analysis"],
        right: ["Python & Pandas fundamentals", "Data cleaning & transformation", "Exploratory data analysis"],
        project: "Project 2 — Python-based EDA report"
      },
      {
        title: "Power BI", subtitle: "Dashboards · DAX · Data Modelling", count: "14 Classes",
        left: ["Power BI data import & modelling", "DAX formulas & measures", "Interactive visuals & filters"],
        right: ["Power Query for data transformation", "Row-level security basics", "Publishing & sharing reports"],
        project: "Project 3 — Executive KPI dashboard"
      },
      {
        title: "Tableau", subtitle: "Visualization · Storytelling", count: "10 Classes",
        left: ["Tableau interface & connections", "Calculated fields & parameters", "Dashboard design principles"],
        right: ["Storyboards & story points", "Interactive filters & actions", "Publishing to Tableau Public"],
        project: "Project 4 — Customer insights dashboard"
      },
      {
        title: "GenAI Analytics & Capstone", subtitle: "AI-Assisted Reporting · Placement Prep", count: "10 Classes",
        left: ["Using GenAI for exploratory analysis", "AI-assisted report summarisation", "Prompt patterns for analysts"],
        right: ["Capstone: end-to-end analytics project", "Resume & LinkedIn building", "Mock interviews"],
        project: "Capstone — GenAI-assisted business analytics report"
      }
    ],
    careers: [
      { tag: "Most Popular", title: "Data Analyst", desc: "Turns raw business data into dashboards, reports and decisions." },
      { tag: "High Demand", title: "Business Analyst", desc: "Bridges data insight and business strategy for stakeholders." },
      { tag: "BI Focus", title: "BI Developer", desc: "Builds and maintains dashboards and reporting infrastructure." },
      { tag: "SQL Specialist", title: "Reporting Analyst", desc: "Owns recurring reports and metrics pipelines with SQL." },
      { tag: "Emerging", title: "AI-Augmented Analyst", desc: "Uses GenAI tools to move faster from data to decision." },
      { tag: "Cross-Functional", title: "Operations Analyst", desc: "Applies analytics to improve operational efficiency." }
    ],
    faqs: [
      { q: "Do I need to know SQL or Python already?", a: "No — both are taught from the fundamentals, assuming no prior programming background." },
      { q: "What's the difference between this and the Data Science program?", a: "This track focuses on BI tools, dashboards and reporting; Data Science goes deeper into machine learning and modelling." },
      { q: "Will I learn both Power BI and Tableau?", a: "Yes — both are covered in depth, since different companies standardise on different tools." },
      { q: "How is GenAI actually used here?", a: "You'll learn to use AI tools to speed up exploratory analysis, summarise findings, and draft reports faster." }
    ]
  }
];

export const categories = [
  {
    key: "software",
    glyph: "💻",
    title: "Software Development",
    desc: "Full-stack engineering across Python, Java and JavaScript.",
    tags: ["Python", "Java", "MERN"]
  },
  {
    key: "data-ai",
    glyph: "🤖",
    title: "Data & AI",
    desc: "Data science, machine learning and Generative AI specialisation.",
    tags: ["ML", "GenAI", "Analytics"]
  },
  {
    key: "cloud",
    glyph: "☁️",
    title: "Cloud & DevOps",
    desc: "Multi-cloud infrastructure, containers and CI/CD pipelines.",
    tags: ["AWS", "Azure", "K8s"]
  },
  {
    key: "security",
    glyph: "🔐",
    title: "Cybersecurity",
    desc: "SOC operations, ethical hacking and penetration testing.",
    tags: ["SOC", "Pentest", "OWASP"]
  }
];

export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);
