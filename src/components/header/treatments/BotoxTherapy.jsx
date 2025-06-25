import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const data = {
  bgImage: "/img/BotoxTherapy.jpeg", // Replace with your actual image path if different
  sidebarLinks: [
    { title: "Stroke Management", link: "/StrokeManagement" },
    { title: "Anti-Epileptic Drugs", link: "/AntiEpilepticDrugs" },
    { title: "Multiple Sclerosis Management", link: "/MultipleSclerosis" },
    { title: "Migraine And Chronic Headache Management", link: "/MigraineChronicHeadache" },
    { title: "Parkinson’s disease treatment", link: "/ParkinsonDisease" },
    { title: "Neuropathy And Myopathy Treatment", link: "/NeuropathyAndMyopathy" },
    { title: "Neuroimaging", link: "/Neuroimaging" },
    { title: "Lumbar Puncture", link: "/LumbarPuncture" },
    { title: "Botox Therapy for Neurological Disorders", link: "/BotoxTherapy" },
  ],
};

const BotoxTherapy = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <div
        className="w-full mt-34 h-120 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="px-10 lg:px-40 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Botox Therapy for Neurological Disorders
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* ✅ Main Content */}
          <div className="lg:w-3/4 space-y-6 text-gray-700">
            <p>
              Botox, short for <strong>Botulinum Toxin</strong>, is widely known for its cosmetic use, but it is also a powerful and effective medical treatment for various <strong>neurological conditions</strong>. When used in neurology, Botox helps manage symptoms caused by <strong>overactive nerves or muscles</strong> by blocking the release of certain chemicals that trigger muscle contractions or pain signals.
            </p>

            <h2 className="text-xl font-semibold">How Does Botox Work?</h2>
            <p>
              In neurological disorders, abnormal nerve activity can cause involuntary muscle movements, stiffness, tremors, or chronic pain. Botox is injected directly into the affected muscles or areas. It <strong>blocks the communication between nerves and muscles</strong>, reducing unwanted movements, spasms, or tension—offering relief that can last for 3 to 4 months.
            </p>

            <h2 className="text-xl font-semibold">Neurological Conditions Treated with Botox</h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cervical Dystonia:</strong> A painful condition where neck muscles contract uncontrollably, causing twisting of the head. Botox reduces these spasms and improves posture.
              </li>
              <li>
                <strong>Chronic Migraine:</strong> Botox can help patients who suffer from <em>15 or more headache days per month</em>. It’s injected around the head and neck to prevent migraines before they start.
              </li>
              <li>
                <strong>Spasticity:</strong> Muscle stiffness or tightness, often after a stroke, spinal cord injury, or in conditions like <em>multiple sclerosis</em> or <em>cerebral palsy</em>. Botox helps relax these muscles, improving mobility and comfort.
              </li>
              <li>
                <strong>Blepharospasm:</strong> Uncontrollable blinking or eyelid spasms can be disruptive. Botox helps by relaxing the eye muscles and allowing normal blinking.
              </li>
              <li>
                <strong>Hemifacial Spasm & Oromandibular Dystonia:</strong> Involuntary twitching or tightness of facial or jaw muscles can be treated effectively with targeted Botox injections.
              </li>
            </ul>

            <h2 className="text-xl font-semibold">What to Expect During Treatment</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>The procedure is quick, usually taking <strong>15–30 minutes</strong>.</li>
              <li>Injections are given in a <strong>clinical setting</strong>, with little to no recovery time.</li>
              <li>Results begin within a few days, with full effects seen in about <strong>1–2 weeks</strong>.</li>
              <li>Relief typically lasts for <strong>3 to 4 months</strong>, after which repeat treatment may be needed.</li>
            </ul>

            <h2 className="text-xl font-semibold">Is Botox Safe?</h2>
            <p>
              Yes. When administered by an experienced neurologist or trained specialist, Botox is considered <strong>safe and well-tolerated</strong>. Side effects are usually mild and temporary, such as slight pain at the injection site, mild muscle weakness, or fatigue.
            </p>

            <h2 className="text-xl font-semibold">Want to Know if Botox Therapy is Right for You?</h2>
            <p>
              Every patient is different. If you’re living with a neurological disorder that affects your movement or causes chronic pain, <strong>Botox may help you regain control and improve your quality of life</strong>. <strong>Contact our clinic today</strong> to schedule a consultation with a neurologist.
            </p>
          </div>

          {/* ✅ Sidebar */}
          <div className="lg:w-1/4 h-1/3 bg-gray-100 py-10 rounded-md shadow px-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Neurology
            </h2>
            <ul className="space-y-4">
              {data.sidebarLinks.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-pink-600 hover:text-pink-800 cursor-pointer"
                >
                  <FaAngleRight className="mr-2" />
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotoxTherapy;