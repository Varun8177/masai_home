import { Button } from "@chakra-ui/react";
import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", fontWeight: "600" }}>
          <h2 style={{ fontSize: "28px" }}>Get Started</h2>
          <p style={{ fontSize: "24px" }}>Join the Program</p>
        </div>
        <div>
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#ed0331",
              color: "white",
            }}
          >
            Get your dream job
          </Button>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          color: "white",
          justifyContent: "space-between",
          padding: "30px 20px",
        }}
      >
        <div>
          <img
            src="https://www.masaischool.com/images/footer/masai-logo-dark.svg"
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "24px",
            color: "lightgray",
            alignItems: "center",
          }}
        >
          <p>Follow us -</p>
          <BiLogoTwitter />
          <BsFacebook />
          <AiFillLinkedin />
          <FiInstagram />
          <AiOutlineGithub />
          <AiFillYoutube />
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          width: "900px",
          marginLeft: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
        >
          Full Stack Web Development - Full Time
        </Button>
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
        >
          Data Analytics - Full Time
        </Button>
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
        >
          Mobile Development - Full Time
        </Button>
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
        >
          Software Testing & Automation - Full Time
        </Button>
        <Button
          style={{
            marginTop: "20px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
        >
          Backend Development - Full Time
        </Button>
      </div>
      <div
        style={{
          color: "white",
          display: "flex",
          width: "800px",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginTop: "20px",
          lineHeight: "2",
        }}
      >
        <div>
          <p>Success Stories</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Masai Blog</p>
          <p>Talent Circle</p>
        </div>
        <div>
          <p>Hire From Us</p>
          <p>Our Investors</p>
          <p>Newsroom</p>
          <p>Contact Us</p>
          <p>Become Coach</p>
        </div>
        <div>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Referral Program</p>
          <p>Masai Learn</p>
          <p>Industry Mentors</p>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          color: "white",
          padding: "30px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "500px" }}>
          © 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture
        </div>
        <div>Privacy Policy & Terms and Conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
