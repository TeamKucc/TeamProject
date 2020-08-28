import jwt from 'jsonwebtoken';

const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in',
    });
  }

  const pass = new Promise((res, rej) => {
    jwt.verify(token, JWT_SECRET, (err, decode) => {
      if (err) rej(err);
      res(decode);
    });
  });

  const onError = (err) => {
    res.status(403).json({
      success: false,
      message: err.message,
    });
  };

  pass
    .then((decode) => {
      req.decode = decode;
      next();
    })
    .catch(onError);
};

export default authMiddleware;
