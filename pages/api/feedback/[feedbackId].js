import { buildFeedbackPath, extractFeedback } from ".";

export default function handler(req, res) {
  if (req.method !== "GET") res.status(404).send();

  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackFile = extractFeedback(filePath);

  const result = feedbackFile.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({
    result,
  });
}
