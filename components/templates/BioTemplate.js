/* eslint-disable react/no-unescaped-entities */
import AboutInfo from "@/components/molecules/AboutInfo";
import PageHeading from "@/components/organisms/PageHeading";
import Footer from "../atoms/Footer";

export default function BioTemplate() {
  return (
    <>
      <PageHeading
        label="about"
        subLabel="know me more"
        classes="section-heading-wrapper relative flex items-center justify-center my-12"
      />

      <AboutInfo classes="section-content-wrapper text-neutral-800 dark:text-neutral-300 p-4">
        I am <strong>Al Abed Jafry,</strong> from Bangladesh, and I specialize
        in frontend development with a focus on the{" "}
        <strong>MERN and PERN </strong> stack. Over the past three years, I've
        crafted a variety of frontend applications using
        <strong> React, Redux,</strong> and other tools. Additionally, I've
        ventured into backend development with{" "}
        <strong>Node.js, Express.js, and Next.js</strong>.
        <br />
        <br />I am passionate about{" "}
        <strong> System Design & Architecture,</strong> along with
        <strong> Web Animation</strong>. In my spare time, I love diving into
        learning and exploring topics such as about architectural design
        patterns, system scalability, and the latest technologies.
        <br />
        <br />I am dedicated to building{" "}
        <strong> clean, reusable, maintainable, and scalable </strong>
        frontend applications using <strong>React.js and Next.js,</strong> while
        also embracing<strong> REST and GraphQL</strong> for efficient data
        management. Leveraging frameworks like
        <strong> Tailwind CSS, Bootstrap, MUI and Shadcn </strong>
        alongside <strong>GSAP</strong> for animation, I ensure efficient
        development and delightful user experiences. My projects are built upon
        the principles of{" "}
        <strong>Atomic Design, Solid Architecture, and Dry, </strong> promoting
        component reusability and maintainability.
        <br />
        <br />
        On the backend, I have developed{" "}
        <strong>
          Management Systems, E-commerce, Blogs and Real-time Chat Application
        </strong>{" "}
        using
        <strong> Node.js, Express.js, and Next.js,</strong> with data storage
        facilitated by <strong>Firebase, MongoDB and Postgres</strong>. Whether
        building RESTful APIs, I prioritize robustness and efficiency.
        <br />
        <br />
        Driven by a vision to become a{" "}
        <strong> System Design Architect,</strong> I remain vigilant in staying
        updated on the latest technologies and eagerly embrace new challenges.
      </AboutInfo>
      <div className="border divide-zinc-800 dark:divide-zinc-300 dark:opacity-30  my-12"></div>
      <Footer />
    </>
  );
}
