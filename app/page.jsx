"use client";

import MainSwiper from "@/widgets/swiper/MainSwiper";
import Contents from "@/widgets/contents/Contents";
import MD from "@/widgets/md/MD";
import FadeInOnView from "@/widgets/FadeInOnView";

export default function Home() {
  return (
    <main>
      <MainSwiper />
      <Contents />
      <MD />
    </main>
  );
}
