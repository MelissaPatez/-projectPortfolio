const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECT ); 
mongoose.set('debug', true);

