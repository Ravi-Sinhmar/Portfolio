import ProjectCard from "./../Components/ProjectCard";
import Overview from "../Components/Overview";

function Projects() {

  const projects = [
    {
      title: "BuddyUp",
      description: "A social networking application with real-time chat feature.",
      imageSrc: "img/BuddyUp.png",
      features: [
        "User account creation and authentication",
        "Profile viewing and editing",
        "Post creation and deletion",
        "Friend request system",
        "Real-time chat",
        "Online/offline indicator",
        "User blocking/unblocking",
        "Account deletion",
      ],
      techStack: ["HTML", "Tailwind CSS", "JavaScript", "EJS", "Node.js", "Express.js", "Websockets", "MongoDB"],
      githubLink: "https://github.com/Ravi-Sinhmar/BuddyUp", // Replace with actual GitHub link
      liveLink: "https://msg-io.onrender.com", // Replace with actual live demo link
      screenshots: 15, // Assuming you have 16 screenshots for this project
    },

    {
      title: "FaceSync",
      description: "Real time video Call Application",
      imageSrc: "./img/FaceSync.png",
      features: [
        "Enter name , Generate Link",
        "Choose Mic, Camera, Speaker Settings",
        "Copy Link in clipboard",
        "Another user can join through the  link",
        "Video on/off , Mic on/off, Speaker on/off",
        "Disconnect Call",
        "Full Controll on both side",
      ],
      techStack: ["React.js","Recoil", "Tailwind CSS", "WebSockets", "WebRtc (Video Communication )", "Node.js", "Express.js","MongoDB"],
      githubLink: "https://github.com/Ravi-Sinhmar/Video-Call-Application", // Replace with actual GitHub link
      liveLink: "https://video-call-application-mauve.vercel.app", // Replace with actual live demo link
      screenshots: 7, // Assuming you have 16 screenshots for this project
    },
    
    // Add more projects here...
  ]



    return(
       <div className="space-y-5">
     <Overview
        type="projects"
        title="Projects"
        description="Explore my portfolio of innovative software solutions."
        stats={[
          { label: "Total", value: "3" },
          { label: "Technologies", value: "12+" },
          { label: "Code Lines", value: "7k+" },
        ]}
      />
        <div className="bg-gray-100 rounded-xl min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">My Projects</h2>
        <div className="space-y-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
        </div>
    )
}

export default Projects;