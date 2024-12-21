import Image from "next/image";
import Link from "next/link";

import Hero from "../hero";
import Partner from "../patner";
import HighlightServices from "../highlightservices";
import Testimonial from "../testimonial";
import Blog from "../blog";
import Cta from "../cta";

const About = () => {
  return (
    <>
      <Hero />
      <Partner />
      <HighlightServices />
      <Testimonial />
      <Blog />
      <Cta />
    </>
  );
};
export default About;
