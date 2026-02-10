import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTools,
  faGlobe,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import NoPaperFormWidget from "./NoPaperFormWidget";

export default function AboutSection() {

    const [openApply, setOpenApply] = useState(false);
  
  return (
    <section className="bg-gray-50 text-gray-800 py-5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50 to-indigo-50 shadow-lg">

            <h4 className="section-heading text-sm">About Sandip University</h4>

            {/* Decorative Dots */}
            <div className=" flex items-center gap-3">
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-teal-500"></span>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                A Global Hub of Innovation & Technology
              </p>
            </div>

            <p className="mt-3 text-gray-600 leading-relaxed text-sm">
School of Design at Sandip University, Nashik, is a state-of-the-art design institute offering
undergraduate, postgraduate, and PhD courses. The school has world-class infrastructure,
exceptional facilities, and resources such as a weaving studio, dyeing and printing studio,
graphic studio, wood workshop, and more. Students also receive hands-on practical
experience through its well-rounded curriculum in Fashion and Lifestyle Design,
Communication Design, Product Design, Space and Interior Design, Beauty Cosmetology
and more.
The Bachelor of Design (B.DES) and B.SC and M.SC programs help students understand
design in real-world settings while boosting their creativity and technical skills.
            </p>

            <ul className="mt-4 space-y-4 text-gray-700">
            

              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-white shadow rounded-md">
                  <FontAwesomeIcon icon={faTools} className="text-indigo-600 text-lg" />
                </span>
                <span>State-of-the-art labs & expert-led workshops.</span>
              </li>

              <li className="flex gap-3">
                <span className="flex items-center justify-center w-7 h-7 bg-white shadow rounded-md">
                  <FontAwesomeIcon icon={faGlobe} className="text-indigo-600 text-lg" />
                </span>
                <span>
                  Cross-disciplinary learning for global & local impact.
                </span>
              </li>
            </ul>

            {/* BUTTONS */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4">

              <a href="#Course" className="px-5 py-1 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white font-semibold shadow hover:scale-[1.02] transition flex items-center justify-center gap-2">
                Explore Programs
                <FontAwesomeIcon icon={faArrowRight} />
              </a>

              <button
               onClick={() => setOpenApply(true)}
              className="px-4 py-3 rounded-lg border border-gray-300 text-sm hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Request Brochure
                <FontAwesomeIcon icon={faArrowRight} />
              </button>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">

            <img
              src="herosection/clgimage.webp"
              alt="students crafting"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[555px] object-cover"
            />

            {/* Footer Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 
                            bg-gradient-to-t from-black/50 to-transparent text-white">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

                {/* <div>
                  <p className="text-sm uppercase tracking-wide">
                    Workshop: Textile Embroidery
                  </p>
                  <p className="text-xs opacity-80">
                    Mentor-led Studio Session · Pune Campus
                  </p>
                </div>

                <button className="px-3 py-2 bg-white/20 rounded hover:bg-white/30 transition text-sm flex items-center gap-2 w-fit">
                  View Gallery
                  <FontAwesomeIcon icon={faArrowRight} />
                </button> */}

              </div>
            </div>
          </div>
        </div>
 {/* APPLY POPUP */}
      {openApply && (
        <div style={overlay}>
          <div style={modal}>
            <button onClick={() => setOpenApply(false)} style={closeBtn}>
              ✖
            </button>
             <h2 className="text-xl font-semibold text-black text-center mb-4">Enquire Now</h2>
            <NoPaperFormWidget />
          </div>
        </div>
      )}

      </div>
    </section>
  );
}
/* ---------- MODAL STYLES ---------- */

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modal = {
  background: "#fff",
  padding: "20px",
  width: "90%",
  maxWidth: "600px",
  borderRadius: "10px",
  position: "relative",
};

const closeBtn = {
  position: "absolute",
  top: "10px",
  right: "12px",
  cursor: "pointer",
  fontSize: "18px",
};
