import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import Button from "../ui/button/button";
import * as S from "./comments.module.scss";

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
  }

  return (
    <section className={S.container}>
      <Button onClick={toggleCommentsHandler}>{showComments ? "Hide" : "Show"} Comments</Button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList list={comments} />}
    </section>
  );
}

export default Comments;
