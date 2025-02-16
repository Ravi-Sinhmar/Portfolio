import { FaTwitter, FaGithub, FaLinkedin, FaTrophy, FaCode } from "react-icons/fa"

function SkillTag({ skill }) {
  return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs inline-block m-1">{skill}</span>
}

function AboutSummary() {
  const skills = [
    "React.js",
    "Redux",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Rest APIs",
    "Passport",
    "Next.js",
    "MongoDB",
    "AWS",
    "SQL",
    "C++",
    "WebSockets",
    "WebRTC",
    "OAuth",
    "Facebook OAuth",
    "Insta OAuth",
    "Linkedin OAuth",
    "Google/Email OAuth",
    "Hosting",
    "Gemini , OpenAi Apis"
  ]

  const projects = [
    { name: "BuddyUp", description: "Social Networking Site" },
    { name: "Live Face", description: "Video Call Site" },
    { name: "Social & Leads", description: "Social Media Automation" },
    { name: "YouTube Clone", description: "Video Upload & Interaction" },
  ]

  const achievements = [
    { title: "3rd Rank", description: "Business Plan Competition, VIT-AP University University, Andhra Pradesh"
, prize: "₹25,000" },
    { title: "3rd Rank", description: "Hackathon, CGC Landran", prize: "₹20,000" },
  ]

  return (
    <header className="bg-gray-100 py-6 px-4 rounded-2xl">
      <div className="max-w-4xl mx-auto">
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
            <p className="text-xs text-gray-600 mb-2">Intern at Viseatech Pvt. Ltd.</p>

            {/* Achievements */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-800 flex items-center mb-1">
                <FaTrophy className="mr-1 text-indigo-600" size={14} /> Achievements
              </h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-xs mb-1">
                  <span className="font-medium">{achievement.title}</span> - {achievement.description}
                  <br />
                  <span className="text-indigo-600">Prize: {achievement.prize}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <a
                href="https://x.com/BloodyFounder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaTwitter size={18} />
              </a>
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
                  <div key={index} className="bg-gray-100 p-2 rounded-md">
                    <h4 className="text-xs font-medium text-indigo-600">{project.name}</h4>
                    <p className="text-xs text-gray-600">{project.description}</p>
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

