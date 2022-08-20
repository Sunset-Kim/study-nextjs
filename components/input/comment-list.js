import ErrorAlert from "../ui/error/error-alert";
import S from "./comment-list.module.scss";

function CommentList(props) {
  const { list } = props;
  if (!list || list.length === 0) {
    return <ErrorAlert>아직 댓글이 없어요! 첫 댓글을 남겨봐요</ErrorAlert>;
  }
  return (
    <ul className={S.comments}>
      {/* Render list of comments - fetched from API */}

      {list?.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
