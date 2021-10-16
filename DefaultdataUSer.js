const {data} = require('../backend/sample.js');
const User = require('./src/models/User.js');

const Defaultdata = async () => {
    
    try{
         await User.deleteMany({});
        await   User.insertMany(data);
        console.log("data imported ")
    
    }catch(e){
        console.log(`Error :-${e}`)
    }
    
    }
    
    
    module.exports =Defaultdata ;