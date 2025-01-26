"use client";
import { getRandom } from "@/utils/utils";
import Bar from "./Bar";

const ContentsCard = ({ imageSrc, type, title }) => {
  return (
    <li className="flex flex-col gap-4 w-fit">
      <img
        className={`w-60 h-${32 * getRandom(0, 3)} object-cover`}
        src={imageSrc}
        alt=""
      />
      <span className="text-slate-200 text-xs">{type}</span>
      <div className="flex items-center gap-4">
        <Bar />
        <strong className="text-xs">{title}</strong>
      </div>
    </li>
  );
};

export default ContentsCard;
