import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const projects = [
    {
      image: "",
      title: "Smart Ecommerce (MERN Application)",
      description: "This is a ecommerce web app where users can buy filter and order products by creating accounts. They can also give ratings to products and manage their orders. It also contains an admin panel with dashboard to maintain the whole system.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Tailwind CSS | Material UI | React | Node | Express | MongoDB | Redux Toolkit | JWT Auth | Express Validator | Axios | RESTful API",
      live_url: "https://smart-ecommerce-2025.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Ecommerce",
    },
    {
      image: "",
      title: "Outstagram (MERN Application)",
      description: "This is a social media web app where users can post, like, comment, share and many more with their accounts. They can also follow and unfollow others to manage their own newsfeeds.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Tailwind CSS | Material UI | React | Node | Express | MongoDB | Redux Toolkit | JWT Auth | Express Validator | Axios | RESTful API",
      live_url: "https://outstagram-socialmedia.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/socialmedia",
    },
    {
      image: "",
      title: "ToolBox (React Application)",
      description: "This is such an web application where users can find out many useful things in one place like notepad, reminder, to-do list, alarm, weather, stopwatch, calculators etc. It has so many more features including some mind refreshing games and a user profile with dashboard.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React | React Router | Third Party APIs | local Storage",
      live_url: "https://tool-box-plus.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Fun-Project",
    },
    {
      image: "",
      title: "AI Desktop Assistant (Desktop Application)",
      description: "An AI based system assistant software for pc where users can give voice command to control their system. It uses OpenAI api for text generation and has so many features.",
      tech_used: "Tech Used: Python | Packages including custom packages",
      live_url: "https://www.linkedin.com/posts/nazirulmobin_artificialintelligence-ai-techjourney-activity-7214629856246972417-rrRu?utm_source=share&utm_medium=member_desktop",
      source_code_url: "https://www.linkedin.com/posts/nazirulmobin_artificialintelligence-ai-techjourney-activity-7214629856246972417-rrRu?utm_source=share&utm_medium=member_desktop",
    },
    {
      image: "",
      title: "Daily Weather (JS Application)",
      description: "This web application displays current weather, 24 hour forecast and 7 day forecast. It's built with HTML5, CSS3, and JavaScript, focusing on clean design, user-friendly features, and seamless integration with the API.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Weather API",
      live_url: "https://daily-weather-iota.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Daily-Weather",
    },
    {
      image: "",
      title: "Awesome Gaming Gallery 2024 (React Application)",
      description: "This is a react application which is an image gallery where users can set an image as a featured image, sort images by drag and drop and also can delete multiple images at a time.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js",
      live_url: "https://awesome-gallery-six.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Awesome-Gallery",
    },
    {
      image: "",
      title: "NoteBook (React Application)",
      description: "This is a notebook web application with some awesome features. User can easily add, edit and remove their notes. Users will be able to review their notes in real-time.",
      tech_used: "Tech Used: HTML5 | CSS3 | JavaScript | Bootstrap | React.js | React Router",
      live_url: "https://notebook-nine.vercel.app",
      source_code_url: "https://github.com/AntoAhamed/Notebook",
    },
    {
      image: "",
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
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
