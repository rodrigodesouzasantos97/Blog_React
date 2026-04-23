import "./PostContent.css"

const PostContent = ({ post }) => {
  return (
    <div className="content">
      <p>{post.author}</p>
      <div className="imageAndTexts">
        <img src={post.image} alt={post.title} />
        <div className="texts">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
