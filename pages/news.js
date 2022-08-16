import { useRef } from "react";

function News() {
  const eamilInput = useRef();
  const feedbackInput = useRef();

  function submitFormHanlder(event) {
    event.preventDefault();

    const emailValue = eamilInput.current.value;
    const feedbackValue = feedbackInput.current.value;

    fetch("/api/feedback", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        feedback: feedbackValue,
      }),
    });
  }

  return (
    <div>
      <form onSubmit={submitFormHanlder}>
        <div>
          <label htmlFor="eamil">Your Eamil Address</label>
          <input id="email" ref={eamilInput} type="email" />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <input type="text" id="feedback" ref={feedbackInput} />
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}
export default News;
