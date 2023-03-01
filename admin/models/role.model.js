import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    role: {
        type: [String],
        default: ['monitoring', 'project', 'activity', 'notes', 'reminder', 'notification', 'attendance', 'leaves', 'employee'],
        enum: ['monitoring', 'project', 'activity', 'notes', 'reminder', 'notification', 'attendance', 'leaves', 'employee'],
    },
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
