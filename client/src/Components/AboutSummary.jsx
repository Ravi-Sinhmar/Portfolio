import { FaTwitter, FaGithub, FaLinkedin, FaTrophy, FaCode,FaExternalLinkAlt } from "react-icons/fa"



function SkillTag({ skill }) {
  return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs inline-block m-1">{skill}</span>
}

function AboutSummary() {
  const skills = [
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Recoil",
    "MongoDB",
    "Node.js",
    "AWS ( EC2 , S3 )",
    "WebSockets",
    "WebRTC",
    "OAuth",
    "Facebook OAuth",
    "Insta OAuth",
    "Linkedin OAuth",
    "Google/Email OAuth",
    "Hosting",
    "Gemini , OpenAi Apis",
    "TypeScript",
    "Rest APIs",
    "JWT",
    "Passport",
    "SQL",
    "C++",
    "DSA"
  ]

  const projects = [
    { name: "BuddyUp", description: "Social Networking and Chat Application" , link : "https://msg-io.onrender.com", github :"https://github.com/Ravi-Sinhmar/BuddyUp" },
    { name: "FaceSync", description: "Video Call Site",link :"https://video-call-application-mauve.vercel.app" ,  github : "https://github.com/Ravi-Sinhmar/Video-Call-Application"},
    { name: "EmailPro", description: "AI Powered Email Manager, Writer, Sender",link : "https://email-pro-ai-powered.vercel.app", github : "https://github.com/Ravi-Sinhmar/EmailPro" },

  ]

  const achievements = [
    { title: "3rd Rank", description: "Hackathon, VIT-AP University, Andhra Pradesh"
, prize: "₹25,000" },
    { title: "3rd Rank", description: "Hackathon, CGC Landran", prize: "₹20,000" },
    { title: "1st Rank", description: "Idea Competition, GJUS&T Hisar" },
  ]

  return (
    <header className="bg-gray-100 py-6 px-4 rounded-2xl">
      <div className="lg:px-14 sm:px-4 px-2 mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column - Personal Info */}
          <div className="md:w-1/3">
            <img
              className="w-24 h-24 rounded-full mb-2 border-2 border-white shadow-md"
              src="/img/profile.jpg"
              alt="Ravi Sinhmar"
            />
            <h1 className="text-xl font-bold text-gray-900">Ravi Sinhmar</h1>
            <h2 className="text-sm text-gray-600 mb-1">Software Developer</h2>
            <p className="text-xs text-gray-600 mb-2">Intern at Ruhil Future Technologies</p>

            {/* Achievements */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center mb-1">
                <FaTrophy className="mr-1 text-indigo-600" size={14} /> Achievements
              </h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-xs mb-1">
                  <span className="font-medium">{achievement.title}</span> - {achievement.description}
                  <br />
                  {achievement.prize && <span className="text-indigo-600">Prize: {achievement.prize}</span> }
                 
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">

              <a
                href="https://github.com/Ravi-Sinhmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-sinhmar-b66124256/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Right Column - Skills and Projects */}
          <div className="md:w-2/3">
            {/* Skills */}
            <div className="bg-white p-3 rounded-lg shadow-sm mb-3">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center mb-2">
                <FaCode className="mr-1 text-indigo-600" size={14} /> Development Skills
              </h3>
              <div className="flex flex-wrap -m-1">
                {skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center mb-2">
                <FaCode className="mr-1 text-indigo-600" size={14} /> Projects
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-100 p-2 rounded-md  flex justify-between items-center">
                   <div>
                   <h4 className="text-xs font-medium text-indigo-600">{project.name}</h4>
                   <p className="text-xs text-gray-600">{project.description}</p>
                   </div>
                  <div className="flex justify-center gap-2 items-center">
                  <a href={project.link}><FaExternalLinkAlt className="text-indigo-500 hover:text-xl"/></a>
                  <a href={project.github}><FaGithub className="text-indigo-500 hover:text-xl"/></a>
                  </div>
                   
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AboutSummary;

