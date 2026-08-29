//this middle ware is used so only authorised people will be able to access the user data

import jwt from 'jsonwebtoken'; // braces
import { JWT_SECRET } from '../config/env.js';
import User from '../models/user.model.js';

export const authorize = async (req, res, next) => {
  try {
    let token;

    
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ message: 'unauthorized' })
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'unauthorized' });
    }

    req.user = user;
    next(); // Added: missing next() call
  } catch (error) {
    res.status(401).json({ message: 'unauthorized', error: error.message });
  }
};

