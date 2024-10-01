const User = require('../models/userModel')
exports.getData = async (req, res) => {
  try {
    const data = await User(req.userId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
