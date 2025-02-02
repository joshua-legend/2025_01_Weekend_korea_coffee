import { MSG } from "@/constants/msg";
import Banner from "@/widgets/banner/Banner";
import Menu from "@/widgets/menu/Menu";

const Page = () => {
  return (
    <main>
      <Banner {...MSG.BANNER.MENU} />
      <Menu />
    </main>
  );
};

export default Page;
