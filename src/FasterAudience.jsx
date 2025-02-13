import audienceGrowth from "./images/illustration-audience-growth.webp";

function FasterAudience() {
  return (
    <div className="faster-audience">
      <h1 className="title-audience-growth">{">56%"}</h1>
      <p className="text-audience-growth">faster audience growth</p>
      <img
        className="image-audience-growth"
        src={audienceGrowth}
        alt="audience-growth"
      />
    </div>
  );
}

export default FasterAudience;
