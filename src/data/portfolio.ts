// Single source of truth for all portfolio content.
// Everything here was checked against the resume and the public GitHub repositories (see README).

export const GITHUB_USER = 'https://github.com/bhallusiva'

export const profile = {
  name: 'Bhallu Siva',
  wordmark: 'Siva Bhallu',
  role: 'Software Developer',
  email: 'bhallusivakumar@gmail.com',
  github: GITHUB_USER,
  // Supplied by the owner and used on the resume. The GitHub profile links a different URL
  // (linkedin.com/in/siva-bhallu-333836305); this needs to be confirmed by the owner.
  linkedin: 'https://www.linkedin.com/in/sivabhallu',
  resume: '/Bhallu_Siva_Resume.pdf',
  location: 'Visakhapatnam, India',
}

export interface Project {
  id: string
  title: string
  kind: string
  summary: string
  problem: string
  built: string
  features: string[]
  decisions: string[]
  limits: string[]
  stack: string[]
  repo: string
  featured: boolean
  status: string
  highlight: string
}

export const projects: Project[] = [
  {
    id: 'springboot',
    title: 'Spring Boot REST API',
    kind: 'Backend',
    summary: 'A product CRUD API in Spring Boot with separate controller, service and model layers.',
    problem: 'Learn how a REST API is structured in Spring Boot, from HTTP method mapping to layered code.',
    built:
      'A Java 21 Spring Boot service that exposes product endpoints. Request handling lives in controllers, data access in a service class, and the data shape in a Product model.',
    features: [
      'GET /Products and GET /Products/{id}',
      'POST /Products to add a product',
      'PUT /Products to update, DELETE /Products/{id} to remove',
      'Separate HomeController for basic routes; server runs on port 8083',
      'GitHub Actions workflow that runs the Maven build',
    ],
    decisions: [
      'Controller → Service → Model separation instead of putting logic in the controller.',
      'Uses @PathVariable and @RequestBody for typed request handling.',
    ],
    limits: [
      'Products are held in an in-memory list, so data resets on restart. JPA and MySQL persistence is the next step.',
      'The only test is the default Spring context test.',
    ],
    stack: ['Java 21', 'Spring Boot', 'Spring Web MVC', 'Maven', 'Lombok'],
    repo: `${GITHUB_USER}/SpringBootRestApi`,
    featured: true,
    status: 'Learning project, in progress',
    highlight: 'REST design',
  },
  {
    id: 'bank',
    title: 'Bank Account with JUnit 5',
    kind: 'Testing',
    summary: 'A small banking domain class with business-rule validation and automated JUnit 5 tests.',
    problem: 'Practice verifying business rules with repeatable tests instead of manual runs.',
    built:
      'A Java account class with deposit, withdraw and balance operations, plus a JUnit 5 test class that checks both the normal path and the failure cases.',
    features: [
      'Deposit rejects zero or negative amounts',
      'Withdraw rejects amounts larger than the balance',
      'Five @Test methods using assertEquals, assertThrows and assertTrue',
      'Maven project with a GitHub Actions workflow that runs mvn test on Java 21',
    ],
    decisions: [
      'Business rules throw IllegalArgumentException, and the tests assert on that exception.',
      'Tests cover positive, negative and exception paths.',
    ],
    limits: ['Single account class and a single test class. Test coverage has not been measured.'],
    stack: ['Java 21', 'JUnit 5', 'Maven', 'GitHub Actions'],
    repo: `${GITHUB_USER}/BankManagementTesting---JUnit5`,
    featured: true,
    status: 'Completed exercise',
    highlight: 'Unit testing',
  },
  {
    id: 'signalminds',
    title: 'SignalMinds Academic Assistant',
    kind: 'AI / Backend',
    summary: 'A FastAPI service that answers textbook questions using retrieval-augmented generation and a Groq-hosted LLM.',
    problem: 'Let a student ask a textbook question and get an answer grounded in the book, with a fallback when the book has no relevant passage.',
    built:
      'A Python backend with an /ask endpoint, session-based conversation memory, a RAG pipeline over a PDF textbook, and a small tool layer for calculator and textbook lookups.',
    features: [
      'FastAPI app with /, /health and POST /ask routes',
      'Per-session conversation memory keyed by session_id',
      'RAG pipeline: PDF ingestion (PyMuPDF), sentence-transformer embeddings, ChromaDB retrieval, retrieval evaluation, query rewriting and answer generation',
      'Agent that routes between calculator, textbook search and general LLM answers',
      'Groq client with retry handling for rate limits',
      'Test scripts for the agent, RAG pipeline, full system and multi-user sessions',
    ],
    decisions: [
      'A retrieval evaluator decides whether textbook context is good enough before falling back to the LLM.',
      'Agent, RAG, tools and models are separate packages.',
    ],
    limits: [
      'The phone and regional-language layer (Exotel, Bhashini, speech-to-text, text-to-speech) is described in the README but the voice modules in the repository are still empty. The text API is the implemented part.',
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Groq', 'sentence-transformers', 'PyMuPDF'],
    repo: `${GITHUB_USER}/SignalMindsAgent`,
    featured: true,
    status: 'Prototype: text API implemented, voice layer planned',
    highlight: 'RAG pipeline',
  },
  {
    id: 'gesture',
    title: 'Gesture-Controlled Presentation',
    kind: 'Computer vision',
    summary: 'Control slides with hand gestures from a webcam, including drawing and erasing annotations.',
    problem: 'Move through a presentation and mark up slides without touching a keyboard or mouse.',
    built:
      'A Python OpenCV script that reads webcam frames, finds the hand with cvzone’s hand detector, counts raised fingers and maps each finger pattern to a slide action.',
    features: [
      'Thumb for previous slide, pinky for next slide',
      'Index and middle finger for a pointer, index finger alone to draw',
      'Three fingers to erase the last stroke',
      'Thumb and index finger to auto-advance slides',
      'Open palm to show or hide the webcam preview',
      'Gestures only register above a threshold line so resting hands do not trigger actions',
    ],
    decisions: [
      'A button-delay counter stops a single gesture from firing on every frame.',
      'Annotations are stored per slide as lists of points and redrawn on each frame.',
    ],
    limits: [
      'The auto-advance gesture in the code is thumb and index finger. The resume lists a four-finger gesture; the code is the reference here.',
    ],
    stack: ['Python', 'OpenCV', 'MediaPipe (via cvzone)', 'NumPy'],
    repo: `${GITHUB_USER}/Gesture-Controlled-Presentation-python-opencv`,
    featured: true,
    status: 'Working script',
    highlight: 'Real-time vision',
  },
]

export const skillGroups = [
  { name: 'Languages', items: ['Java', 'Python', 'SQL'] },
  { name: 'Backend', items: ['Spring Boot', 'REST APIs', 'Hibernate', 'JDBC', 'Servlets', 'JSP', 'FastAPI'] },
  { name: 'Databases', items: ['MySQL'] },
  { name: 'Frontend basics', items: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Testing and tools', items: ['JUnit 5', 'Maven', 'Git', 'GitHub', 'GitHub Actions', 'Postman', 'Eclipse', 'VS Code'] },
  { name: 'Core CS', items: ['Object-oriented programming', 'Data structures', 'Algorithms', 'MVC architecture', 'Database management'] },
  { name: 'AI and vision (projects)', items: ['RAG', 'OpenCV', 'MediaPipe', 'NumPy'] },
]

export const education = [
  {
    title: 'Bachelor of Technology, Computer Science',
    school: 'Gayatri Vidhya Parishad College of Engineering, Visakhapatnam',
    period: '2025 – Present',
    score: 'CGPA 9.02',
    note: 'Expected graduation 2028',
  },
  {
    title: 'Diploma in Computer Engineering',
    school: 'Maddi Bala Tripura Sundaramma Government Polytechnic, Guntur',
    period: '2022 – 2025',
    score: '92%',
    note: '',
  },
]

export const certifications = [
  { title: 'Data Structures and Algorithms using Java', issuer: 'ScholarHat' },
  { title: 'Technology Job Simulation', issuer: 'Deloitte' },
]

export const workflow = [
  { step: 'Understand the problem', text: 'Restate the input, output and constraints.' },
  { step: 'Identify the pattern', text: 'Two pointers, recursion, binary search on the answer, and so on.' },
  { step: 'Design the solution', text: 'Start with the brute force, then improve it.' },
  { step: 'Test edge cases', text: 'Empty input, single elements, duplicates, limits.' },
  { step: 'Analyze complexity', text: 'State time and space cost before moving on.' },
]
