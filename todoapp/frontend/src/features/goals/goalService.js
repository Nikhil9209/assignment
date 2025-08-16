import axios from 'axios'

const API_URL = '/api/goals/' // ✅ yahi pe backend ka route set hoga

// 👉 Create goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)
  return response.data
}

// 👉 Get all goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// 👉 Delete goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)
  return { id: goalId } // slice me filter karne ke liye id bhej rahe hain
}

// 👉 Update goal
const updateGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL + goalData.id, goalData, config)
  return response.data
}

// Export all services
const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
}

export default goalService
