import React from "react";

const Pediatrics = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('/img/Pediatrics.jpg')` }} // Replace with your pediatric-related image
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Pediatrics Treatment & Care</h1>

        <div className="text-gray-700 space-y-6">
          <p>
            At The Bliss Hospital, we understand that children need special care that goes beyond medicine. Our dedicated Pediatrics Department offers comprehensive healthcare services for infants, children, and adolescents — ensuring they grow up healthy and strong.
          </p>

          <h2 className="text-2xl font-semibold mt-4">👶 Our Pediatric Services Include:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Newborn Care & Vaccinations:</strong> Complete immunization schedules and wellness check-ups to safeguard your child’s future health.
            </li>
            <li>
              <strong>General Pediatric Consultations:</strong> Treatment for common childhood illnesses such as fever, cough, cold, diarrhea, and infections.
            </li>
            <li>
              <strong>Growth & Development Monitoring:</strong> Regular check-ups to track physical and mental milestones, ensuring your child’s healthy growth.
            </li>
            <li>
              <strong>Nutrition & Diet Counseling:</strong> Guidance on healthy eating habits to boost immunity and prevent childhood obesity.
            </li>
            <li>
              <strong>Management of Chronic Conditions:</strong> Expert care for asthma, allergies, diabetes, and other long-term health concerns in children.
            </li>
            <li>
              <strong>Emergency Pediatric Care:</strong> 24x7 support for urgent conditions like high fever, dehydration, or breathing difficulties.
            </li>
            <li>
              <strong>Specialized Care (NICU & PICU):</strong> Equipped with advanced facilities for premature babies and critically ill children.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-4">🌸 Why Choose Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Experienced pediatricians with compassionate care</li>
            <li>Child-friendly environment to make hospital visits stress-free</li>
            <li>Modern diagnostic facilities and child-safe treatments</li>
            <li>Dedicated NICU & PICU with advanced life-support systems</li>
          </ul>

          <p>
            Your child’s health is our top priority. At The Bliss Hospital, we walk with you at every step of your child’s growth — from newborn to adolescence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pediatrics;