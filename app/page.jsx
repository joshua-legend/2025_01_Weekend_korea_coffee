"use client";

import MainSwiper from "@/widgets/swiper/MainSwiper";
import Contents from "@/widgets/contents/Contents";
import MD from "@/widgets/md/MD";
import FadeIn from "@/shared/FadeIn";

export default function Home() {
  return (
    <main>
      <MainSwiper />
      <Contents />
      <FadeIn>
        <MD />
      </FadeIn>
    </main>
  );
}
