import { Button, Image } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

const Possibilities = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "90%",
          margin: "30px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "47%" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
            {" "}
            <span
              style={{
                color: "#ed0331",
                position: "relative",
              }}
            >
              Elevate
              <Image
                src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="underline"
                pos={"absolute"}
                bottom={-3}
                left={0}
                w={"100%"}
                zIndex={-1}
              />
            </span>{" "}
            Your Career Possibilities
          </h1>
          <p
            style={{ fontSize: "24px", fontWeight: "600", margin: "20px 0px" }}
          >
            It doesn’t matter where you come from, we know how to get you to
            your dream career.
          </p>
          <p>
            Our graduates consistently outperform students from top Indian
            engineering colleges & universities. 70% of companies who have hired
            1 Masai graduate come back to us with their hiring mandates.
          </p>
          <Button
            style={{
              marginTop: "20px",
              backgroundColor: "#ed0331",
              color: "white",
              width: "20%",
            }}
          >
            APPLY NOW
          </Button>
        </div>
        <div style={{ width: "47%", border: "1px solid red" }}>
          <ReactPlayer url="https://youtu.be/Ji0ICdxTdqc?si=WSGhYMcSOkDt_cKK" />
        </div>
      </div>
      <div
        style={{
          maxWidth: "90%",
          margin: "30px auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#e5e7eb",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <div style={{ width: "47%" }}>
          <img
            src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"
            alt=""
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div style={{ width: "47%" }}>
          <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
            {" "}
            <span
              style={{
                color: "#ed0331",
                position: "relative",
              }}
            >
              Certification
              <Image
                src="https://www.masaischool.com/images/new-homepage/yellow-vector.svg"
                alt="underline"
                pos={"absolute"}
                bottom={-3}
                left={0}
                w={"100%"}
                zIndex={-1}
              />
            </span>{" "}
            By The N.S.D.C
          </h1>
          <p style={{ margin: "20px" }}>
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs. It
            validates their expertise, demonstrating their dedication to
            practical skills. This certification provides a competitive edge in
            the job market, showcasing proficiency and adherence to industry
            standards. NSDC certifications are widely accepted, unlocking
            rewarding career opportunities and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
