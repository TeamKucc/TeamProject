// import Product from '../../models/product';
// import multer from 'multer';

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(file);
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (ext !== '.jpg' || ext !== '.png') {
//       return cb(
//         res.status(400).end('jpg, png 파일만 업로드 가능합니다!'),
//         false,
//       );
//     }
//     cb(null, true);
//   },
// });

// var upload = multer({ storage: storage }).single('file');

// export const uploadImage = (req, res) => {
//   console.log(req.body);
//   upload(req, res, (err) => {
//     if (err) {
//       return res.json({ success: false, err });
//     }
//     return res.json({
//       success: true,
//       image: res.req.file.path,
//       fileName: res.req.file.filename,
//     });
//   });
// };

// export const uploadThumbnail = (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.json({ success: false, err });
//     }
//     return res.json({
//       success: true,
//       image: res.req.file.path,
//       fileName: res.req.file.filename,
//     });
//   });
// };

// export const uploadProduct = (req, res) => {
//   const product = new Product(req.body);

//   product.save((err) => {
//     if (err) return res.status(400).json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// };
