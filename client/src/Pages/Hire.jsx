import React , { useState} from "react";

import Overview from "../Components/Overview";
function Achivements() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    jobDescription: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    fetch('http://localhost:5000/mail', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body : JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => {
      console.log("Data", data);
      if (data.success) {
        alert("Successfully Sent Email");
      }
    }).catch((err) => {
      if(err){
        window.location.href = '/404'

      }
    })
    setFormData({
      name: "",
      email: "",
      role: "",
      jobDescription: "",
      link: "",
    });
  };




    return (
        <div className="space-y-5">

      <Overview
        type="hire"
        title="Hire Me"
        description="Passionate developer ready to bring ideas to life."
        stats={[
          { label: "Experience", value: "2+ yrs" },
          { label: "Projects", value: "4" },
          { label: "Tech Stack", value: "15+" },
        ]}
      />
              <section className="bg-gray-100 rounded-xl min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      {/* Form Section */}
      <div className="bg-white ring-1 ring-black py-4 rounded-md xl:px-6">
        <div className="container px-4 space-y-5">
          <h2 className="text-xl font-bold text-center mb-6">Let's Work Together</h2>

          <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4 font-normal">
            {/* Name Input */}
            <div className="w-full px-4 mb-4">
              <label className="text-gray-700 text-sm block mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Company Name / Your Name"
                required
                className="w-full text-sm px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Email Input */}
            <div className="w-full px-4 mb-4">
              <label className="text-gray-700 text-sm block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Company/Personal Email"
                required
                className="w-full text-sm px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Role Input */}
            <div className="w-full px-4 mb-4">
              <label className="text-gray-700 text-sm block mb-2">My Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Position/Role you are hiring for"
                className="w-full text-sm px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Job Description Input */}
            <div className="w-full px-4 mb-4">
              <label className="text-gray-700 text-sm block mb-2">Job Description</label>
              <textarea
                rows="4"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                placeholder="Describe the job or opportunity"
                required
                className="w-full text-sm px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              ></textarea>
            </div>

            {/* Website Link Input */}
            <div className="w-full px-4 mb-4">
              <label className="text-gray-700 text-sm block mb-2">Website Link (If not, Leave)</label>
              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="Paste Link"
                className="w-full text-sm px-2 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full px-4 mb-4 flex items-center justify-end">
              <button
                type="submit"
                className="text-white bg-black focus:ring-4 focus:outline-none shadow-md shadow-black font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

       </div>
    )
}

export default Achivements;