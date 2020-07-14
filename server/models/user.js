import mongoose,{Schema} from 'mongoose';

const UserSchema = new Schema({
    username:{type:String,required:true},
    password:{type:String, required:true},
    admin:{type:Boolean,default:false}
},
{
    versionKey:false,
})

UserSchema.statics.create = function(username,password){
    const user = new this({
        username,password
    })
    return user.save()
}

UserSchema.statics.findByUsername = function(username){
    console.log(username)
    return this.findOne({username})
}

UserSchema.methods.verify = function(password){
    return this.password === password
}

UserSchema.methods.assignAdmin = function(){
    console.log("admin call")
    this.admin = true
    return this.save()
}

const User = mongoose.model('User',UserSchema);
export default User;