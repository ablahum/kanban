const Form = ({ data, setData }) => {
  const handleChange = (e) => {
    let newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  return (
    <form>
      <div className='form-item'>
        <label for='task-name'>
          <h3>Task Name</h3>
        </label>
        <input type='text' id='name' name='task-name' placeholder='Type your task' onChange={handleChange} />
      </div>
      <div className='form-item'>
        <label for='progress'>
          <h3>Progress</h3>
        </label>
        <input type='text' id='progress_percentage' name='progress' placeholder='70%' onChange={handleChange} />
      </div>
    </form>
  )
}

export default Form
