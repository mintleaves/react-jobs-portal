const Hero = ({
  title = "  Become a React Dev",
  subTitle = " Find the React job that fits your skills and needs",
}) => {
  return (
    <section className="bg-emerald-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-slate-50 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-slate-50">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
