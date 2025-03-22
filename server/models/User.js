const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    displayName: { type: String },
    email: { type: String, unique: true },
    profilePicture: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
