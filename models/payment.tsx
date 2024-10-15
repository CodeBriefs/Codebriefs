import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {type: String, required: true},
    to_user: {type: String, required: true},
    oid: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {type: String, default: "https://via.placeholder.com/150"},
    role: {type: String, default: "user"},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

const payment = model("Payment", userSchema);
export default mongoose.models.payment || payment;