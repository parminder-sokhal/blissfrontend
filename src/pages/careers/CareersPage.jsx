import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCareer } from "../../redux/actions/careersAction";

const CareersPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(
    (state) => state.career
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    contact: {
      email: "",
      phone: "",
    },
    resumeLink: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    const { name, position, resumeLink } = formData;
    const { email, phone } = formData.contact;

    if (!name.trim()) errors.name = "Name is required";
    if (!position.trim()) errors.position = "Position is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone must be 10 digits";
    }
    if (!resumeLink.trim()) errors.resumeLink = "Resume link is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email" || name === "phone") {
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(addCareer(formData));
    setSubmitted(true);

    setFormData({
      name: "",
      position: "",
      contact: { email: "", phone: "" },
      resumeLink: "",
    });
    setFormErrors({});
  };

  useEffect(() => {
    if (submitted && !loading && !error) {
      setShowSuccess(true);

      setFormData({
        name: "",
        position: "",
        contact: { email: "", phone: "" },
        resumeLink: "",
      });

      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSubmitted(false);
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [submitted, loading, error]);

  return (
    <>
      <div className="flex justify-center  w-full mt-34 sm:h-92 h-52 bg-cover bg-no-repeat bg-center bg-[url('/img/photo_6240115743811291761_y.jpg')]">
        <span className="flex justify-center items-center sm:text-8xl text-6xl font-semibold text-white">
          Careers
        </span>
      </div>

      
      <h1 className="sm:text-5xl text-4xl font-bold my-6 text-center">
        Apply for a Career at Bliss Hospital
      </h1>
      <div className="container mx-auto my-10 lg:px-30 max-w-2xl sm:px-14 md:px-18 px-10 ">
        {showSuccess && (
          <div className="text-green-600 mb-4 text-center font-semibold">
            🎉 You have successfully applied! We will contact you soon.
          </div>
        )}
        {error && (
          <div className="text-red-600 mb-4 text-center font-semibold">
            ❌ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Position </label>
            <input
              name="position"
              type="text"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Doctor, Nurse, etc."
            />
            {formErrors.position && (
              <p className="text-red-500 text-sm">{formErrors.position}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={formData.contact.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="example@domain.com"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.contact.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="10 digit phone number"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm">{formErrors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Resume Link</label>
            <label className="text-sm text-gray-700 mb-1">
              Please provide a public link to your resume (e.g., Google Drive,
              Dropbox).
            </label>
            <input
              name="resumeLink"
              type="url"
              value={formData.resumeLink}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="https://drive.google.com/..."
            />
            {formErrors.resumeLink && (
              <p className="text-red-500 text-sm">{formErrors.resumeLink}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CareersPage;
