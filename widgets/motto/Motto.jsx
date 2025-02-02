import "./motto.css";

const Motto = () => {
  return (
    <section className="w-screen p-32">
      <div className="w-full max-w-screen-xl m-auto text-center text-2xl leading-relaxed">
        <h2 className="heading" style={{ fontFamily: "NanumSquareNeo" }}>
          우리도 그런 존재가 되려고 합니다
          <br />
          화려한 랜드마크는 아니더라도 <br />
          누구나 편하게 드나들 수 있는 곳 <br />
          언제나 활짝 열려있는 동네 사랑방 같은 곳이 되려고 합니다
        </h2>
      </div>
    </section>
  );
};

export default Motto;
