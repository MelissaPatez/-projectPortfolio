const mongoose =  require('mongoose');
const slug =  require('slug');

const { Schema } = mongoose;

//obj vai descrever o que vai ser armazenado no portfolio
const portfolioSchema = new Schema( {

    title: { type: String, required: true, unique: true },

    slug: {
        type: String, 
        required: true, 
        unique: true, default: function(){return slug(this.title)} 
    },

    description: { type: String, required: true },

    createdAt:{
        type: Date,
        default: mongoose.now()
    }

});

                               //nome do model e qual shema ele deve respeitar
module.exports = mongoose.model('Portfolio', portfolioSchema);