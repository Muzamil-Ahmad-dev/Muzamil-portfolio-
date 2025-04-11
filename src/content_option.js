const logotext = "Muzamil Ahmad";

const meta = {
    title: "Muzamil Ahmad",
    description: "I’m Muzamil Ahmad, a Full-Stack Developer currently pursuing my Bachelor's in Computer Science at GCUF.",
};

const introdata = {
    title: "I’m Muzamil Ahmad",
    animated: {
        first: "I love coding",
        second: "I build cool websites",
        third: "I create interactive web apps",
    },
    description: "I am a passionate Full-Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Next.js, SQL, and MongoDB.",
    your_img_url: "https://t3.ftcdn.net/jpg/09/71/69/36/360_F_971693657_Wrhuzbtfh6Qqdc2vc7IKp3aRXZmk9Ymu.jpg",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a driven web developer with a strong foundation in Front-End and Back-End technologies. Currently pursuing a Bachelor's degree in Computer Science at Government College University Faisalabad (GCUF), I continuously explore new frameworks and methodologies to enhance my skills. My expertise includes React.js, Node.js, Next.js, and databases like SQL & MongoDB. I am passionate about building scalable web applications and intuitive user interfaces.",
};

const worktimeline = [
    {
        jobtitle: "Front-End Developer Intern",
        where: "AAA Digital",
        date: "2023",
    },
    {
        jobtitle: "Full-Stack Developer (Freelancer)",
        where: "Self-Employed",
        date: "2022 - Present",
    },
    {
        jobtitle: "Front-End Developer (Intern)",
        where: "Freelance & Internships",
        date: "2023",
    },
];

const skills = [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 85 },
    { name: "JavaScript (ES6+)", value: 80 },
    { name: "React.js", value: 75 },
    { name: "Node.js", value: 70 },
    { name: "Next.js", value: 70 },
    { name: "Bootstrap", value: 80 },
    { name: "SQL", value: 75 },
    { name: "MongoDB", value: 70 },
    { name: "Express.js", value: 80 },
];

const services = [
    { title: "UI & UX Design", description: "Creating clean and user-friendly designs." },
    { title: "Web Development", description: "Building responsive and scalable web applications." },
    { title: "React & Next.js Development", description: "Developing interactive web apps with React & Next.js." },
    { title: "Backend Development", description: "Creating RESTful APIs and server-side applications using Node.js and databases." }
];

const dataportfolio = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fvQB47NWQPLEmeuQm0vHd0014oxFg1y-0A&s",
        description: "Developed Palestine-Free.org to raise awareness about the Palestine cause.",
        link: "https://palestine-free.org",
    },
    {
        img: "https://t3.ftcdn.net/jpg/09/71/69/36/360_F_971693657_Wrhuzbtfh6Qqdc2vc7IKp3aRXZmk9Ymu.jpg",
        description: "Personal portfolio website showcasing web development projects.",
        link: "https://muzamil-ahmad-dev.github.io/Muzamil-portfolio-/",
    },
    {
        img: "https://assets.apk.live/com.resumemakerapp.cvmaker--47-icon.png",
        title: "Resume Builder App",
        description: "A resume builder app allowing users to create, edit, and export resumes in different formats.",
        link: "https://muzamil-ahmad-dev.github.io/Resume-builder/",
        skills: ["React.js", "JavaScript", "CSS", "PDF Generation", "Redux"],
        role: "Full-Stack Developer",
        duration: "March 2024 - Present",
        keyAccomplishments: [
            "Implemented an intuitive resume creation interface with React.",
            "Integrated export features for PDF and DOC formats.",
            "Designed a user-friendly experience with customization features."
        ],
        status: "In Progress"
    },
    {
        img: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/61ba1a76b86f7c0573e04541_tier-11-long-form-landing-page-example.png",
        title: "Landing Page with React.js",
        description: "Developed a modern and responsive landing page using React.js and styled components.",
        link: "https://Muzamil-Ahmad-dev.github.io/Landing-page",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUwwZ6zo0_sljSw8_-o2k723r-cutuZc9lg&s",
        title: "SkyRide eCommerce Store",
        description: "An eCommerce website developed for a USA client. Built with a focus on performance, modern UI, and responsive design.",
        link: "https://muzamil-ahmad-dev.github.io/skyride/",
        skills: ["React.js", "Bootstrap", "JavaScript", "HTML", "CSS"],
        role: "Front-End Developer",
        duration: "Feb 2024 – March 2024",
        keyAccomplishments: [
            "Built an engaging and responsive eCommerce front-end.",
            "Integrated shopping cart and product display components.",
            "Collaborated with client to deliver business-specific features."
        ],
        status: "Completed"
    }
];

const contactConfig = {
    YOUR_EMAIL: "palesitnefree155@gmail.com",
    YOUR_FONE: "03266618262",
    description: "Feel free to reach out for collaborations or inquiries.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Muzamil-Ahmad-dev",
    facebook: "https://facebook.com/muzamil.ahmad",
    linkedin: "https://linkedin.com/in/muzamil-ahmad",
    twitter: "https://twitter.com/muzamil_ahmad",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
