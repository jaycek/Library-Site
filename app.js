const express = require('express');
const app = new express();

const loginRouter = require('./src/routes/loginroute');
const registerRouter = require('./src/routes/registerroute');
const aboutRouter = require('./src/routes/aboutroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');
const profileRouter = require('./src/routes/profileroute');
const adminRouter = require('./src/routes/adminroute');

app.set("view engine","ejs");
app.set("views",__dirname+"/src/views");


app.use(express.urlencoded({extended:true}));//middleware for specifiying POST request in addbook, edit and save
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use(express.static(__dirname+'/public')); //for css,images and local js files


app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/about',aboutRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/profile',profileRouter); 
app.use('/addbook',adminRouter);
app.use("/authors/add",authorsRouter);
app.use("/authors/addauthor",authorsRouter);



app.get('/',function(req,res){
    res.render("home",{nav:[{link:'/',name:'Home'},{link:'/login',name:'Login'},{link:'/register',name:'Sign Up'},
                            {link:'/about',name:'About Us'}
                           ]
                      });
});

console.log("Bookworld server is running on port 3000");
app.listen(3000);