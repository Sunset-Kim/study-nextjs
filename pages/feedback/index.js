import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function Feedback(props) {
  const { feedbacks } = props;
  const [selectedFeedback, setSelectedFeedback] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedFeedback(data.result);
      });
  };

  return (
    <>
      <div>
        <h2>Selected Feedback</h2>
        {selectedFeedback?.email}
      </div>
      <ul>
        {feedbacks?.map((feedback) => (
          <li key={feedback.id}>
            {feedback.feedback}
            <p>{feedback.email}</p>
            <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>불러오기</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const feedbacks = extractFeedback(filePath);

  return {
    props: {
      feedbacks,
    },
  };
}

export default Feedback;
