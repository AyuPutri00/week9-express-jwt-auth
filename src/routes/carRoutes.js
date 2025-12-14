const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const { authorizeRole } = require('../middleware/roleMiddleware');

router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'List mobil' });
});

// ADMIN ONLY (IMPROVEMENT)
router.post('/', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.json({ message: 'Mobil ditambahkan' });
});

module.exports = router;
