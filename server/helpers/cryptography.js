const crypto = require("crypto");

// Secret phrase to salt / encrypt and so on:
const secret = "PutSomeSalt";

// Hash password:
function hash(password) {
    return crypto.createHmac("sha512", secret).update(password).digest("hex");
};

module.exports = {
    hash
}