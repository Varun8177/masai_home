import { Button, Image, border } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import ReactPlayer from "react-player";

const urls = [
  "https://youtu.be/tSlit0vgB20?si=01NLGxSQxC2sx55m",
  "https://youtu.be/n0xIOjbNN0A?si=Oi39BAmilyJk2noc",
  "https://youtu.be/WjklvHqRVbs?si=6w58PoTqqoajQQz5",
];

const Impact = () => {
    const [url,setUrl]=useState(urls[0]);

    const handleLeft=()=>{

    }
    const handleRight=()=>{

    }
  return (
    <div style={{ backgroundColor: "#e5e7eb",paddingBottom:"20px" }}>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          textAlign: "center",
          margin: "30px",
          padding: "30px",
        }}
      >
        Our Students Are{" "}
        <span
          style={{
            color: "#ed0331",
            position: "relative",
          }}
        >
          Creating Impact
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
      </h1>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "40px auto",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "47%", position: "relative" }}>
          {/* <Button
            style={{ position: "absolute", top: "12%", left: "-3%" }}
            onClick={handleLeft}
          >
            {"<"}
          </Button>
          <Button
            style={{ position: "absolute", top: "12%", left: "95%" }}
            onClick={handleRight}
          >
            {">"}
          </Button> */}
          <ReactPlayer url={url}/>
        </div>
        <div style={{ width: "40%", overflow: "hidden" }}>
          <div
            style={{
              border: "1px solid #CFD0EE",
              padding: "20px",
              width: "400px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <AiFillLinkedin
              style={{
                color: "#007aff",
                marginLeft: "auto",
                width: "50px",
                fontSize: "32px",
              }}
            />
            <p style={{ lineHeight: "1.4", fontSize: "16px", padding: "20px" }}>
              Masai does a great job of attracting ambitious folk and it shows
              in the hunger with which the grads...
            </p>
            <div style={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Arya_Adarsha_Gautam_a72b51d7b3.jpeg"
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <div>
                <h2 style={{ fontWeight: "600" }}>Arya Adarsha Gautam</h2>
                <p style={{ fontSize: "16px" }}>
                  CTO and Co-Founder - Pagarbook
                </p>
              </div>
            </div>
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/pagarbook_rect_adcdc345e4.svg"
              alt=""
              style={{ width: "100px", marginLeft: "8px" }}
            />
          </div>
          {/* <div
            style={{
              border: "1px solid #CFD0EE",
              padding: "20px",
              width: "400px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <AiFillLinkedin
              style={{
                color: "#007aff",
                marginLeft: "auto",
                width: "50px",
                fontSize: "32px",
              }}
            />
            <p style={{ lineHeight: "1.4", fontSize: "16px", padding: "20px" }}>
              There are many platforms that bolster an individual's "knowledge"
              to show up to work and just do their...
            </p>
            <div style={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Anirban_Majumdar_e001629fcc.jpeg"
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <div>
                <h2 style={{ fontWeight: "600" }}>Anirban Majumdar</h2>
                <p style={{ fontSize: "16px" }}>
                  CTO and Co-Founder - Urban Piper
                </p>
              </div>
            </div>
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/urbanpiper_rect_37c839e35e.svg"
              alt=""
              style={{ width: "100px", marginLeft: "8px" }}
            />
          </div>
          <div
            style={{
              border: "1px solid #CFD0EE",
              padding: "20px",
              width: "400px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <AiFillLinkedin
              style={{
                color: "#007aff",
                marginLeft: "auto",
                width: "50px",
                fontSize: "32px",
              }}
            />
            <p style={{ lineHeight: "1.4", fontSize: "16px", padding: "20px" }}>
              We were looking to hire entry-level developers and Masai more than
              delivered. Our selection rate from...
            </p>
            <div style={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Vamsee_Mohan_Kamabathula_e196f3ab55.jpeg"
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <div>
                <h2 style={{ fontWeight: "600" }}>Vamsee Mohan Kamabathula</h2>
                <p style={{ fontSize: "16px" }}>
                  CTO and Co-Founder - Qapita Fintech
                </p>
              </div>
            </div>
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Qapita_13fe2db4fb.png"
              alt=""
              style={{ width: "100px", marginLeft: "8px" }}
            />
          </div>
          <div
            style={{
              border: "1px solid #CFD0EE",
              padding: "20px",
              width: "400px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <AiFillLinkedin
              style={{
                color: "#007aff",
                marginLeft: "auto",
                width: "50px",
                fontSize: "32px",
              }}
            />
            <p style={{ lineHeight: "1.4", fontSize: "16px", padding: "20px" }}>
              Hiring experience with Masai is a wow. All the candidates we
              interviewed were equally talented, selection...
            </p>
            <div style={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Pradeep_Sreeram_494522711e.jpeg"
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <div>
                <h2 style={{ fontWeight: "600" }}>Pradeep Sreeram</h2>
                <p style={{ fontSize: "16px" }}>Engineering Lead - Eat.Fit</p>
              </div>
            </div>
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/eatfit_rect_02ec413e66.svg"
              alt=""
              style={{ width: "100px", marginLeft: "8px" }}
            />
          </div>
          <div
            style={{
              border: "1px solid #CFD0EE",
              padding: "20px",
              width: "400px",
              borderRadius: "20px",
              boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
              backgroundColor: "white",
              display: "inline-block",
            }}
          >
            <AiFillLinkedin
              style={{
                color: "#007aff",
                marginLeft: "auto",
                width: "50px",
                fontSize: "32px",
              }}
            />
            <p style={{ lineHeight: "1.4", fontSize: "16px", padding: "20px" }}>
              We would like to extend our heartfelt appreciation to Masai for
              the exceptional talent we have had the...
            </p>
            <div style={{ display: "flex", marginLeft: "20px", gap: "10px" }}>
              <img
                src="https://masai-website-images.s3.ap-south-1.amazonaws.com/Arshdeep_Singh_0d44120445.jpeg"
                alt=""
                style={{ width: "50px", borderRadius: "10px" }}
              />
              <div>
                <h2 style={{ fontWeight: "600" }}>Arshdeep Singh</h2>
                <p style={{ fontSize: "16px" }}>
                  Director of technology - Kapiva
                </p>
              </div>
            </div>
            <img
              src="https://masai-website-images.s3.ap-south-1.amazonaws.com/svgviewer_png_output_38_4421638b42.png"
              alt=""
              style={{ width: "100px", marginLeft: "8px" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Impact;
