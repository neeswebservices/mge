import bcrypt from 'bcryptjs';
import { createError } from '../../config/error.js';
import { HttpResponse } from '../../config/HttpResponse.js';
import { ACCESS_SECRET } from '../../env.js';
import { createAccessToken } from '../../services/functions.js';
import SAdmin from '../../models/user.model.js';

export const userRegister = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) return next(createError(400, 'Invalid request!'));

        const userExist = await SAdmin.findOne({ username });
        if (userExist) {
            return res.status(403).json({
                msg: 'Username is already exists,Try using another.',
            });
        }
        // sadm = system admin
        const sadm = new SAdmin({
            username,
            password: await bcrypt.hash(password, 12),
        });

        await sadm.save();

        return res.send({ msg: 'Admin created Please Login!' });
    } catch (error) {
        next(error);
    }
};

export const userLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) return next(createError(400, 'Invalid request!'));
        const user = await SAdmin.findOne({ username }).select('+password');
        if (!user) return next(createError(403, "User doesn't exist!"));

        if (!(await bcrypt.compare(password, user?.password))) return next(createError(400, 'Invalid Credentials!'));

        const accesstoken = createAccessToken(user.id, ACCESS_SECRET);

        req.session.accesstoken = `Bearer ${accesstoken}`;
        // req.session.cookie.expires = new Date(Date.now() + hour)

        return res.send(new HttpResponse(200, 'User Logged In'));
    } catch (error) {
        next(error);
    }
};

export const userLogout = async (req, res, next) => {
    try {
        await req.session.destroy(function err(err) {
            throw err;
        });
        return res.send(new HttpResponse(200, 'User Logged out!'));
    } catch (error) {
        throw error;
    }
};
