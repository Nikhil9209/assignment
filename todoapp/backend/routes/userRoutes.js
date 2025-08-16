const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getMe,
} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

// Temporary GET route to avoid 404 on /api/users
router.get('/', (req, res) => {
  res.json({ message: 'User list endpoint not implemented yet' })
})

// Temporary GET route to avoid 404 on /api/users/:id
router.get('/:id', (req, res) => {
  res.json({ message: `User details for ID ${req.params.id} not implemented yet` })
})

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router
