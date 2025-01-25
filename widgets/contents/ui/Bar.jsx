const Bar = () => {
  return (
    <div style={{ position: "relative" }}>
      <span
        style={{
          position: "absolute",
          top: "10px",
          display: "inline-block",
          width: "10px",
          height: "3px",
          backgroundColor: "grey",
        }}
      ></span>
    </div>
  );
};

export default Bar;
