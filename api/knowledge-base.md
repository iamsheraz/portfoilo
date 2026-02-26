# Sheraz Tariq — Professional Profile

## Overview
Sheraz Tariq is a Full Stack Developer, AI Engineer, and Software Engineer based in the Dallas-Fort Worth area, Texas. He has 8+ years of professional experience building enterprise-grade microservices, cloud-native applications, and AI-powered systems. He is currently pursuing a Master's degree in Artificial Intelligence at the University of Texas at Austin while working full-time. He is open to full-time roles in Software Development, AI/ML Engineering, and Cloud Engineering.

## Contact
- Email: hiresheraz@gmail.com
- LinkedIn: https://www.linkedin.com/in/mstariq
- Portfolio: https://hiresheraz.com

## Education

### Master of Science in Artificial Intelligence — University of Texas at Austin (In Progress)
- Coursework: Deep Learning, Natural Language Processing (NLP), Machine Learning, Healthcare Informatics
- Completed projects on medical NLP with MIMIC clinical data, LLM-powered triage systems, and optimization algorithms
- Applied cutting-edge techniques including RAG, LoRA fine-tuning, transformer architectures, and vector databases

### Bachelor of Science in Computer Science
- Strong foundation in data structures, algorithms, object-oriented programming, and software engineering principles

## Certifications
- AWS Certified (Cloud Practitioner / Solutions Architect level)
- Microsoft Azure Certified

## Professional Experience

### Software Engineer — NextGear Capital, Irving, TX (June 2021 – Present)
NextGear Capital is a Cox Automotive brand providing inventory floor plan financing for auto dealers.

**Key Responsibilities & Achievements:**

- Engineered and deployed 5+ scalable microservices using Java, Spring Boot, and Spring Framework, following DevSecOps principles, resulting in a 10% increase in system efficiency and security
- Designed and deployed a fault-tolerant messaging architecture using RabbitMQ and AWS SQS, enabling seamless communication between microservices and handling over 500+ messages per second during peak traffic
- Led the preparation for Azure Service Bus migration from RabbitMQ, ensuring all applications met prerequisites (ngc app 5.2.5+ and Apache Camel configuration) for improved scalability and cloud-first strategy
- Automated the NextGear Audit Prioritization dataset ingestion, returning approximately 12 weeks of productivity annually to the support team while reducing manual data entry errors
- Implemented database performance optimization by addressing slow pagination issues, creating proper indexing strategies, and implementing cursor-based pagination
- Identified and removed excessive @Formula annotations across microservices, reducing unnecessary database calls and improving overall system performance
- Enhanced error tracking capabilities for Sopra-API by implementing persistence for failed sync events and tracking resolution status
- Introduced Terraform for Infrastructure as Code, managing New Relic dashboards across services with GitHub Actions automation in the Sopra service
- Created and maintained comprehensive spec files across services to support the organization's AI-first initiative, enabling developers to get more accurate AI-assisted responses
- Worked with Liquibase for database migrations, creating indexes and views
- Implemented SQL queries with JWT token authentication and user context for stored procedures
- Contributed to Salesforce CRM integrations, improving customer data management and engagement strategies
- Recognized with "Employee of the Quarter" award and advanced to a senior-level position within 2 years
- Led the AI Hackathon team, creating AuditGPT — a working prototype that demonstrated AI's potential for audit automation. Manager commended leadership in motivating team members and delivering a successful prototype

**Environment:** Java, Spring Boot, Spring Framework, RabbitMQ, Azure Service Bus, MySQL, AWS (EC2, EBS, S3, SQS, Lambda, API Gateway), Azure, Terraform, New Relic, Jenkins, GitLab CI, Maven, Docker, Nomad, log4j, Apache Camel, Liquibase, JSF/PrimeFaces

### IT Consultant — Easyology (Consulting Company) (Previous Role)
- Full-stack development and IT consulting services
- Worked on enterprise application development and client-facing solutions

## Key Projects

### AuditGPT — AI-Powered Audit Automation System (NextGear Capital Hackathon)
An innovative multi-agent AI system for automating audit workflows in the auto lending space.

**Architecture & Technical Details:**
- Multi-agent system with specialized agents: Intent Classification Agent, Table Selection Agent, Column Pruning Agent, and Query Generation Agent
- Natural language to SQL translation using AWS Bedrock (Claude 3) and Snowflake Cortex AI
- Used a data catalog (catalog.json) with schema metadata for table-aware SQL prompt generation
- Column pruning reduced token consumption by 60-80%, enabling handling of schemas with 200+ columns
- Human-in-the-loop verification for table selection to address hallucination issues
- Interactive React frontend with FastAPI backend
- Evaluation framework measuring intent accuracy, table overlap score, query execution success rate, and LLM-based qualitative similarity scoring

**Tech Stack:** Python, FastAPI, React, AWS Bedrock (Claude 3 Haiku), Snowflake Cortex AI, boto3, FAISS, Docker

### LLM-Powered Emergency Department Triage Assistant (UT Austin Academic Project)
A comprehensive clinical decision support system that predicts Emergency Severity Index (ESI) levels using LLMs and RAG.

**Technical Details:**
- Evaluated three approaches: RAG baseline, LoRA fine-tuning, and hybrid RAG + fine-tuning on 418,084 triage cases from MIMIC-IV-ED
- RAG baseline achieved 66.7% exact accuracy and 100% adjacent accuracy (within ±1 ESI level) — critical for clinical safety as the system never makes dangerously wrong predictions
- Used BioMistral-7B medical LLM with 4-bit quantization (NF4) for memory-efficient inference
- LoRA fine-tuning with r=16, α=32, targeting attention and projection layers with only 1.11% trainable parameters
- Semantic search using FAISS vector database with 292K+ clinical case embeddings
- Embedding model: SentenceTransformers (all-MiniLM-L6-v2, 384 dimensions)
- Built Streamlit interface for clinical demonstration
- Published research paper with findings on RAG vs fine-tuning for clinical NLP

**Tech Stack:** Python, PyTorch, HuggingFace Transformers, PEFT, BioMistral-7B, FAISS, Google BigQuery, Streamlit, Google Colab

### Medical NLP Entity Extraction (UT Austin Academic Project)
NLP project extracting clinical entities from MIMIC medical notes for subarachnoid hemorrhage patients.

**Technical Details:**
- Extracted entities using SpaCy, SciSpacy, and MedSpacy from MIMIC-III NOTEEVENTS
- Created Word2Vec embeddings for medical terminology
- Generated t-SNE visualizations for entity clustering analysis
- Compared standard NLP vs biomedical-specific NLP tools for clinical text processing

**Tech Stack:** Python, SpaCy, SciSpacy, MedSpacy, Word2Vec (Gensim), t-SNE, Google Colab

### AutoCheck VHR API Integration (NextGear Capital)
Migration of vehicle history report API integration from Python Lambda to Java Spring Boot.

**Technical Details:**
- Migrated from Experian's AutoCheck API (Python Lambda) to a Java Spring Boot application
- Implemented Controller → Service → DTO architecture with mock and real endpoints
- Handled form-urlencoded POST requests with JSON response mapping
- Created comprehensive error handling and logging

**Tech Stack:** Java 21, Spring Boot, RestTemplate, Experian AutoCheck API

### Portfolio Website with AI Chatbot (Personal Project)
An interactive portfolio website featuring an AI-powered chatbot (the conversation you're in right now!).

**Technical Details:**
- Built with React 19, Vite, and Bootstrap
- Features an AI-powered resume chatbot using knowledge base context
- Deployed on Vercel
- Responsive design with modern UI/UX

**Tech Stack:** React 19, Vite, Bootstrap, Vercel, OpenAI API

## Skills

### Programming Languages
- Java (Core Java, J2EE), Python, JavaScript (ES6+), TypeScript, SQL

### Backend & Frameworks
- Spring Boot, Spring Framework, Spring MVC, Spring Security
- Node.js, Express.js, FastAPI
- REST APIs, Microservices Architecture, Serverless Functions
- Apache Camel, RabbitMQ, Azure Service Bus, AWS SQS

### Frontend
- React, Next.js, AngularJS, JSF/PrimeFaces
- HTML5, CSS3, Bootstrap, Tailwind CSS
- State Management, Responsive Design, UI/UX

### Databases
- MySQL, PostgreSQL, MongoDB, Firebase
- Snowflake, Google BigQuery
- Liquibase (database migrations), indexing strategies, cursor-based pagination

### AI & Machine Learning
- Machine Learning, Deep Learning, Natural Language Processing (NLP)
- Large Language Models (LLMs), RAG (Retrieval-Augmented Generation), LoRA/QLoRA Fine-Tuning
- TensorFlow, PyTorch, Scikit-learn, HuggingFace Transformers, PEFT
- FAISS Vector Database, SentenceTransformers, Word2Vec
- SpaCy, SciSpacy, MedSpacy (Clinical NLP)
- OpenAI API, AWS Bedrock, Snowflake Cortex AI, Azure AI Services
- Multi-Agent Systems, Agentic AI, MCP (Model Context Protocol)
- Prompt Engineering, LLM Integration, Structured Outputs

### Cloud & DevOps
- AWS: EC2, EBS, S3, SQS, Lambda, API Gateway, Bedrock
- Microsoft Azure: App Service, Azure SQL, Key Vault, Azure AD, Azure OpenAI, Azure AI Foundry
- Docker, Kubernetes, Terraform (Infrastructure as Code)
- Jenkins, GitLab CI/CD, GitHub Actions
- New Relic, Application Insights (Monitoring & Observability)
- Nomad, Maven, log4j

### Tools & Platforms
- Git, GitHub, Jira, Confluence
- VS Code, IntelliJ IDEA, Jupyter Notebooks, Google Colab
- Agile/Scrum Methodology
- Salesforce CRM Integration

## Interests & Strengths
- Passionate about building AI-powered applications, especially in healthcare and enterprise domains
- Interested in roles: Software Engineer, AI/ML Engineer, Full Stack Developer, Cloud Engineer, Data Scientist
- Strong leadership skills — led hackathon teams, mentored team members, and drove AI-first initiatives
- Enjoys bridging the gap between enterprise software engineering and cutting-edge AI/ML research
- Committed to continuous learning — pursuing Master's while working full-time

## FAQ

### What kind of roles is Sheraz looking for?
Sheraz is seeking full-time roles in Software Development, AI/Machine Learning, and Cloud Engineering, including positions like Software Engineer, Full Stack Developer, AI/ML Engineer, Cloud Engineer, and Data Scientist. He is especially interested in roles that combine his enterprise development experience with AI/ML.

### What is Sheraz's experience level?
Sheraz has 8+ years of professional software engineering experience at NextGear Capital (a Cox Automotive brand), with expertise spanning backend microservices (Java/Spring Boot), cloud infrastructure (AWS & Azure), and AI/ML systems. He is also pursuing a Master's in AI at UT Austin.

### What makes Sheraz unique?
Sheraz uniquely combines deep enterprise Java/Spring Boot experience with hands-on AI/ML expertise. He has built production microservices handling 500+ messages/second AND research-grade AI systems like an LLM-powered clinical triage assistant achieving 100% adjacent accuracy. Few engineers bridge both worlds this effectively.

### What AI/ML experience does Sheraz have?
Sheraz has built AuditGPT (a multi-agent system using AWS Bedrock and Snowflake Cortex AI), an LLM-powered ED triage assistant using BioMistral-7B with RAG and LoRA fine-tuning on MIMIC-IV-ED data, and medical NLP pipelines using SpaCy/SciSpacy. He is proficient in PyTorch, HuggingFace, FAISS, and prompt engineering.

### What cloud certifications does Sheraz have?
Sheraz holds both AWS and Azure certifications, with hands-on production experience across both platforms — from managing EC2/S3/Lambda on AWS to preparing Azure Service Bus migrations and working with Azure AI services.

### Can I see Sheraz's resume?
Yes! You can view or download Sheraz's resume from the portfolio site at hiresheraz.com. There's a Resume dropdown button on the homepage.

### How can I contact Sheraz?
You can reach Sheraz via email at hiresheraz@gmail.com or connect on LinkedIn at linkedin.com/in/mstariq.

### Where is Sheraz located?
Sheraz is based in the Dallas-Fort Worth area, Texas (specifically near Lavon/Lewisville area). He is open to both local and remote opportunities.

## About the Portfolio
- Built with React 19 + Vite + Bootstrap
- Features an AI-powered chatbot (this conversation!)
- Deployed on Vercel
- Showcases projects, skills, and professional background
