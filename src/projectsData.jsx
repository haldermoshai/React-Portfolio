import { HomeOutlined, InfoOutlined, PsychologyOutlined, EmailOutlined } from '@mui/icons-material';


// NavItems data for Navbar
  export const navItems = [
    { text: 'Home', icon: <HomeOutlined /> },
    { text: 'About', icon: <InfoOutlined /> },
    { text: 'Skills & Projects', icon: <PsychologyOutlined /> },
    { text: 'Contact', icon: <EmailOutlined /> }
  ];
  

  // Skills data for the cards
  export const frontendSkills = [
    { name: 'HTML', image: 'html.jpeg' },
    { name: 'CSS', image: 'css.jpeg' },
    { name: 'JavaScript', image: 'Js.jpeg' },
    { name: 'React JS', image: 'react.jpeg' },
    { name: 'Material UI', image: 'mui.jpeg' }
  ];

  export const backendSkills = [
    { name: 'Node JS', image: 'node.jpeg' },
    { name: 'Express JS', image: 'express.jpeg' },
    { name: 'MongoDB', image: 'mongo.jpeg' },
    { name: 'Python', image: 'python.jpeg' },
    { name: 'My SQL', image: 'mysql.jpeg' }
  ];
  

  // Projects data for the cards
  export const projects = [
    {
      serialNo: 'Project 1',
      img: '/calculator.jpg',
      title: 'Simple Calculator',
      description: 'This is a simple web-based calculator project made using HTML, CSS, and JavaScript, allowing users to perform basic arithmetic operations with ease.',
      detailDescription: 'I made this Basic Calculator project which is a simple web application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division etc. The calculator has a user-friendly interface with buttons for digits and operators, as well as a display screen to show the input and output. Users can input numbers and perform calculations by clicking on the buttons or using their keyboard. The project demonstrates fundamental concepts of web development and JavaScript programming, making it an ideal addition to my portfolio for showcasing my skills in front-end development and JavaScript programming.',
      githublink: 'https://github.com/haldermoshai/calculatorJS/tree/main/docs',
    },
    {
      serialNo: 'Project 2',
      img: '/rpg.jpg',
      title: 'Password Generator',
      description: 'A minimalist web application crafted with HTML, CSS, and JavaScript to generate random passwords effortlessly.',
      detailDescription: 'I made this Random Password Generator which is a JavaScript project based on dom designed to generate secure and unique passwords for users. The application allows users to specify the length of the password and choose from various options such as including uppercase letters, lowercase letters, numbers, and special characters. Upon clicking the "Generate" button, the application dynamically creates a password meeting the specified criteria and displays it to the user. Additionally, users have the option to copy the generated password to their clipboard for easy use. This project showcases fundamental JavaScript skills including DOM manipulation, event handling, and generating random values. It serves as a practical tool for enhancing online security by creating strong passwords.',
      githublink: 'https://github.com/haldermoshai/Random-Password-Generator-Advanced-js-/tree/main/docs',
    },
    {
      serialNo: 'Project 3',
      img: '/rps.jpg',
      title: 'Rock Paper Scissor',
      description: 'An interactive web-based game created using HTML, CSS, and JavaScript, allowing users to play the classic Rock Paper Scissors game against the computer.',
      detailDescription: 'The Rock Paper Scissors Game is a fun and interactive JavaScript project where users can play the classic game against the computer. This project features a user-friendly interface where players can click on their chosen option (rock, paper, or scissors), and the computer randomly selects its choice. The game then determines the winner based on the rules of Rock Paper Scissors and displays the result to the user. Through this project, I have demonstrated proficiency in JavaScript programming, including handling user interactions, implementing game logic, and generating random outcomes. It is a nostalgic and entertaining addition to any portfolio, showcasing both coding skills and creativity.',
      githublink: 'https://github.com/haldermoshai/Rock-Paper-Scissors/tree/main/docs',
    },
    {
      serialNo: 'Project 4',
      img: '/mysite.jpg',
      title: 'My Website',
      description: 'A visually stunning website created with React to showcase my photography skills, featuring an elegant design and smooth user experience.',
      detailDescription: 'My React-based Photography Portfolio and Store is a dynamic website showcasing my photography skills and offering prints and frames for purchase. It features visually appealing galleries, organized by themes, with options for users to browse, view details, and buy directly. The site incorporates a shopping cart and checkout system for a seamless buying experience, with responsive design ensuring compatibility across devices. Through this project, I demonstrate proficiency in React development, state management, routing, and e-commerce integration, serving as both a portfolio and a sales platform for my photography. Currently I am working on this project. So it is not completed yet. Although I have provided a carousel here where I have showcased some of my works.',
      githublink: 'https://github.com/haldermoshai/Mysite-Project/tree/main/frontend',
    },
  ];

  
  // Carousel data for the image carousel
  export const data = [
    { src: "image1.jpg", alt: "image1" },
    { src: "image2.jpg", alt: "image2" },
    { src: "image3.jpg", alt: "image3" },
    { src: "image5.jpg", alt: "image5" },
    { src: "image6.jpg", alt: "image6" },
    { src: "image7.jpg", alt: "image7" },
    { src: "image8.jpg", alt: "image8" },
    { src: "image9.jpg", alt: "image9" }
  ];