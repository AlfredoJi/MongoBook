const { Schema, model } = require('mongoose');

// Schema to create User model.
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 30,
        },
        email: {
            type: String,
            required: true,
            max_length: 30,
        },
        thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
        friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property that counts the amount of friends a user has.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize our User model.
const User = model('user', userSchema);

module.exports = User;