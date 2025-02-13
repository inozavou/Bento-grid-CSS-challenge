import postIcon from "./images/illustration-create-post.webp";

function CreatePost() {
  return (
    <div className="create-post">
      <h1 className="create-post-title">
        Create and schedule content{" "}
        <span style={{ color: "hsl(256, 67%, 59%)", fontStyle: "italic" }}>
          quicker.
        </span>
      </h1>
      <img className="create-post-icon" src={postIcon} alt="post-icon" />
    </div>
  );
}

export default CreatePost;
