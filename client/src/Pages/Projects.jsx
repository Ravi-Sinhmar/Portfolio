import ProjectCard from "./../Components/ProjectCard";
import Overview from "../Components/Overview";

function Projects() {

  const projects = [
    {
      title: "BuddyUp",
      description: "A social networking application with real-time features.",
      imageSrc: "./img/Buddy.png",
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
      githubLink: "#", // Replace with actual GitHub link
      liveLink: "#", // Replace with actual live demo link
      screenshots: 16, // Assuming you have 16 screenshots for this project
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
          { label: "Total", value: "4" },
          { label: "Technologies", value: "10+" },
          { label: "Code Lines", value: "10k+" },
        ]}
      />
        <div className="bg-gray-100 rounded-xl min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">My Projects</h2>
        <div className="">
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