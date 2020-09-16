import QnA from '../../models/qna';

export const questionUpload = (req, res) => {
    console.log(req.body)
    const qna = new QnA(req.body);

    qna.save((err) => {
        if (err) return res.status(400).json({ success: false, Message: arr });
        return res.status(200).json({ success: true });
    });
};

export const answerUpload = (req, res) => {
    console.log(req.body)
    const { id, answer } = req.body;
    QnA.findOneAndUpdate(
        { _id: id },
        { $set: { answer: answer }},
        (err) => {
            if (err) return res.status(400).json({ success: false, Message: err });
            return res.status(200).json({ success: true });
        },
    );
};

export const readQnA = (req, res) => {
    QnA.find({}, (err, result) => {
      if (err) return res.status(409).json({ success: false, err });
      res.json(result);
    });
};

export const qnaDetail = (req, res) => {
    const { id } = req.params;
    console.log(id)
    QnA.findOne(({ _id: id }), (err, result) => {
        if(err) return res.status(400).json({ success: false, Message: err });
        return res.json(result);
    });
};