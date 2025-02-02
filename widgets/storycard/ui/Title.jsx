const Title = ({ first, second }) => {
  return (
    <h2 className="text-4xl" style={{ fontFamily: "NanumSquareNeo" }}>
      {first}
      <br />
      {second}
    </h2>
  );
};

export default Title;
