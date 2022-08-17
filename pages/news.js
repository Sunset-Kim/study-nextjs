import { useRef, useState } from "react";

function News() {
  const [news, setNews] = useState();
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

  async function loadFeedbackHanlder() {
    const result = await fetch("/api/feedback");
    const data = await result.json();

    setNews(data.feedback);

    return data.feedback;
  }
  console.log(news);

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
      <hr />
      <div>
        <button onClick={loadFeedbackHanlder}>Load Feedback</button>
      </div>

      <ul>
        {news &&
          news.map((item) => {
            return <li key={item}>{item.email}</li>;
          })}
      </ul>
    </div>
  );
}
export default News;
