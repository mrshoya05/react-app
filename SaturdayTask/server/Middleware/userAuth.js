import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const JWT_KEY = 'hmbjbv';
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
