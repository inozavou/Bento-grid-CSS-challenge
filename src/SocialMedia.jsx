import starsIcon from "./images/illustration-five-stars.webp";

function SocialMedia() {
  return (
    <div className="social-media">
      <h1 className="social-media-title">
        Social Media <span style={{ color: "hsl(39, 100%, 71%)" }}>10x</span>{" "}
        <span style={{ fontStyle: "italic" }}>Faster</span> with AI
      </h1>
      <img style={{ width: "180px" }} src={starsIcon} alt="stars-icon" />
      <p className="social-media-text">Over 4,000 5-star reviews</p>
    </div>
  );
}

export default SocialMedia;
