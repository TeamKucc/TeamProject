import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import moment from 'moment';

const UserSchema = new Schema(
  {
    userID: { type: String, required: true, maxlength: 30 },
    name: { type: String, maxlength: 15 },
    password: { type: String, required: true, minlength: 6 },
    address: { type: String },
    email: { type: String, trim: true, unique: 1 },
    role: { type: Number, default: 0 },//2번이 admin
    token: { type: String },
    tokenExp: { type: Number },
    business: { type: Number, maxlength: 10 },
  },
  {
    versionKey: false,
  },
);

// UserSchema.statics.create = function(username,password){
//     const user = new this({
//         username,password
//     })
//     return user.save()
// }

UserSchema.pre('save', function (next) {
  let user = this;
  if (user.isModified('password')) {
    console.log('passwor Changed');
    bcrypt.genSalt(5, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    console.log('save call');
    next();
  }
});
UserSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  if (update.password) {
    console.log('passs')
    bcrypt.genSalt(5, (err, salt) => {
      bcrypt.hash(update.password, salt, (err, hash) => {
        if (err) return err;
        this.getUpdate().password = hash;
        console.log(this.getUpdate().password)
        next();
      })
    })
  } else {
    next();
  }
})



UserSchema.statics.findByUsername = function (username) {
  console.log(username);
  return this.findOne({ username });
};

UserSchema.methods.verify = function (password, sv) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return sv(err);
    sv(null, isMatch);
  });
};

// UserSchema.methods.assignAdmin = function () {
//     console.log("admin call")
//     this.admin = true
//     return this.save()
// }

UserSchema.methods.generateToken = function (sv) {
  console.log('Token call');
  let user = this;
  let token = jwt.sign(user._id.toHexString(), 'secret');
  let oneHour = moment().add(1, 'hour').valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function (err, user) {
    if (err) return sv(err);
    sv(null, user);
  });
};

UserSchema.statics.findByToken = function (token, sv) {
  let user = this;

  jwt.verify(token, 'secret', function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return sv(err);
      sv(null, user);
    });
  });
};

const User = mongoose.model('User', UserSchema);
export default User;
