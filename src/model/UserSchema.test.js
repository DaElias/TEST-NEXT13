import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name_last: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: [true, "Username already exists"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Account already exists"],
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter your email"],
        minLength: [6, "Your password must be at least 6 characters long"],
        select: false, //dont send back password after request
    },
    photo_url: {
        tyepe: String
    },
    gender: {
        type: String,
        default: 'man',
        enum: {
            values: [
                'man',
                'woman',
            ],
        }
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: [
                'user',
                'admin',
                'teacher'
            ],
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

// ENCRYPTION 
userSchema.pre('save', async function (next)
{
    if (!this.isModified('password'))
    {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function (enteredPassword)
{
    return await bcrypt.compare(enteredPassword, this.password)
}


export default mongoose.models.User || mongoose.model('User', userSchema)