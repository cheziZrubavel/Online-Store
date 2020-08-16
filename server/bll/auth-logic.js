const cryptography = require("../helpers/cryptography");
const User = require("../models/user");

async function isUsernameAlreadyExistAsync(username) {
    let user = await User.find({
        "username": username
    }).exec();
    if (user.length > 0) {
        return true;
    }
    return false;
};

function registerUserAsync(user) {
    user.password = cryptography.hash(user.password);
    user.save();
    delete user.password;
    return user;
};

async function isUserExistAsync(credentials) {

    // Hash password:
    credentials.password = cryptography.hash(credentials.password);
    
    let user = await User.find({
        "username": credentials.username,
        "password": credentials.password
    }).exec();
    if (user.length > 0) {
        return user;
    }
    return false;
};

async function isIdentityExistAsync(identity) {
    let existIdentity = await User.find({
        "identity": identity
    }).exec();
    if (existIdentity.length > 0) {
        return true;
    }
    return false;
};

module.exports = {
    isUsernameAlreadyExistAsync,
    registerUserAsync,
    isUserExistAsync,
    isIdentityExistAsync
};