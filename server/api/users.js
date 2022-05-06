const express = require('express');
const router = express.Router();
const { findAll, save, deleteById, update } = require('../controllers/userController')

// Get all students
router.get('/', findAll);

// Create new student
router.post('/', save);

// Update student
router.put('/:id', update);

// Delete student
router.delete('/:id', deleteById);

module.exports = router;