import { AspectRatio, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "570px" }}>
          <Heading size={["md", "md", "lg"]} marginBottom={["10px", "20px"]}>
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
          </Heading>
          <Text
            fontWeight="400"
            fontSize={["16px", "18px", "24px"]}
            marginBottom={["10px", "20px"]}
          >
            It doesn’t matter where you come from, we know how to get you to
            your dream career.
          </Text>
          <Text fontSize={["12px", "14px", "16px"]} color="gray.600">
            Our graduates consistently outperform students from top Indian
            engineering colleges & universities. 70% of companies who have hired
            1 Masai graduate come back to us with their hiring mandates.
          </Text>
          <Flex justifyContent={["center","start"]}>
            <Button
              color="white"
              backgroundColor="#ed0331"
              w={["160px"]}
              my="20px"
              fontSize={["14px", "18px"]}
            >
              APPLY NOW
            </Button>
          </Flex>
        </div>
        <AspectRatio
          w="600px"
          ratio="4/3"
          borderRadius="2xl"
          overflow="hidden"
          height={["200px", "300px"]}
        >
          <iframe
            src="https://www.youtube.com/embed/Ji0ICdxTdqc?si=-QgGfa3_33L59wbW"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>
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
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "600px" }}>
          <img
            src="https://www.masaischool.com/images/new-homepage/nsdc/nsdc-cert.jpg"
            alt=""
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            width: "600px",
            padding: "50px 20px",
          }}
        >
          <Heading size={["md", "md", "lg"]} marginBottom={["10px", "20px"]}>
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
          </Heading>
          <Text fontSize={["12px", "14px", "16px"]} color="gray.600" textAlign={["justify","left"]}>
            NSDC Certification is a prestigious recognition for students who
            have completed accredited skill-based training programs. It
            validates their expertise, demonstrating their dedication to
            practical skills. This certification provides a competitive edge in
            the job market, showcasing proficiency and adherence to industry
            standards. NSDC certifications are widely accepted, unlocking
            rewarding career opportunities and personal growth.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
