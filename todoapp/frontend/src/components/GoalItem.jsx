import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal, updateGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    text: goal.text,
    status: goal.status,
    priority: goal.priority,
    dueDate: goal.dueDate ? goal.dueDate.split('T')[0] : '',
  })

  const { text, status, priority, dueDate } = formData

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onUpdate = () => {
    dispatch(updateGoal({ id: goal._id, text, status, priority, dueDate }))
    setIsEditing(false)
  }

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>

      {!isEditing ? (
        <>
          <h2>{goal.text}</h2>
          <p><strong>Status:</strong> {goal.status}</p>
          <p><strong>Priority:</strong> {goal.priority}</p>
          <p>
            <strong>Due Date:</strong>{' '}
            {goal.dueDate ? new Date(goal.dueDate).toLocaleDateString() : 'Not set'}
          </p>

          {/* Action buttons */}
          <button onClick={() => setIsEditing(true)} className='edit'>
            Edit
          </button>
          <button
            onClick={() => dispatch(deleteGoal(goal._id))}
            className='close'
          >
            X
          </button>
        </>
      ) : (
        <>
          {/* Editable form */}
          <input
            type='text'
            name='text'
            value={text}
            onChange={onChange}
          />

          <select name='status' value={status} onChange={onChange}>
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Completed'>Completed</option>
          </select>

          <select name='priority' value={priority} onChange={onChange}>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>

          <input
            type='date'
            name='dueDate'
            value={dueDate}
            onChange={onChange}
          />

          <button onClick={onUpdate} className='save'>
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className='cancel'>
            Cancel
          </button>
        </>
      )}
    </div>
  )
}

export default GoalItem
