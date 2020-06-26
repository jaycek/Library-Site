const express = require('express');

const booksRouter=express.Router();
const BookData = require('../model/bookdata');

booksRouter.get('/',function(req,res){

    BookData.find()
    .then(function(books){
        res.render("books",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'},
        {link:'/about',name:'About Us'}],books});
    })
     
  })

booksRouter.get('/:id',function(req,res){

    const id=req.params.id;
    BookData.findOne({_id:id})
    .then(function(book){
        
        res.render("book",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'},
        {link:'/about',name:'About Us'}],book:book})
    })
    
 })


module.exports = booksRouter;