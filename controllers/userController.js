// Import needed models.
const { User } = require('../models');

// Export all the User controllers.
module.exports = {
    // Get all Users.
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Get a single user.
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({
                        user,
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Create a new user.
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    
    // Delete a user.
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(400).json({ message: 'No such User exists '})
                : res.json({ message: 'User successfully deleted '})
                )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    //Update a old user.
    updateUser(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId },
            {username: req.body.username},
            {new: true }
        )
            .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user found with that ID'})
                : res.json(user)
                )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    // Add a new friend to a user's friend list.
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId },
            { $addToSet: {friends: req.params.friendId}},
            { $addToSet: {friends: req.body.friendId}},
            {new: true }
        )
            .then((user) => 
            !user
            ? res.status(404).json({ message: 'No user found with that ID'})
            : res.json(user) 
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    // Remove a friend from a user's friend list.
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId },
            { $pull: {friends: req.params.friendId}},
            {new: true }
        )
        .then((user) => 
        !user
        ? res.status(404).json({ message: 'No user found with that ID'})
        : res.json(user) 
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
    
};