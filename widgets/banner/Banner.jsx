const Banner = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('http://www.caffebene.co.kr/images/menu/sub-001000.jpg')",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-fit py-16 text-center flex flex-col gap-10 text-white font-bold"
    >
      <h2>COFFEE</h2>
      <h5>우리동네 숨은 스페셜티 블렌드 맛집</h5>
    </section>
  );
};

export default Banner;
