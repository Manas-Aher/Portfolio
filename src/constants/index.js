const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "#resume",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/design.png",
    title: "Responsive Design",
    desc: "Crafting websites that look and perform great across all screen sizes and devices.",
  },
  {
    imgPath: "/images/performance.png",
    title: "Optimized Performance",
    desc: "Building fast-loading, efficient websites with clean code and best practices.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "Working seamlessly with designers, developers, and stakeholders to bring ideas to life.",
  },
];


const techStackImgs = [
  {
    name: "NodeJS",
    imgPath: "/images/logos/nodejs.svg",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.svg",
  },
  {
    name: "NextJS",
    imgPath: "/images/logos/nextjs.svg",
  },
  {
    name: "GitHub",
    imgPath: "/images/logos/github.svg",
  },
  {
    name: "Bootstrap",
    imgPath: "/images/logos/bootstrap.svg",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.svg",
  },
  {
    name: "React Redux",
    imgPath: "/images/logos/redux.svg",
  },
  {
    name: "Material UI",
    imgPath: "/images/logos/materialui.svg",
  },
];

const techStackIcons = [
  {
    name: "HTML5",
    modelPath: "/models/html5_logo.glb",
    scale: 1,
    rotation: [0, -Math.PI / 2, 0],
    position: [0, -2.5, 0],
  },
  {
    name: "CSS",
    modelPath: "/models/css-3d.glb",
    scale: 0.026,
    rotation: [0, -Math.PI / 2, 0],
    position: [0.3, -5, 0],
  },
  {
    name: "JavaScript",
    modelPath: "/models/javascript_1.glb",
    scale: 0.23,
    rotation: [4.7, Math.PI / 2, Math.PI / 1],
    position: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "threejs",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    githubUrl: "https://github.com/Manas-Aher/iLanding",
    liveDemoUrl: "https://ilanding-manas.netlify.app/",
    keypoints: [
      'Understanding React component structure and JSX',
      'Working with props and basic state management',
      'Building reusable UI components',
      'Styling responsive layouts using Bootstrap',
      'Developing projects with guidance and best practices',
    ],
    buildWith: ['NextJS', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    description: "iLanding is a learning project created during my React classes, where I explored core concepts like components, props, and state with guidance from my teacher.",
    imgPath: "/images/iLanding.png",
    logoPath: "/images/iLanding-logo.png",
    title: "iLanding Project",
    githubUrl: "https://github.com/Manas-Aher/iLanding",
    liveDemoUrl: "https://ilanding-manas.netlify.app/",
    keypoints: [
      'Understanding React component structure and JSX',
      'Working with props and basic state management',
      'Building reusable UI components',
      'Styling responsive layouts using Bootstrap',
      'Developing projects with guidance and best practices',
    ],
    buildWith: ['React', 'Bootstrap', 'Formik', 'AXIOS'],
  },
  {
    description: " NextGen Arena is a responsive web experience designed to engage visitors with bold visuals and smooth interaction flow. It demonstrates frontend development skills through structured layouts and responsive design.",
    imgPath: "/images/nextGen-view.png",
    logoPath: "/images/nextGen-logo.png",
    title: "NextGen-Arena",
    githubUrl: "https://github.com/Manas-Aher/NextGen-Arena",
    liveDemoUrl: "https://nextgen-arena.netlify.app/",
    keypoints: [
      'Gained hands-on experience with Next.js page routing and SSR concepts',
      'Built responsive layouts and components using Tailwind CSS',
      'Integrated smooth scroll animations using GSAP and ScrollTrigger',
      'Learned to manage project structure and component composition effectively',
      'Used utility libraries like clsx for conditional styling'
    ],
    buildWith: ['NextJS', 'Tailwind CSS', 'GSAP', 'ScrollTrigger', 'clsx'],
  },
  {
    description: "A Valorant-inspired gaming website built with bold visuals, responsive layouts, and smooth interactions to deliver an immersive fan experience. This Website is same as NextGen Arena.",
    imgPath: "/images/valorant-view.png",
    logoPath: "/images/valorant.png",
    title: "Valorant Gaming",
    githubUrl: "https://github.com/Manas-Aher/Valorant",
    liveDemoUrl: "https://valorant-manas.netlify.app/",
    keypoints: [
      'Gained hands-on experience with Next.js page routing and SSR concepts',
      'Built responsive layouts and components using Tailwind CSS',
      'Integrated smooth scroll animations using GSAP and ScrollTrigger',
      'Learned to manage project structure and component composition effectively',
      'Used utility libraries like clsx for conditional styling'
    ],
    buildWith: ['NextJS', 'Tailwind CSS', 'GSAP', 'ScrollTrigger', 'clsx'],
  },
  {
    description: "Suburbia Skate is a modern, skate culture-inspired e-commerce web experience built to showcase custom skateboards. Featuring bold visuals, responsive layouts, and interactive product sections like board customizer and team profiles, the site blends lifestyle branding with a smooth shopping experience while demonstrating solid frontend design and UI development.",
    imgPath: "/images/suburbia-view.png",
    logoPath: "/images/suburbia-logo.svg",
    title: "Suburbia Skate",
    githubUrl: "https://github.com/Manas-Aher/suburbia",
    liveDemoUrl: "https://suburbia-manas.netlify.app/",
    keypoints: [
      'Built fully responsive layouts and reusable components using Tailwind CSS',
      'Implemented interactive UI elements including a skateboard customizer',
      'Added smooth animations and transitions to enhance user engagement',
      'Enhanced user experience with smooth hover effects and micro-interactions',
      'Focused on clean visual hierarchy and intuitive navigation for better UX '
    ],
    buildWith: ['NextJS', 'Tailwind', 'R3F', 'GSAP', 'Prismic', 'R3D', 'ThreeJS'],
  },
  {
    description: "Fizzi is a vibrant brand experience website for a bold, gut-friendly soda concept. Featuring dynamic visuals, engaging product showcases, and smooth interactions, the site highlights five delicious flavors. Built with responsive layouts and modern frontend design principles, Fizzi demonstrates strong UI skills and immersive branding.",
    imgPath: "/images/Fizzi-view.png",
    logoPath: "/images/fizzi-logo.svg",
    title: "Fizzi. Live Gutsy.",
    githubUrl: "https://github.com/Manas-Aher/fizzi-manas",
    liveDemoUrl: "https://fizzi-manas.netlify.app/",
    keypoints: [
      'Built responsive, brand-focused layouts with Tailwind CSS and NextJS',
      'Created interactive scroll-triggered animations using GSAP for product highlights',
      'Added smooth animations and transitions to enhance user engagement',
      'Implemented motion transitions with Framer Motion for dynamic UI feedback',
      'Focused on clean visual hierarchy and intuitive navigation for better UX '
    ],
    buildWith: ['NextJS', 'Framer-Motion', 'R3F', 'GSAP', 'Prismic', 'R3D', 'ThreeJS'],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};