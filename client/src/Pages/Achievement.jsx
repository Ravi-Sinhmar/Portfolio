
import Overview from "../Components/Overview";

const achievements = [
  {
    id: 1,
    title: "Idea Manthan",
    institution: "Chandigarh Groups of Colleges",
    location: "Landran, Punjab",
    description:
      "Built a hardware device with a fingerprint sensor and real-time location tracking for women's safety. Out of 50 teams, only 3 received incubation and prizes. We secured 3rd position with a prize of Rs: 20,000/-.",
    image: "./img/ChandigarhHackathon.png",
    certificateLink:
      "https://drive.google.com/file/d/1cUaE7KA2AR_rJBQtOocFpdHH5ZC37o55/view",
  },
  {
    id: 2,
    title: "Annual Business Plan",
    institution: "VIT-AP University",
    location: "Amaravati, Andhra Pradesh",
    description:
      "An online competition where we presented our startup idea, roadmap, finance handling, and execution plans. Out of 67 teams, the top 5 were selected, and we secured 3rd place with a prize of Rs: 25,000/-.",
    image: "./img/VitHackathon.png",
    certificateLink:
      "https://drive.google.com/file/d/11vm8UFfnoWqmyt1uR0c82_ZZH0AVp3gc/view?usp=sharing",
  },
  {
    id: 3,
    title: "Talash",
    institution: "Guru Jambheswar University",
    location: "Hisar, Haryana",
    description:
      "Presented a startup idea in a university event and secured 1st position.",
    image: "./img/Talash.png",
    certificateLink:
      "https://www.instagram.com/p/CZHTYFtBeWV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];
const AchievementCard = ({ title, institution, location, description, image, certificateLink }) => (
  <div className="ring-1 ring-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <img className="rounded-t-md w-full" src={image} alt={title} />
    <div className="p-3 relative">
      <a
        href={certificateLink}
        className="absolute right-2 top-2 text-xs font-semibold px-2 py-1 text-black ring-1 ring-black rounded-full shadow-md hover:translate-x-1 transition-transform duration-300 flex items-center gap-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
        <img className="w-4 h-4" src="./img/view.png" alt="View" />
      </a>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-md text-gray-700">{institution}</p>
      <h4 className="text-md text-gray-700">{location}</h4>
    </div>
    <div className="bg-gray-200 px-3 py-2">
      <p>{description}</p>
    </div>
  </div>
);

function Achivements() {
    return (
        <div className="space-y-5">
<Overview
        type="achievements"
        title="Achievements"
        description="A showcase of my recognition in technology and innovation."
        stats={[
          { label: "Hackathons", value: "2" },
          { label: "Prize Money", value: "₹45k" },
          { label: "Competition", value: "1" },
        ]}
      />
                <section className="bg-gray-100 rounded-xl min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 mt-5 gap-4 lg:grid-cols-2">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} {...achievement} />
        ))}
      </div>
    </section>

      </div>
    )
}

export default Achivements;