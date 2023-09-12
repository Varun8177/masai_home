import { Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Courses = () => {
  return (
    <div style={{ maxWidth: "80%", margin: "auto", textAlign: "center" }}>
      <Heading size={["xl","2xl","3xl"]} my={["10px","20px"]}>Our Courses</Heading>
      <Heading size={["md","lg","xl"]}>
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
      </Heading>
      <div
        style={{
          display: "flex",
          gap: "0px",
          margin: "30px auto 10px",
          justifyContent: "space-around",
          maxWidth:"900px",
          flexWrap:"wrap"
        }}
      >
        <div
          style={{
            maxWidth: "420px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div
            style={{
              height: "250px",
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
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.3rem",
              }}
            >
              Full Stack Web Development
            </p>
            <p style={{ fontSize: "20px",fontWeight:"300" }}>Become job-ready in 30 weeks</p>
            <hr style={{ marginTop: "10px" }} />
            <ul
              style={{
                textAlign: "left",
                listStylePosition: "outside",
                paddingInlineStart: "30px",
                fontWeight: "400",
                maxWidth: "95%",
                marginTop: "10px",
                fontSize:"14px",
                lineHeight:"1.7"
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
              textAlign="center"
              margin="auto"
              bgColor={"#ed0331"}
              color={"white"}
              _hover={{ bgColor: "#cc032a" }}
              fontWeight={400}
              px={"10"}
              h={"50px"}
              fontSize={"lg"}
              mt={"20px"}
              w={"100%"}
            >
              VIEW DETAILS
            </Button>
          </div>
        </div>
        <div
          style={{
            maxWidth: "420px",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <div
            style={{
              height: "250px",
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
              lineHeight: "1.5",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "1.3rem",
              }}
            >
              Backend Development
            </p>
            <p style={{ fontSize: "20px",fontWeight:"300" }}>Become job-ready in 35 weeks</p>
            <hr style={{ marginTop: "10px" }}/>
            <ul
              style={{
                textAlign: "left",
                listStylePosition: "outside",
                paddingInlineStart: "30px",
                fontWeight: "400",
                maxWidth: "95%",
                marginTop: "10px",
                fontSize:"14px",
                lineHeight:"1.7"
              }}
            >
              <li>
                <strong> Opportunities:</strong>  Backend Web Developer, API
                developer & much more.
              </li>
              <li>100% live learning with expert instructors.</li>
              <li>Pay After Placement</li>
            </ul>
            <Button
              textAlign="center"
              margin="auto"
              bgColor={"#ed0331"}
              color={"white"}
              _hover={{ bgColor: "#cc032a" }}
              fontWeight={400}
              px={"10"}
              h={"50px"}
              fontSize={"lg"}
              mt={"20px"}
              w={"100%"}
            >
              VIEW DETAILS
            </Button>
          </div>
        </div>
      </div>
      <Button
        textAlign="center"
        margin="auto"
        bgColor={"#ed0331"}
        color={"white"}
        _hover={{ bgColor: "#cc032a" }}
        fontWeight={400}
        px={"10"}
        h={"50px"}
        fontSize={"lg"}
        mt={"20px"}
      >
        VIEW DETAILS
      </Button>
      <div
        style={{
          background:
            "linear-gradient(89deg, rgba(185, 246, 208, 0.43) 0%, rgb(111, 205, 158) 100%)",
          margin: "20px",
          display: "flex",
          padding: "25px",
          gap: "30px",
          borderRadius: "15px",
          flexWrap:"wrap",
          alignItems:"center"
        }}
      >
        <img
          src="https://www.masaischool.com/images/navbar/prepleafLogo.svg"
          alt=""
          style={{ width: "180px",height:"80px" }}
        />
        <Text
          w="500px"
          fontSize="md"
          textAlign="left"
          fontWeight="400"
          lineHeight="1.7"
        >
          If you are studying in college, check courses offered by Prepleaf.{" "}
          <a href="" style={{ color: "#ed0331" }}>
            Click Here
          </a>
        </Text>
      </div>
    </div>
  );
};

export default Courses;
