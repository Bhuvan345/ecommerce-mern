const { default: mongoose } = require("mongoose")

const mondbUrl = "mongodb+srv://alpha01ewp:ptmrnY02Zrpi0C2E@cluster0.12gp4sb.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}