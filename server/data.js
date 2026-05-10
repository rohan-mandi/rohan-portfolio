export const portfolio = {
  profile: {
    name: "Rohan Mandi",
    title: "Software Engineering Student & Researcher",
    tagline:
      "Building thoughtful software at the intersection of full-stack engineering, real-time systems, and human-AI interaction.",
    location: "London, ON",
    email: "rohanmandi3@gmail.com",
    phone: "416-827-3750",
    links: {
      github: "https://github.com/rohan-mandi",
      linkedin: "https://linkedin.com/in/rohan-mandi"
    },
    portrait: "/images/IMG_5248.jpeg",
    hero: "/images/IMG_8624.jpeg"
  },

  about: {
    blurb: [
      "I'm a third-year Software Engineering student at the University of Western Ontario with a passion for shipping full-stack systems that solve real problems — from real-time bidding platforms to game-theoretic models of human-AI interaction.",
      "Outside of code, I'm a Shaolin Kung Fu and Kempo black belt, a former martial arts instructor, and a long-time FIRST Robotics programmer. I bring the same discipline I learned in the dojo to engineering: respect the fundamentals, iterate carefully, and stay curious."
    ],
    highlights: [
      { label: "1st Place", detail: "Western Engineering Competition 2025 — Senior Programming" },
      { label: "Dean's Award", detail: "NSERC-equivalent USRA research grant ($7,500)" },
      { label: "200+ students", detail: "Represented as 3rd Year SE Rep on UES" },
    ]
  },

  education: [
    {
      school: "University of Western Ontario",
      degree: "B.E.Sc. — Software Engineering",
      period: "Sept. 2023 – Apr. 2027 (Expected)",
      location: "London, ON",
      details: [
        "Dean's Honour List",
        "Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Operating Systems, Quantum Computation, Computer Network Applications, Microprocessors and Microcomputers"
      ]
    }
  ],

  research: [
    {
      org: "University of Western Ontario, Faculty of Engineering",
      role: "Undergraduate Summer Researcher — Dean's Award Recipient",
      period: "May 2026 – Aug. 2026",
      location: "London, ON",
      bullets: [
        "Awarded a competitive 16-week NSERC-equivalent research grant ($7,500) under Dr. Atrisha Sarkar to work on Game Theory for Human-AI Interaction.",
        "Building behavioural and strategic models in Python that capture how people make decisions when interacting with AI, extending the lab's work on non-cooperative game theory and Nash equilibrium-based planning.",
        "Implementing utility functions and evaluation pipelines using NumPy, SciPy, and Pandas, with results visualized in Matplotlib, contributing toward a peer-reviewed publication."
      ],
      stack: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib"]
    }
  ],

  experience: [
    {
      org: "Costco Wholesale",
      role: "Front End Associate",
      period: "Summer 2024 – Summer 2025",
      location: "East Gwillimbury, ON",
      bullets: [
        "Organized lot and storefront flow during peak periods, supporting customer and vehicle safety in a high-traffic environment.",
        "Coordinated with coworkers on assisted lifts of heavy appliances to ensure customer safety and undamaged goods.",
        "Provided friendly, service-oriented greetings that contributed to a positive customer experience."
      ]
    },
    {
      org: "Shaolin Martial Arts Canada",
      role: "Martial Arts Instructor — All Ages, Self Defence, Traditional Shaolin Weapons",
      period: "Winter 2022 – Summer 2023",
      location: "Aurora, ON",
      bullets: [
        "Co-led martial arts sessions of up to 30 students, designing engaging, intensive routines alongside a senior instructor.",
        "Taught discipline, respect, and self-control to students of all ages — both inside and outside the dojo.",
        "Worked front-desk customer service to schedule orientations for new clients and support new business."
      ]
    }
  ],

  projects: [
    {
      name: "Project Abyss (Biolume)",
      period: "Nov. 2025 – Mar. 2026",
      blurb:
        "1st Place — Senior Programming Division at the Western Engineering Competition (WEC) 2025. A high-performance Canvas rendering engine over a unified deep-sea dataset, which earned us a trip to Ottawa to represent Western at the Ontario Engineering Competition (OEC).",
      bullets: [
        "Won 1st Place in Senior Programming at WEC 2025 with our 4-person team — earning the right to represent Western at the Ontario Engineering Competition (OEC) in Ottawa.",
        "Engineered a \"Flashlight\" rendering engine using HTML5 Canvas global composite operations — dynamic lighting at a steady 60 FPS via spatial-grid optimization.",
        "Built an Express.js backend that parsed and aggregated disparate CSVs (environmental hazards, biological life, resources) into a unified 2,500 km² coordinate system.",
        "Delivered a polished React front-end and demo under tight competition constraints."
      ],
      stack: ["React", "Express", "Node.js", "HTML5 Canvas"],
      tags: ["Award", "Real-time", "Graphics"],
      image: "/images/projects/Screenshot%202026-05-10%20160717.png",
      gallery: [
        "/images/IMG_6919.jpeg",
        "/images/IMG_9271.JPG",
        "/images/IMG_3803.jpeg"
      ],
      galleryPositions: ["center 15%", "center 40%", "center"],
      links: {
        repo: "https://github.com/WaterFlavoured/wec-stuff"
      }
    },
    {
      name: "KSS Auction Platform",
      period: "Jan. 2026 – Apr. 2026",
      blurb:
        "Full-stack quarterly auction platform for industry client Kognitive Sales Solutions, where sales reps bid on prizes using \"Kogbucks\" tied to their performance.",
      bullets: [
        "Real-time bidding engine using Firestore live listeners — sub-second updates for bids, outbid alerts, and balance changes for concurrent users.",
        "Shipped the Angular SPA via Docker, Firebase Hosting, and Google Cloud Run.",
        "Worked Agile across 4 sprints with Git, GitHub, and Jira."
      ],
      stack: ["Angular", "TypeScript", "Firebase", "Firestore", "Cloud Functions", "Docker"],
      tags: ["Full-stack", "Real-time", "Industry Client"],
      image: "/images/projects/Screenshot%202026-05-10%20160247.png",
      links: {
        live: "https://kogucks-c649b.web.app/",
        repo: "https://github.com/ShaimaaAliECE/group-project-team-18-1"
      }
    },
    {
      name: "Western Poker Club Web Portal",
      period: "Sept. 2024 – Present",
      blurb:
        "The official full-stack web portal for the UWO Poker Club — centralizing tournament rankings and member statistics for a community of 200+ students.",
      bullets: [
        "Designed a relational database schema that automated leaderboard tracking and reduced manual administrative entry by 100%.",
        "Enabled real-time score updates for ranked tournament play.",
        "Lead strategic planning and execution of inter-university collaborative events."
      ],
      stack: ["React.js", "SQL", "Node.js"],
      tags: ["Full-stack", "Community"],
      image: "/images/projects/Screenshot%202026-05-10%20160745.png",
      links: {
        live: "https://www.uwopc.com/",
        repo: "https://github.com/rohan-mandi/UWOPC-website"
      }
    }
  ],

  leadership: [
    {
      org: "Undergraduate Engineering Society (UES)",
      role: "3rd Year Software Engineering Representative",
      period: "Sept. 2025 – Present",
      location: "London, ON",
      bullets: [
        "Represent 200+ Software Engineering students as the liaison between student body and faculty, driving process improvements through data-driven feedback.",
        "Serve on the Western Engineering Endowed Student Donation Fund (WEESDF) Council — analyze proposals and allocate a $300,000 budget across engineering clubs."
      ],
      image: "/images/2BC19EB6-EDBA-4FAB-9401-604179723969.JPG",
      link: { label: "View on UES website", href: "https://www.western-ues.com/reps" }
    },
    {
      org: "University of Western Ontario Poker Club",
      role: "Director of Projects",
      period: "Sept. 2024 – Present",
      location: "London, ON",
      bullets: [
        "Built and deployed the club's official full-stack web portal (React.js + SQL) for 200+ students.",
        "Lead strategic planning and execution of inter-university collaborative events, managing stakeholder relationships and large-scale non-cash tournament logistics.",
        "Helped cultivate and market a brand-new club at Western — shaping the brand and member experience."
      ]
    },
    {
      org: "FIRST Robotics",
      role: "Programming Team Lead",
      period: "Fall 2019 – Spring 2023",
      location: "Newmarket, ON",
      bullets: [
        "Coordinated a team to build a $15,000 competition robot — optimizing scoring and alliance value within competition rules.",
        "Taught new members the fundamentals of Java for robot autonomy, passing forward the knowledge that brought me into programming."
      ]
    }
  ],

  skills: {
    Languages: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "C#"],
    "Frameworks & Libraries": [
      "React.js",
      "Express.js",
      "Angular",
      "Node.js",
      "JavaFX",
      "MediaPipe",
      "Canvas API"
    ],
    "Cloud & Tools": [
      "AWS (EC2, S3)",
      "Firebase",
      "GCP",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Jira"
    ],
    "Data & Analytics": [
      "SQL Database Design",
      "NoSQL Schema Design",
      "Data Parsing (CSV/JSON)",
      "NumPy / SciPy / Pandas"
    ]
  },

  certifications: [
    "Shaolin Kung Fu and Kempo — Black Belt (Nov. 2022)",
    "Standard First Aid and CPR-C (June 2022)",
    "WHMIS Training (Sept. 2023)"
  ]
};
