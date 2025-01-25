import { constants } from "./data/constants";
import ContentsCard from "./ui/ContentsCard";
import Title from "./ui/Title";

const Contents = () => {
  return (
    <section className="w-full max-w-screen-xl m-auto pt-10">
      <Title />
      <div className="flex gap-20">
        <ul className="grid grid-cols-3 gap-20 w-fit flex-3">
          {constants.cards.map((v, i) => (
            <ContentsCard key={i} {...v} />
          ))}
        </ul>
        <aside className="h-96 bg-green-100 flex-1"></aside>
      </div>
    </section>
  );
};

export default Contents;
