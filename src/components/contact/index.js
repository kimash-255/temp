import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("🎉 Email sent successfully!");
        setFormData({}); // Clear form
      } else {
        toast.error("❌ Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("⚠️ An error occurred while sending the email.");
    }
  };

  return (
    <section>
      <ToastContainer />
      <section className="main-contact-page-in">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-detail-box">
                <h3 className="h3-title">
                  Thank you for choosing Mslabdesigns
                </h3>
                <p>
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>
                <ul>
                  <li>
                    <div className="contact-detail-icon">
                      <img
                        src="/assets/images/mslabdesigns-contact-mail.png"
                        alt="location"
                      />
                    </div>
                    <div className="contact-detail-content">
                      <p>Our Mailbox:</p>
                      <h3 className="contact-text">mslabdesigns@gmail.com</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="get-touch-box">
                <div className="get-touch-title">
                  <h2 className="h2-subtitle">Get In Touch</h2>
                  <h2 className="h2-title">Ready To Get Started</h2>
                </div>
                <div className="get-touch-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-box">
                          <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-box">
                          <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-box">
                          <input
                            type="text"
                            name="phone"
                            className="form-input"
                            placeholder="Phone No."
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-box">
                          <textarea
                            name="message"
                            className="form-input"
                            placeholder="Message..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-box mb-0">
                          <button type="submit" className="sec-btn">
                            <span>Submit Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
