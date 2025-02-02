import KakaoMap from "./ui/KakaoMap";
import Title from "./ui/Title";

const Map = () => {
  return (
    <section className="w-screen p-10">
      <div className="w-full m-auto max-w-screen-lg">
        <Title />
        <KakaoMap />
      </div>
    </section>
  );
};

export default Map;
