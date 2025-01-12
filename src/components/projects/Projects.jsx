import React from 'react'
import ProjectCard from './ProjectCard'
import SE1 from '../../assets/project ss/SE1.jpeg'
import SE2 from '../../assets/project ss/SE2.jpeg'
import SE3 from '../../assets/project ss/SE3.jpeg'
import SE4 from '../../assets/project ss/SE4.jpeg'
import SE5 from '../../assets/project ss/SE5.jpeg'
import SE6 from '../../assets/project ss/SE6.jpeg'
import SE7 from '../../assets/project ss/SE7.jpeg'
import SM1 from '../../assets/project ss/SM1.jpeg'
import SM2 from '../../assets/project ss/SM2.jpeg'
import SM3 from '../../assets/project ss/SM3.jpeg'
import TB1 from '../../assets/project ss/TB1.jpeg'
import TB2 from '../../assets/project ss/TB2.jpeg'
import TB3 from '../../assets/project ss/TB3.jpeg'
import TB4 from '../../assets/project ss/TB4.jpeg'
import TB5 from '../../assets/project ss/TB5.jpeg'
import TB6 from '../../assets/project ss/TB6.jpeg'
import TB7 from '../../assets/project ss/TB7.jpeg'
import Weather1 from '../../assets/project ss/Weather1.png'
import Weather2 from '../../assets/project ss/Weather2.png'
import AG1 from '../../assets/project ss/AG1.png'
import AG2 from '../../assets/project ss/AG2.png'
import NB1 from '../../assets/project ss/NB1.jpeg'
import NB2 from '../../assets/project ss/NB2.jpeg'
import NB3 from '../../assets/project ss/NB3.jpeg'
import C1 from '../../assets/project ss/C1.jpeg'
import C2 from '../../assets/project ss/C2.jpeg'
import C3 from '../../assets/project ss/C3.jpeg'
import C4 from '../../assets/project ss/C4.jpeg'
import C5 from '../../assets/project ss/C5.jpeg'
import C6 from '../../assets/project ss/C6.jpeg'
import C7 from '../../assets/project ss/C7.jpeg'
import C8 from '../../assets/project ss/C8.jpeg'
import C9 from '../../assets/project ss/C9.jpeg'

function Projects() {
  const projects = [
    {
      images: [SE1, SE2, SE3, SE4, SE5, SE6, SE7],
      title: "Smart Ecommerce (MERN Application)",
      description: "This is a ecommerce web app where users can buy filter and order products by creating accounts. They can also give ratings to products and manage their orders. It also contains an admin panel with dashboard to maintain the whole system.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Tailwind CSS | Material UI | React | Node | Express | MongoDB | Redux Toolkit | JWT Auth | Express Validator | Axios | RESTful API",
      live_url: "https://smart-ecommerce-2025.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Ecommerce",
    },
    {
      images: [SM1, SM2, SM3],
      title: "Outstagram (MERN Application)",
      description: "This is a social media web app where users can post, like, comment, share and many more with their accounts. They can also follow and unfollow others to manage their own newsfeeds.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Tailwind CSS | Material UI | React | Node | Express | MongoDB | Redux Toolkit | JWT Auth | Express Validator | Axios | RESTful API",
      live_url: "https://outstagram-socialmedia.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/socialmedia",
    },
    {
      images: [TB1, TB2, TB3, TB4, TB5, TB6, TB7],
      title: "ToolBox (React Application)",
      description: "This is such an web application where users can find out many useful things in one place like notepad, reminder, to-do list, alarm, weather, stopwatch, calculators etc. It has so many more features including some mind refreshing games and a user profile with dashboard.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React | React Router | Third Party APIs | local Storage",
      live_url: "https://tool-box-plus.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Fun-Project",
    },
    {
      images: [Weather1, Weather2],
      title: "AI Desktop Assistant (Desktop Application)",
      description: "An AI based system assistant software for pc where users can give voice command to control their system. It uses OpenAI api for text generation and has so many features.",
      tech_used: "Tech Used: Python | Packages including custom packages",
      live_url: "https://www.linkedin.com/posts/nazirulmobin_artificialintelligence-ai-techjourney-activity-7214629856246972417-rrRu?utm_source=share&utm_medium=member_desktop",
      source_code_url: "https://www.linkedin.com/posts/nazirulmobin_artificialintelligence-ai-techjourney-activity-7214629856246972417-rrRu?utm_source=share&utm_medium=member_desktop",
    },
    {
      images: [AG1, AG2],
      title: "Daily Weather (JS Application)",
      description: "This web application displays current weather, 24 hour forecast and 7 day forecast. It's built with HTML5, CSS3, and JavaScript, focusing on clean design, user-friendly features, and seamless integration with the API.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Weather API",
      live_url: "https://daily-weather-iota.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Daily-Weather",
    },
    {
      images: '',
      title: "Awesome Gaming Gallery 2024 (React Application)",
      description: "This is a react application which is an image gallery where users can set an image as a featured image, sort images by drag and drop and also can delete multiple images at a time.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js",
      live_url: "https://awesome-gallery-six.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Awesome-Gallery",
    },
    {
      images: [NB1, NB2, NB3],
      title: "NoteBook (React Application)",
      description: "This is a notebook web application with some awesome features. User can easily add, edit and remove their notes. Users will be able to review their notes in real-time.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js | React Router",
      live_url: "https://notebook-nine.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Notebook",
    },
    {
      images: [C1, C2, C3, C4, C5, C6, C7, C8, C9],
      title: "Collabify (React Application)",
      description: "This is a collaborative task management system. By using this app, users can create teams, assign tasks to the teams and join others to the teams. Every tasks have their priority, status and due date. Team members can change task status any time.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js | React Router",
      live_url: "https://collaborative-task-management-app-five.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Collaborative-Task-Management-App",
    },
    {
      image: "",
      title: "EazyCanteen (Full Stack Web Application)",
      description: "It was our university final year project. In this project, users can enjoy a seamless food ordering process. It incorporates a virtual points system, enabling cashless transactions. It featured with Centralized menu management and many more.",
      tech_used: "Tech Used: HTML5 | CSS3 | Bootstrap | JavaScript | jQuery | PHP | MySQL",
      live_url: "https://github.com/AntoAhamed/Canteen-Management",
      source_code_url: "https://github.com/AntoAhamed/Canteen-Management",
    },
    {
      image: "",
      title: "Restaurant Website",
      description: "Built a restaurant website to show all the things that the restaurant has.",
      tech_used: "Tech Used: HTML5 | CSS3 | Bootstrap",
      live_url: "https://antoahamed.github.io/Restaurant",
      source_code_url: "https://github.com/AntoAhamed/Restaurant",
    },
    {
      image: "",
      title: "InfoTech",
      description: "This is a blog website. This website contains the information about the tech world.",
      tech_used: "Tech Used: HTML5 | CSS3 | Bootstrap",
      live_url: "https://antoahamed.github.io/infoTech",
      source_code_url: "https://github.com/AntoAhamed/infoTech",
    },
    {
      image: "",
      title: "TextUtils",
      description: "This is a text converting website with some other features. I have learned many concepts of react function-based components by doing this project.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js | React Router",
      live_url: "https://text-utils-psi-black.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/TextUtils",
    },
    {
      image: "",
      title: "Guessing Game",
      description: "This is a guessing game. In this game you have to guess a number which was selected by the game before.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript",
      live_url: "https://antoahamed.github.io/Guessing_Game",
      source_code_url: "https://github.com/AntoAhamed/Guessing_Game",
    },
  ]

  return (
    <div className="border rounded-lg bg-white p-5">
      <p className="text-xl font-bold mb-3 border-b pb-3">Projects</p>
      <div className='grid grid-cols-1 gap-4'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
