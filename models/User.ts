import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emailOrPhone: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  dob: { type: Date, required: true },
  otp: { type: String },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)