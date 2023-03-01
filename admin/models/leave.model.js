import mongoose, { Schema } from 'mongoose';

const leaveSchema = new mongoose.Schema({
    title: {
        type: String,
        default: 'Leave',
    },
    casualLeaves: [
        {
            title: {
                type: String,
                required: true,
            },
            checked: {
                type: Boolean,
                required: true,
            },
        },
    ],
    paidLeaves: [
        {
            title: {
                type: String,
                required: true,
            },
            checked: {
                type: Boolean,
                default: true,
            },
            numberPerYear: {
                type: Number,
                min: [0, 'Invalid days number less than 1'],
            },
        },
    ],
});

const Leave = mongoose.model('Leave', leaveSchema);

export default Leave;
