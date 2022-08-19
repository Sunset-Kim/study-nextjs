export default function commentController(req, res) {
  if (req.method === "GET") {
    const dummyBack = [
      { id: "2022-08-15", eamil: "wwwww@na.co", name: "hi", text: "hihihihihihi" },
      { id: "2022-08-16", eamil: "wwwww@na.co", name: "hi", text: "hihihihihihi" },
    ];

    res.status(200).json(dummyBack);
  } else if (req.method === "POST") {
    const { name, email, text } = req.body;

    if (!email || !name || !text) {
      res.status(422).json({
        message: "Invalid Input",
      });
      return;
    }

    const newComment = {
      id: new Date(),
      email,
      name,
      text,
    };

    res.status(201).json(newComment);
  }
}
