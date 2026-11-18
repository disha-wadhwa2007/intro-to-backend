import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGODB_URI
        );

        console.log(
            `\nMongoDB connected successfully!!!
            DB HOST: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;