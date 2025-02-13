import aiContent from "./images/illustration-ai-content.webp";

function WriteYourContent() {
  return (
    <div className="write-your-content">
      <h1 className="write-your-content-title">Write your content using AI.</h1>
      <img
        style={{ width: "220px" }}
        src={aiContent}
        alt={"ai-content-image"}
      />
    </div>
  );
}

export default WriteYourContent;
