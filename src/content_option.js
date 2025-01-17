const logotext = "Muzamil Ahmad"; // Updated your name here
const meta = {
    title: "Muzamil Ahmad", // Your name
    description: "I’m Muzamil Ahmad, a Front-End Developer currently pursuing my Bachelor's in Computer Science at GCUF.", // Updated description
};

const introdata = {
    title: "I’m Muzamil Ahmad", // Your name
    animated: {
        first: "I love coding",
        second: "I build cool websites",
        third: "I create interactive web apps",
    },
    description: "I am a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, Bootstrap, and React.js.",
    your_img_url: "https://t3.ftcdn.net/jpg/09/71/69/36/360_F_971693657_Wrhuzbtfh6Qqdc2vc7IKp3aRXZmk9Ymu.jpg", // Replace this with your actual image URL
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a passionate and driven web developer with a strong foundation in Front-End technologies. Currently pursuing a Bachelor's degree in Computer Science at Government College University Faisalabad (GCUF), I am constantly exploring new frameworks, tools, and methodologies to enhance my skills. My focus is on building intuitive, responsive, and user-centric websites and applications. I am eager to apply my knowledge in real-world projects and continuously grow as a developer.",
};


const worktimeline = [
    {
        jobtitle: "Front-End Developer (Intern)",
        where: "Freelance & Internships",
        date: "2023",
    },
    {
        jobtitle: "Freelance Web Developer",
        where: "Self-Employed",
        date: "2022 - Present",
    },
];

const skills = [
    {
        name: "HTML5",
        value: 90,
    },
    {
        name: "CSS3",
        value: 85,
    },
    {
        name: "JavaScript (ES6+)",
        value: 80,
    },
    {
        name: "React.js",
        value: 75,
    },
    {
        name: "Bootstrap",
        value: 80,
    },
];

const services = [
    {
        title: "UI & UX Design",
        description: "Creating clean and user-friendly designs to enhance user experience.",
    },
    {
        title: "Web Development",
        description: "Building responsive websites with clean code and modern technologies.",
    },
    {
        title: "React Development",
        description: "Developing dynamic and interactive web apps using React.js.",
    },
];

const dataportfolio = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fvQB47NWQPLEmeuQm0vHd0014oxFg1y-0A&s", // Replace with actual project image
        description: "Developed Palestine-Free.org to raise awareness about the Palestine cause.",
        link: "https://palestine-free.org", // Replace with your project link
    },
    {
        img: "https://t3.ftcdn.net/jpg/09/71/69/36/360_F_971693657_Wrhuzbtfh6Qqdc2vc7IKp3aRXZmk9Ymu.jpg", // Replace with actual project image
        description: "Personal portfolio website showcasing web development projects.",
        link: "https://muzamil-ahmad-dev.com", // Replace with your portfolio link
    },
    {
        img: "https://assets.apk.live/com.resumemakerapp.cvmaker--47-icon.png", // Replace with actual project image link
        title: "Resume Builder App", // Project title
        description: "Building a dynamic resume builder application where users can easily create, edit, and export their resumes. Currently working on adding customization features for different templates and export formats (PDF, DOC).",
        link: "https://example.com/resume-builder-app", // Replace with your live project or demo link (if applicable)
        skills: ["React.js", "JavaScript", "CSS", "PDF Generation", "Redux"], // Skills involved in the project
        role: "Full-Stack Developer", // Your role in the project
        duration: "March 2023 - Present", // Ongoing project
        keyAccomplishments: [
            "Implementing user interface for resume creation with React.",
            "Working on integrating export features for PDF and DOC formats.",
            "Building an intuitive design that allows users to easily customize their resumes."
        ],
        status: "In Progress" // Indicating the project status
    }
    
];

const contactConfig = {
    YOUR_EMAIL: "muzamil.ahmad@example.com", // Replace with your email
    YOUR_FONE: "(032) 66618262", // Replace with your phone number
    description: "Feel free to reach out for collaboration or inquiries.",
    YOUR_SERVICE_ID: "service_id", // EmailJS service ID (if used)
    YOUR_TEMPLATE_ID: "template_id", // EmailJS template ID (if used)
    YOUR_USER_ID: "user_id", // EmailJS user ID (if used)
};

const socialprofils = {
    github: "https://github.com/Muzamil-Ahmad-dev", // Your GitHub profile
    facebook: "https://facebook.com/muzamil.ahmad", // Your Facebook profile
    linkedin: "https://linkedin.com/in/muzamil-ahmad", // Your LinkedIn profile
    twitter: "https://twitter.com/muzamil_ahmad", // Your Twitter profile
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
