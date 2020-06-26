const express = require('express');

const aboutRouter =express.Router();

aboutRouter.get('/',function(req,res){
    res.render("about",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
    {link:'/about',name:'About Us'}]});
})

module.exports = aboutRouter;