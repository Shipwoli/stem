import { useState } from "react";
import emailjs from 'emailjs-com';
import "bootstrap/dist/css/bootstrap.min.css";

const Sign = () => {
  const [formData, setFormData] = useState({
    type: "parent",
    parentName: "",
    childName: "",
    childAge: "",
    email: "",
    phone: "",
    schoolName: "",
    contactPerson: "",
    designation: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let whatsappMessage = `Hello, I'm interested in the STEM program. Here are my details: %0A`;
    if (formData.type === "parent") {
      whatsappMessage += `👤 Parent Name: ${formData.parentName || "N/A"}%0A👦 Child Name: ${formData.childName || "N/A"}%0A🎂 Child Age: ${formData.childAge || "N/A"}%0A📧 Email: ${formData.email || "N/A"}%0A📞 Phone: ${formData.phone || "N/A"}`;
    } else {
      whatsappMessage += `🏫 School Name: ${formData.schoolName || "N/A"}%0A👨‍🏫 Contact Person: ${formData.contactPerson || "N/A"}%0A📌 Designation: ${formData.designation || "N/A"}%0A📧 Email: ${formData.email || "N/A"}%0A📞 Phone: ${formData.phone || "N/A"}%0A📝 Message: ${formData.message || "N/A"}`;
    }

    window.open(`https://wa.me/+254728128353?text=${whatsappMessage}`, "_blank");

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      { ...formData },
      "YOUR_PUBLIC_KEY"
    )
      .then(() => alert("Form submitted successfully!"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Join Our STEM Program</h2>

        <div className="btn-group w-100 mb-3">
          <button
            className={`btn ${formData.type === "parent" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFormData((prev) => ({ ...prev, type: "parent" }))}
          >
            Parent
          </button>
          <button
            className={`btn ${formData.type === "school" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFormData((prev) => ({ ...prev, type: "school" }))}
          >
            School
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {formData.type === "parent" ? (
            <>
              <div className="mb-3">
                <label className="form-label">Parent's Name</label>
                <input type="text" name="parentName" className="form-control" required value={formData.parentName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Child's Name</label>
                <input type="text" name="childName" className="form-control" required value={formData.childName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Child's Age</label>
                <input type="number" name="childAge" className="form-control" required value={formData.childAge} onChange={handleChange} />
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label className="form-label">School Name</label>
                <input type="text" name="schoolName" className="form-control" required value={formData.schoolName} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Person</label>
                <input type="text" name="contactPerson" className="form-control" required value={formData.contactPerson} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Designation</label>
                <input type="text" name="designation" className="form-control" required value={formData.designation} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} />
              </div>
            </>
          )}

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" name="phone" className="form-control" required value={formData.phone} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
