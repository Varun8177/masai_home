import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "black", fontFamily: "Open Sans, sans-serif" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "white", fontWeight: "600" }}>
          <h2 style={{ fontSize: "20px" }}>Get Started</h2>
          <p style={{ fontSize: "15px", color: "#ffdb66" }}>Join the Program</p>
        </div>
        <div>
          <Button
            style={{
              marginTop: "0px",
              backgroundColor: "#ed0331",
              color: "white",
            }}
          >
            Get your dream job
          </Button>
        </div>
      </div>
      <hr
        style={{ width: "97%", margin: "auto", borderTop: "1px solid #484848" }}
      />
      <Box
        style={{
          color: "white",
          justifyContent: "space-between",
          padding: "30px 20px",
        }}
        display={["none", "flex"]}
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
          <Text fontFamily={"Open Sans, sans-serif"}>Follow us -</Text>
          <BiLogoTwitter />
          <BsFacebook />
          <AiFillLinkedin />
          <FiInstagram />
          <AiOutlineGithub />
          <AiFillYoutube />
        </div>
      </Box>
      <hr
        style={{ width: "97%", margin: "auto", borderTop: "1px solid #484848" }}
      />
      <Box
        style={{
          display: "flex",
          maxWidth: "900px",
          marginLeft: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
        fontSize={["14px", "16px"]}
        mt="10px"
      >
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
          fontFamily={"Open Sans, sans-serif"}
          bgColor={"#f3f4f6"}
          fontWeight="normal"
          fontSize={["14px", "16px"]}
        >
          Full Stack Web Development - Full Time
        </Button>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
          fontFamily={"Open Sans, sans-serif"}
          bgColor={"#f3f4f6"}
          fontWeight="normal"
          fontSize={["14px", "16px"]}
        >
          Data Analytics - Full Time
        </Button>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
          fontFamily={"Open Sans, sans-serif"}
          bgColor={"#f3f4f6"}
          fontWeight="normal"
          fontSize={["14px", "16px"]}
        >
          Mobile Development - Full Time
        </Button>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
          fontFamily={"Open Sans, sans-serif"}
          bgColor={"#f3f4f6"}
          fontWeight="normal"
          fontSize={["14px", "16px"]}
        >
          Software Testing & Automation - Full Time
        </Button>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "100px",
          }}
          fontFamily={"Open Sans, sans-serif"}
          bgColor={"#f3f4f6"}
          fontWeight="normal"
          fontSize={["14px", "16px"]}
        >
          Backend Development - Full Time
        </Button>
      </Box>
      <Flex
        justify="space-between"
        marginRight="100px"
        display={["none", "flex"]}
      >
        <Box
          style={{
            color: "white",
            width: "700px",
            justifyContent: "space-between",
            marginLeft: "20px",
            marginTop: "20px",
            lineHeight: "2",
          }}
          display={["none", "flex"]}
        >
          <div style={{ color: "#C0C0C0" }}>
            <p>Success Stories</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Masai Blog</p>
            <p>Talent Circle</p>
          </div>
          <div style={{ color: "#C0C0C0" }}>
            <p>Hire From Us</p>
            <p>Our Investors</p>
            <p>Newsroom</p>
            <p>Contact Us</p>
            <p>Become Coach</p>
          </div>
          <div style={{ color: "#C0C0C0" }}>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Referral Program</p>
            <p>Masai Learn</p>
            <p>Industry Mentors</p>
          </div>
        </Box>
        <div style={{ color: "#C0C0C0", width: "200px",textAlign:"center" }}>
          <p>Connect with a growing community of learners</p>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              color: "#194de6",
            }}
            fontWeight="400"
            leftIcon={<BsTelegram />}
          >
            JOIN OUR TELEGRAM
          </Button>
        </div>
      </Flex>
      <Box
        style={{
          color: "white",
          width: "300px",
          justifyContent: "space-between",
          marginLeft: "20px",
          marginTop: "20px",
          lineHeight: "2",
        }}
        display={["flex", "none"]}
      >
        <div style={{ color: "#C0C0C0" }}>
          <p>Success Stories</p>
          <p>About Us</p>
          <p>Our Investors</p>
          <p>Careers</p>
          <p>Referral Program</p>
          <p>Contact Us</p>
          <p>Talent Circle</p>
          <p>Industry Mentors</p>
        </div>
        <div style={{ color: "#C0C0C0" }}>
          <p>Hire From Us</p>
          <p>Our Team</p>
          <p>FAQ</p>
          <p>Newsroom</p>
          <p>Masai Blog</p>
          <p>Masai Learn</p>
          <p>Become Coach</p>
        </div>
      </Box>
      <Box style={{ color: "#C0C0C0", width: "200px" }} margin="20px auto" textAlign="center" display={["block","none"]}>
        <p>Connect with a growing community of learners</p>
        <Button
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "#194de6",
          }}
          fontWeight="400"
          leftIcon={<BsTelegram />}
        >
          JOIN OUR TELEGRAM
        </Button>
      </Box>
      <hr
        style={{
          width: "97%",
          margin: "10px auto",
          borderTop: "1px solid #484848",
        }}
      />
      <Box
        style={{
          gap: "20px",
          fontSize: "24px",
          color: "lightgray",
          alignItems: "center",
          padding: "25px",
        }}
        display={["flex", "none"]}
      >
        <BiLogoTwitter />
        <BsFacebook />
        <AiFillLinkedin />
        <FiInstagram />
        <AiOutlineGithub />
        <AiFillYoutube />
      </Box>
      <Box
        style={{
          display: "flex",
          color: "#A8A8A8",
          padding: "10px",
          justifyContent: "space-between",
        }}
        fontSize={["10px", "18px"]}
      >
        <div style={{ width: "500px" }}>
          © 2023 by Masai School | A Nolan Edutech Pvt Ltd Venture
        </div>
        <div>Privacy Policy & Terms and Conditions</div>
      </Box>
    </footer>
  );
};

export default Footer;
