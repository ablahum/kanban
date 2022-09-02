import { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({
    name: '',
    progress_percentage: 0,
  })
  const [string, setString] = useState('')

  const handleChange = (prev, e) => {
    setData({
      ...prev,
      progress_percentage: e.target.value,
    })
  }

  return (
    <form>
      <div className='form-item'>
        <label for='task-name'>
          <h3>Task Name</h3>
        </label>
        <input type='text' id='task-name' name='task-name' placeholder='Type your task' />
      </div>
      <div className='form-item'>
        <label for='progress'>
          <h3 onClick={() => console.log(data)}>Progress</h3>
        </label>
        <input type='text' id='progress' name='progress' placeholder='70%' />
      </div>
    </form>
  )
}

export default Form
