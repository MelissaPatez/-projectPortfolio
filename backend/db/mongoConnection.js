const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT, {useNewPasser: true, useUnifiedTopology: true }, () => {
    console.log("connected to mongodb");
}); 
