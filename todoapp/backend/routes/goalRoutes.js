const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// GET + POST
router.route('/').get(protect, getGoals).post(protect, setGoal)

// UPDATE + DELETE
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

module.exports = router
