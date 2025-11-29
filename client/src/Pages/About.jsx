
import Header from "../Components/AboutSummary";
import Projects from "./Projects";

function Home() {
    return(
        <>
        <Header />
        <section id="about-section" className="bg-white">
      {/* Experience Section */}
      <div id="st" className="space-y-10">
        <div className="">
          <div className="px-1 py-2">
            <h3 className="text-lg text-gray-700">Experience</h3>
          </div>
          <div className="flex">
            <div id="left" className="top-2 relative items-center justify-center">
              <div className="z-10 w-3 h-3 bg-gray-700 rounded-full"></div>
              <div className="relative left-1 z-0 ms-[1px] h-16 w-0 border"></div>
              <div className="z-10 w-3 h-3 bg-gray-500 rounded-full"></div>
              <div className="relative left-1 z-0 ms-[1px] h-8 w-0 border"></div>
            </div>

            <div id="right" className="px-6">
                <div className="">
                <span className="text-lg text-gray-900">Software Developer</span>
                <span className="px-3 ml-1 py-1  text-sm text-gray-500 rounded-md">
                  May-2025 - Nov-2025
                </span>
                <br />
                <span className="text-sm text-gray-500">@Lucres, Bengaluru</span>
              </div>
              <div className="">
                <span className="text-lg text-gray-900">Software Developer</span>
                <span className="px-3 ml-1 py-1  text-sm text-gray-500 rounded-md">
                  Mar-2025 - May-2025
                </span>
                <br />
                <span className="text-sm text-gray-500">@Ruhil Future Technologies, Jhajjar</span>
              </div>
              <div className="pt-6">
                <span className="text-lg text-gray-900">Full Stack Developer (Intern)</span>
                <span className="px-3 ml-1 py-1  text-sm text-gray-500 rounded-md">
                  Nov-2024 - Mar-2025
                </span>
                <br />
                <span className="text-sm text-gray-500">@Viseatech, Bhiwani</span>
              </div>
            

            </div>
          </div>
        </div>

        {/* Projects Section */}
        <Projects />
      </div> 
    </section>
        </>
    )
}

export default Home;