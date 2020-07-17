import User from '../../models/user';

export const list = (req, res) => {
  if (!req.decode.admin) {
    return res.status(403).json({
      message: 'you are not adimn',
    });
  }
  User.find({}).then((users) => {
    res.json({ users });
  });
};

export const assignAdmin = (req, res) => {
  if (!req.decode.admin) {
    return res.status(403).json({
      message: 'you are not adimn',
    });
  }

  User.findByUsername(req.params.username)
    .then((user) => user.assignAdmin())
    .then(
      res.json({
        success: true,
      }),
    );
};
