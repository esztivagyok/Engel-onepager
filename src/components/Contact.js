import { useState } from "react";
import logo from './ngologo.png';

function Form() {
  //Contact form variables

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [displayForm, setDisplayForm] = useState(true);

  //contact form object

  const consoleObj = {
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    email: `${email}`,
    subject: `${subject}`,
    message: `${message}`,
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(consoleObj);
    setDisplayForm(false);
  };

  if (displayForm) {
    return (
      <section className="contactText" id="contactid">
        <div className="contactInfo">
          <p className="dontitle">
            <strong>With your donation you can:</strong>
          </p>
          <ul className="donoptions">
            <li>fund one child to attend our fun summer camps</li>
            <li>fund a poor family's dinner today</li>
            <li>
              help us buy another RV that can save a homeless person this winter
            </li>
          </ul>
        </div>
        <div className="form-container">
          <form>
            <p>Please fill in the required information!</p>
            <div className="input filed">
              <div>
                <label htmlFor="firstName">
                  <strong>First name: </strong>
                </label>
                <input
                  className="inputfield"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                ></input>
              </div>
              <div>
                <label htmlFor="lastName">
                  <strong>Last Name: </strong>
                </label>
                <input
                  className="inputfield"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                ></input>
              </div>
              <div>
                <label htmlFor="email">
                  <strong>Email: </strong>
                </label>
                <input
                  className="inputfield"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                ></input>
              </div>
              <div>
                <label htmlFor="subject">
                  <strong>Subject: </strong>
                </label>
                <input
                  className="inputfield"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter subject"
                ></input>
              </div>
              <div>
                <label htmlFor="message">
                  <strong>Message: </strong>
                </label>
                <input
                  className="inputfield"
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                ></input>
              </div>
              <div>
                <label htmlFor="terms">
                  <strong>Terms of service</strong>
                </label>
                <p>
                  I agree to the terms and conditions as set out by the user
                  agreement
                </p>
                <input type="checkbox" name="terms" value="checked"></input>
              </div>
            </div>
          </form>
        </div>
        <div>
          <button className="submitBtn" type="submit" onClick={handleClick}>
            Submit
          </button>
        </div>
      </section>
    );
  } else
    return (
      <section className="contactText">
        <p className="exitMsg">
          We appreciate you contacting us. One of our colleagues will get back
          in touch with you soon! Have a great day!
        </p>
        <img src={logo} className="exitLogo" width="300" alt="ngologo"/>
      </section>
    );
}

export default function Contact() {
  //Construct contact page

  return <Form />;
}
