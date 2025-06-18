import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "Hi, my name is M G Sudharsan. I am a full-stack web developer who builds beautiful websites using React.js, Tailwind CSS, and Bootstrap.",
    line2:
      "I am proficient in frontend technologies like React.js, Redux, Tailwind CSS, CSS3, and more.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
        </div>
      </div>
    </section>
  );
}
