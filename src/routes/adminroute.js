const express = require('express');
const { request } = require('express');

const adminRouter=express.Router();
const Bookdata = require('../model/bookdata');


adminRouter.get('/',function(req,res){
    res.render("addbook",{nav:[{link:'/',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbook',name:'Add Book'},{link:'/authors/add',name:'Add Author'},
   {link:'/about',name:'About Us'}]})
 });

adminRouter.post('/add',function(req,res){

  //for GET
  //  var item={
  //   title: req.query.title,
  //   author:req.query.author,
  //   genre:req.query.genre,
  //   image:req.query.image
  // }
  
  // var book = Bookdata(item);
  // book.save();
  // res.redirect("/books");

  //for POST
   var item={
    title: req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
  }
  
  var book = Bookdata(item);
  book.save();
  res.redirect("/books");

});

adminRouter.post("/update",function(req,res){

  //console.log(req.body.image);
  console.log(req.body.imgdb);
  var img;
 
  if(req.body.image==""){
   img=req.body.imgdb;
 }
 else{
   img=req.body.image;
 }

  var item = {
      title: req.body.title,
      author:req.body.author,
      genre:req.body.genre,
      image: img
  }

 const id= req.body.objectid;
 console.log(id);

 var book = Bookdata(item);

 Bookdata.findByIdAndUpdate({_id:id},item)
          .then(function(){
  console.log("Update success");
  res.redirect("/books");
 })

});


adminRouter.post("/delete",function(req,res){

const id= req.body.objectid;
console.log(id);

Bookdata.findOneAndDelete({_id:id}).then(function(){
  console.log("Delete success"); 
  res.redirect("/books");
  
})


});

module.exports = adminRouter;