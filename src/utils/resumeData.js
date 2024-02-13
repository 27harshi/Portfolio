import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const resumeData = {
    name: 'Harshitha c ',
    title: 'full stack developer',
    birthday: '27/08/2002',
    email: 'harshithachandrappa9@',
    phone: '6385909059',
    address: 'Bengaluru,karnataka,india',
    about: 'Dedicated and skilled Full Stack Developer with a passion for creating efficient, user-centric web applications. Adept at utilizing a comprehensive tech stack, from front-end technologies like HTML, CSS, and JavaScript, React JS to back-end technologies such as  Python.\n\n Proven ability to design and implement scalable and responsive solutions that meet business objectives. Seeking a challenging role where I can leverage my expertise in both front-end and back-end development to contribute to innovative projects and continuously enhance my skills in a dynamic team environment.',

    socials: {
        Linkedin: {
            link: "https://www.linkedin.com/in/harshitha-chandrappa",
            text: 'linkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: "https://github.com/27harshi",
            text: 'Github',
            icon: <GitHubIcon />,
        },

    },
    projects: [
        {
            title: 'E-commerce website',
            tech: ' Technologies used : React ,Javascript,TailwindCss,HTML',
            description: ' Created an intuitive and easy-to-navigate design for seamless user experience using React Router.Allows users to edit their cart , update quantities and removeitems easily using Redux.Styled using Tailwind CSS.'
        },
        {
            title: 'Online Protfolio website',
            tech: ' Technologies used : React ,Javascript,Material UI,HTML',
            description: "Developed a responsive personal portfolio website using HTML, CSS, Material UI ,React JS and JavaScript. Implemented a clean and modern design to showcase project and skills."
        },
        {
            title: 'Bake House Management System',
            tech: ' Technologies: Python , HTML, CSS, JavaScript ,Bootstrap ,SQLite',
            description: " Developed a comprehensive Bakehouse Management System using Python for both front-end and back-end, providing functionalities for order management , user details etc..,",
        },

    ],
    education: [
        {
            title: 'BACHELOR OF COMPUTER APPLICATIONS',
            date: ' 2020-2023',
            university: "Bengaluru city university"

        },
        {
            title: 'SECOND YEAR PRE-UNIVERSITY',
            date: ' 2019-2020',
            university: "SRI SAIRAM PU COLLEGE"

        },
        {
            title: 'SSLC',
            date: ' 2016-2017',
            university: "GULABI GIRL'S HIGH SCHOOL"

        },

    ],
    skills: [
        {
            title: 'FRONT-END',
            description: ['React JS', 'JavaScript', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap'],
        },
        {
            title: 'BACK-END',
            description: ['Python'],
        },
        {
            title: 'DATABASE',
            description: ['MySQL'],
        },

    ],
    portfolio: [
        {
            tag: 'React',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VRSXYNZeVV45G3Hf7ACOeRmKvFwp0aVLXEJM52WnTfOQ70_1XalHAeOuHDnknWwGCG0&usqp=CAU',
            title: 'Shop online',
            description: ' Created an intuitive and easy-to-navigate design for seamless user experience using React Router.Allows users to edit their cart , update quantities and removeitems easily using Redux.Styled using Tailwind CSS.',

            links: [
                { link: "https://github.com/27harshi", icon: <GitHubIcon /> },
            ],

        },
        {
            tag: 'React',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRxxYH1SD2ihRlNuNpXxfr_Jdk5fH8DInSw&usqp=CAU',
            title: 'YouTube clone',
            description: " Developed Youtube clone using React,Styled using TailwindCss ,used Searchparams ",
            links: [
                { link: "https://github.com/27harshi", icon: <GitHubIcon /> },
            ],

        },
        {
            tag: 'React',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkxb8_qJ0Ah2XD1GuKAO2HRXUM9DvcLsGpy5Y6Td1WMfHYX5xBtjUtso7UdOgjUxB2T8&usqp=CAU',
            title: 'Netflix',
            description: "The clone would feature a sleek and user-friendly interface, with a design resembling the familiar Netflix layout.using bootstarp",
            links: [
                { link: "https://github.com/27harshi", icon: <GitHubIcon /> },
            ],

        },
        
    ]
    


};
export default resumeData;