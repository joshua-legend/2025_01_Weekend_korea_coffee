const Banner = ({ imageSrc, title, subTitle }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-screen h-fit py-16 text-center flex flex-col gap-10 text-white font-bold"
    >
      <h2>{title}</h2>
      <h5>{subTitle}</h5>
    </section>
  );
};

export default Banner;
