const mongoose =require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
   firstname: {
       type:String,
       required:true
   },
    secondname: {
        type:String,
        required:true
    },
    birthday: {
        type:Date,
        required:true
    },
    _id: {
        type:String,
        required:true
    },
});

mongoose.model('users', UserSchema);


mongoose.connect('mongodb://localhost:27017/test', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});

module.exports = mongoose;