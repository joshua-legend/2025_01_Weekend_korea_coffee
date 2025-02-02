import { MSG } from "@/constants/msg";
import Banner from "@/widgets/banner/Banner";
import Map from "@/widgets/map/Map";
import KakaoMapComponent from "@/widgets/KakaoMapComponent";

const Page = () => {
  return (
    <main>
      <Banner {...MSG.BANNER.STORE} />
      <Map />
    </main>
  );
};

export default Page;
