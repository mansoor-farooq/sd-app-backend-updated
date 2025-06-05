const jwt = require('jsonwebtoken');
// Generate a JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '8h' }); // 6-hour expiry
};

// Verify a JWT token
/**
 * Verifies a JWT token and returns the decoded payload.
 * If the token is invalid or expired, returns null.
 *
 * @param {string} token - The JWT token to verify
 * @returns {object|null} The decoded payload or null if invalid/expired
 */
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null; // Token is invalid or expired
    }
};



exports.generateToken = generateToken;
exports.verifyToken = verifyToken;