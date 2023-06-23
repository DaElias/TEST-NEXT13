import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

userSchema.methods.comparePassword = async function (enteredPassword)
{
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema) || mongoose.models.User