const PostCard = ({ title, cover, body, id }) => {
  return (
    <div>
      <img src={cover} alt={title} />
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  );
};
export default PostCard;
