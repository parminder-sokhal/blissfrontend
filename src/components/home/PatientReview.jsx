import React, { useEffect } from "react";

const PatientReview = () => {
  useEffect(() => {
    const scriptId = "elfsight-widget";
    
    // Load the Elfsight script only once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }

    // Block link redirections inside the widget
    const blockRedirects = setInterval(() => {
      const widget = document.querySelector(".elfsight-app-8cd96e7b-be6c-4bc0-a915-c1185cd7217d");
      if (widget) {
        const links = widget.querySelectorAll("a");
        links.forEach((a) => {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
          });
        });
        clearInterval(blockRedirects);
      }
    }, 1000); // Keep checking every 1 second until widget loads

  }, []);

  return (
    <div className="bg-cover bg-blend-soft-light bg-[url(/images/bgour.jpg)] py-20 px-4 lg:px-20">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">Our Google Reviews</h2>
        {/* <h3 className="text-2xl text-black">What People Say About Us</h3> */}
      </div>

      {/* Elfsight Widget */}
      <div className="flex justify-center">
        <div
          className="elfsight-app-8cd96e7b-be6c-4bc0-a915-c1185cd7217d"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default PatientReview;