import { buildFeedbackPath, extractFeedback } from "../api/feedback";

function Feedback(props) {
  const { feedbacks } = props;

  return (
    <ul>
      {feedbacks?.map((feedback) => (
        <li key={feedback.id}>
          {feedback.feedback}
          <p>{feedback.email}</p>
        </li>
      ))}
    </ul>
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
