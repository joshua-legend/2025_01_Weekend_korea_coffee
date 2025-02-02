const Card = ({ imageSrc }) => {
  return (
    <article
      className="w-full rounded-lg"
      style={{
        height: "500px",
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
      }}
    ></article>
  );
};

export default Card;
