import { useState } from "react";

function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Sara",
      rating: 5,
      comment: "Amazing portfolio! Very creative.",
    },
    {
      name: "Ali",
      rating: 4,
      comment: "Beautiful design and easy to use.",
    },
  ]);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const addFeedback = (e) => {
    e.preventDefault();

    if (!name || !comment) return;

    setFeedbacks([
      ...feedbacks,
      {
        name,
        rating: Number(rating),
        comment,
      },
    ]);

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <section className="feedback-section">
      <h2>Visitor Feedback</h2>

      <form className="feedback-form" onSubmit={addFeedback}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>

        <textarea
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit">
          Submit Feedback
        </button>
      </form>

      <div className="feedback-list">
        {feedbacks.map((item, index) => (
          <div className="feedback-card" key={index}>
            <h3>
              {item.name}

              {item.rating === 5 && (
                <span className="featured-review">
                  Featured
                </span>
              )}
            </h3>

            <p>{"⭐".repeat(item.rating)}</p>

            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedbackWall;