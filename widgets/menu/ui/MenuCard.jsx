import Link from "next/link";

const MenuCard = ({ imageSrc, title, id }) => {
  return (
    <Link href={`/menu/${id}`}>
      <article className="bg-slate-200 w-full p-4 flex flex-col items-center">
        <img src={imageSrc} alt="" />
        <strong>{title}</strong>
      </article>
    </Link>
  );
};

export default MenuCard;
