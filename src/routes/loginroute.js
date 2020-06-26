const express = require('express');
const loginRouter =express.Router();
const RegistrationData = require('../model/registrationdata');

loginRouter.get('/',function(req,res){
    res.render("login",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
    {link:'/about',name:'About Us'}],redirect:'/profile'});
})

loginRouter.post('/redirect',function(req,res){

    const name = req.body.name;
    const pwd = req.body.pwd;
    
    console.log("In login router");
    console.log(name);
    console.log(pwd);

    RegistrationData.findOne({name:name,pwd:pwd})
    .then(function(data){
        if(data==null){
            res.render("login",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
            {link:'/about',name:'About Us'}],redirect:'/profile'});
        }
        else{
            res.render("profile",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'},
            {link:'/about',name:'About Us'}]});
        }

        console.log(data);
    })

    
})

module.exports = loginRouter;