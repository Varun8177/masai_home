import { Box } from "@chakra-ui/react";
import React from "react";
import TextBox from "./container/TextBox";

const Container = () => {
  const Details = [
    {
      heading: "100% Live Distance Learning",
      text: "India’s Only Live Tech-Learning Course With Tier 1 Instructors. Get Real-Time Feedback, Interactive Sessions & A Personalised Learning Experience.",
    },
    {
      heading: "Generative AI Integrated Program",
      text: "Harness & Implement The Power Of AI In Coding & Data Analytics. What’s More? Use Custom AI Tools To Enhance Placement Preparation.",
    },
    {
      heading: "Industry Ready Curriculum",
      text: "Our Curriculum Is Regularly Updated Through Industry Feedback. In-Demand Specialisations Are Added To Aid Our Students Launch Sustainable Careers.",
    },
    {
      heading: "Focus On Learning Agility",
      text: "We Prioritise Flexible Thinking & Continuous Skill Development. Stay Nimble In An Ever-Changing World By Embracing Adaptability, Curiosity & Rapid Learning.",
    },
    {
      heading: "Industry Ready In Just 25 - 35 Weeks",
      text: "Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!",
    },
  ];
  return (
    <Box w={"50%"} flexGrow={1} zIndex={10} blur={"2xl"}>
      {Details.map((item, i) => (
        <TextBox key={i} {...item} />
      ))}
    </Box>
  );
};

export default Container;
