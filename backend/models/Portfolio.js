const mongoose =  require('mongoose');

const { Schema } = mongoose;

//obj vai descrever o que vai ser armazenado no portfolio
const portfolioSchema = new Schema( {
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: Date.now() 
});

                               //nome do model e qual shema ele deve respeitar
module.exports = mongoose.model('portfolio', portfolioSchema);