const express = require('express');

const registerRouter =express.Router();
const RegistrationData = require('../model/registrationdata');

registerRouter.get('/',function(req,res){
    res.render("register",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
    {link:'/about',name:'About Us'}],redirect:'/profile'});
})

registerRouter.post('/signup',function(req,res){
    console.log(req.body);
    var item = {
        name:req.body.name,
        pwd:req.body.pwd,
        mail:req.body.mail,
        address1:req.body.address1,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip
    }

    var registration = RegistrationData(item);
    registration.save();
    res.redirect("/login");

})


module.exports = registerRouter;