// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    googleId: { type: String }, // ID dari Google
    profilePicture: { type: String }, // URL foto profil dari Google
    role: { type: String, enum: ["user"], default: "user", required: true },
    phone: { type: String },
    address: { type: String },
    bio: { type: String },
    services: [{ type: String }],
    pricePerDay: { type: Number },
    rating: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);