import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import React, { useState } from "react";
import { send } from "emailjs-com";
import { Button } from "antd";
import { FcApproval } from "react-icons/fc";

const Contact = () => {

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mssg, setMssg] = useState("");
  const [showMssg, setShowMssg] = useState(false);
  const [succesIcon, setSuccessIcon] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send("service_ew4sp9n", "template_rp8kt8a", toSend, "aORlvMMkH9_3xKt2B")
      .then(() => {
        setToSend({ ...toSend, from_name: "", message: "", reply_to: "" });
        setSuccessIcon(true);
        setShowMssg(true);
        setTimeout(() => {
          setShowMssg(false);
        }, 5000);
        setShowMssg(true);
        setMssg("Your message has been sent successfully");
        setTimeout(() => {
          setShowMssg(false);
        }, 5000);
      })

      .catch(() => {
        setShowMssg(true);

        setMssg(
          "Something went wrong. Please try again later or send an email to cansurer@outlook.com"
        );
        setTimeout(() => {
          setShowMssg(false);
        }, 5000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>cansurer@outlook.com</h5>
            <a
              href="mailto:cansurer@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form onSubmit={onSubmit}>
          {showMssg && (
            <div style={{display:'flex',justifyContent:'flex-start', alignItems:'center'}}>
              <h5 style={{color:'var(--color-light)'}}>{mssg}</h5>
              {succesIcon && (
                <span style={{justifyContent:'center', alignItems:'center',paddingLeft:'5px'}}>
                  <FcApproval ></FcApproval>
                </span>
              )}
            </div>
          )}

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={toSend.from_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your Email"
            value={toSend.reply_to}
            onChange={handleChange}
            required
          />
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your Message"
            value={toSend.message}
            onChange={handleChange}
            required
          />
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="btn-forantd btn-forantd-primary"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
