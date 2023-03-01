import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    roles: {
        type: [String],
    },


});
