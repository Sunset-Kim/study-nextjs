import { useContext, useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import Button from "../ui/button/button";
import * as S from "./comments.module.scss";
import { ToastifyContextController } from "../../contexts/toastify/toastfy_context";

function Comments(props) {
  const { eventId } = props;
  const [comments, setComments] = useState();
  const [showComments, setShowComments] = useState(false);
  const { onOpen } = useContext(ToastifyContextController);

  useEffect(() => {
    if (showComments) {
      onOpen("loading", "로딩중");
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          if (!Array.isArray(data)) return;
          setComments(data);
          onOpen("success", "성공");
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    onOpen("loading", "로딩중");
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("에러");
        }
        return res.json();
      })
      .then(() => {
        onOpen("success", "성공");
      })
      .catch(() => {
        onOpen("error", "실패");
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
