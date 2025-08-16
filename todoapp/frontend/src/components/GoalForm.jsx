import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [formData, setFormData] = useState({
    text: '',
    status: 'Pending',
    priority: 'Medium',
    dueDate: '',
  })

  const { text, status, priority, dueDate } = formData
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Dispatch goal create action
    dispatch(createGoal({ text, status, priority, dueDate }))

    // Reset form
    setFormData({
      text: '',
      status: 'Pending',
      priority: 'Medium',
      dueDate: '',
    })
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        {/* Goal Text */}
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={onChange}
            required
          />
        </div>

        {/* Status */}
        <div className='form-group'>
          <label htmlFor='status'>Status</label>
          <select
            name='status'
            id='status'
            value={status}
            onChange={onChange}
          >
            <option value='Pending'>Pending</option>
            <option value='In Progress'>In Progress</option>
            <option value='Completed'>Completed</option>
          </select>
        </div>

        {/* Priority */}
        <div className='form-group'>
          <label htmlFor='priority'>Priority</label>
          <select
            name='priority'
            id='priority'
            value={priority}
            onChange={onChange}
          >
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>

        {/* Due Date */}
        <div className='form-group'>
          <label htmlFor='dueDate'>Due Date</label>
          <input
            type='date'
            name='dueDate'
            id='dueDate'
            value={dueDate}
            onChange={onChange}
          />
        </div>

        {/* Submit Button */}
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
