import { Button, Image } from "@chakra-ui/react";
import React from "react";

const Courses = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", fontWeight: "700" }}>Our Courses</h1>
      <h3 style={{ fontSize: "32px", marginTop: "16px", fontWeight: "700" }}>
        Practice-Based Learning Tracks,{" "}
        <span
          style={{
            color: "#ed0331",
            position: "relative",
          }}
        >
          Supercharged By A.I.
          <Image
            src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
            alt="underline"
            pos={"absolute"}
            bottom={-3}
            left={0}
            w={"100%"}
            zIndex={-1}
          />
        </span>
      </h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "45%",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div
            style={{
              height: "300px",
              backgroundColor: "#B7B8E5",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png"
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div
            style={{
              padding: "30px",
              lineHeight: "2",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              Full Stack Web Development
            </p>
            <p style={{ fontSize: "20px" }}>Become job-ready in 30 weeks</p>
            <hr style={{ marginTop: "20px" }} />
            <ul
              style={{
                textAlign: "left",
                listStylePosition: "outside",
                paddingInlineStart: "40px",
                fontWeight: "600",
                maxWidth: "80%",
                marginTop: "30px",
              }}
            >
              <li>
                <strong> Opportunities:</strong> Full Stack Developer, Software
                Engineer & much more.
              </li>
              <li>100% live learning with expert instructors.</li>
              <li>Pay After Placement</li>
            </ul>
            <Button
              style={{
                marginTop: "20px",
                backgroundColor: "#ed0331",
                color: "white",
                width: "100%",
              }}
            >
              VIEW DETAILS
            </Button>
          </div>
        </div>
        <div
          style={{
            width: "45%",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div
            style={{
              height: "300px",
              backgroundColor: "rgb(229, 201, 183)",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png"
              alt=""
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div
            style={{
              padding: "30px",
              lineHeight: "2",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.5rem",
              }}
            >
              Backend Development
            </p>
            <p style={{ fontSize: "20px" }}>Become job-ready in 35 weeks</p>
            <hr style={{ marginTop: "20px" }} />
            <ul
              style={{
                textAlign: "left",
                listStylePosition: "outside",
                paddingInlineStart: "40px",
                fontWeight: "600",
                maxWidth: "80%",
                marginTop: "30px",
              }}
            >
              <li>
                <strong> Opportunities:</strong> FBackend Web Developer, API
                developer & much more.
              </li>
              <li>100% live learning with expert instructors.</li>
              <li>Pay After Placement</li>
            </ul>
            <Button
              style={{
                marginTop: "20px",
                backgroundColor: "#ed0331",
                color: "white",
                width: "100%",
              }}
            >
              VIEW DETAILS
            </Button>
          </div>
        </div>
      </div>
      <Button
        style={{
          marginTop: "20px",
          backgroundColor: "#ed0331",
          color: "white",
          width: "20%",
        }}
      >
        VIEW DETAILS
      </Button>
      <div
        style={{
          background:
            "linear-gradient(89deg, rgba(185, 246, 208, 0.43) 0%, rgb(111, 205, 158) 100%)",
          margin: "20px",
          display: "flex",
          padding: "20px",
          gap: "20px",
          borderRadius: "15px",
        }}
      >
        <img
          src="https://www.masaischool.com/images/navbar/prepleafLogo.svg"
          alt=""
          style={{ width: "200px" }}
        />
        <p
          style={{
            fontSize: "22px",
            width: "600px",
            textAlign: "left",
            lineHeight: "1.7",
          }}
        >
          If you are studying in college, check courses offered by Prepleaf.{" "}
          <a href="" style={{ color: "#ed0331" }}>
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Courses;
