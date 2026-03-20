'use strict';

const jwt = require('jsonwebtoken');

// Middleware for user authentication and role-based access control
function authMiddleware(roles = []) {
  // roles param can be a single role string (e.g. Role.USER)
  // or an array of roles (e.g. [Role.USER, Role.ADMIN])
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    // Check if token is not provided
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token.' });
      }

      // Check user roles
      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Access denied.' });
      }

      // Save user details to request object
      req.user = decoded;
      next();
    });
  };
}

module.exports = authMiddleware;
