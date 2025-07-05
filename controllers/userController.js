// User controller
const User = require('../model/User');

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Create new user
const createUser = async (req, res) => {
    const { name, email , role} = req.body;
    try {
        const newUser = new User({ name, email, role});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: 'User create aagala' });
    }
};

module.exports = {
    getUsers,
    createUser,
};