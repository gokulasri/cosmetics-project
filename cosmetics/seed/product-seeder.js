const product = require('../models/product');
var Product=require('../models/product');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/cosmetics');

var products=[
    new Product({
        imagePath:"https://boldoutline.in/wp-content/uploads/2021/06/SUGAR-Cosmetics-Rage-For-Coverage-24Hr-Foundation_-07-Vanilla-Latte_Rs.799-min-1359x1536.jpg",
        title:"Apple",
        price:120
    }),
    new Product({
        imagePath:"https://m.media-amazon.com/images/I/51LbZuTuakL.jpg",
        title:"Banana",
        price:60
    }),
];
var done=0;

async function saveProduct(product){
    try{
        await product.save();
        done++;
        if(done==products.length){
            exit();
        }
    }
    catch(err){
        console.log(err);
    }
}

products.forEach(async (product)=>{
    await saveProduct(product);
});

function exit(){
    mongoose.disconnect();
}

mongoose.connect('mongodb://localhost:27017/cosmetics',{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log("Database connected");
    }
)
.catch(err =>{
    console.log("databse connection error: " + ErrorEvent);
})

module.exports=Product;