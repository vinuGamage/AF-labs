const express = require('express');
const router = express.Router();
const mongoose = require('../DBSchema/DBSchema');
const schema = mongoose.model('users');

router.post('/add',(req,res)=>{
    console.log(req.url);
    const user = schema({
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        birthday:new Date(req.body.birthday),
        _id:Date.now().toString()
    });
    user.save().then((data)=>{
        console.log(data);
        res.status(200).send({message:`A user was added`})
    }).catch(err=>{
        res.status(500).send({message:`Error ${err}`});
    });
});

router.get('/all',(req,res)=>{
    console.log(req.url);
    schema.find().exec().then(data=>{
        console.log(data);
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send({message:`Error : ${err}`});
    });

});

router.get('/getUser:id',(req,res)=>{
    schema.find({id:req.params.id}).exec().then((data)=>{
        console.log(data);
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send(`Error : ${err}`);
    });
});
//localhost:4000/users/updateUser/324532
router.put('/updateUser/:_id',(req,res)=>{
    console.log(req.url);
    // res.send(req.url)
    schema.update({_id:req.params._id},req.body).then((data)=>{
        console.log(data);
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send(`Error : ${err}`);
    });
});

router.delete('/deleteUser/:_id',(req,res)=>{
    console.log(req.url);

    schema.remove({_id:req.params._id}).then(data=>{
        console.log(data);
        res.status(200).send({data:data});
    }).catch(err=>{
        res.status(500).send(`Error : ${err}`);
    })
})

module.exports = router;


