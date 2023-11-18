import AboutMe, { personalDetailsProps } from "../../components/AboutMe.js";

import PageHeader from "../../components/PageHeader.js";

const About = ({
  name,
  location,
  brand,
  email,
  availability,
}: personalDetailsProps) => {
  return (
    <section className="about">
      <PageHeader title="About Me" description="Let me introduce myself" />
      <AboutMe
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default About;
