import mongoose from 'mongoose';

export const connectMongoDB = async (URI, options = {}) => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(URI, options).then(() => {
        console.log(`MongoDB conected to ${URI.split('/')[2]} ✅`);
    });
    mongoose.connection.on('connected', () => {
        console.log(`DB connected successfully...`);
    });
    mongoose.connection.on('error', (error) => {
        console.log(error.message);
    });
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDb disconnected !');
    });
    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
};
