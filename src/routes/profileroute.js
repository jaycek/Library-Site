const express = require('express');

const profileRouter=express.Router();


profileRouter.get('/',function(req,res){
    res.render("profile",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'},
    {link:'/about',name:'About Us'}]});
})
module.exports = profileRouter;