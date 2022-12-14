import { ReactComponent as PlusCircle } from '../../assets/plus-circle.svg'

export const Button = ({ type, confim, setTrigger, onSubmit }) => {
  return (
    <>
      <button className='btn btn-outline' onClick={() => setTrigger(false)} style={{ marginRight: '10px' }}>
        <h2 className='heading'>Cancel</h2>
      </button>
      <button className={`btn ${type}`} onClick={onSubmit}>
        <h2 style={{ color: '#fff' }}>{confim}</h2>
      </button>
    </>
  )
}

export const Label = ({ label, type }) => {
  return (
    <button className={`btn btn-label-${type}`}>
      <h3 className='thin' style={{ textTransform: 'uppercase' }}>
        {label}
      </h3>
    </button>
  )
}

export const NewTask = ({ setTrigger, todoId }) => {
  return (
    <div className='new-task' style={{ cursor: 'pointer', marginTop: '2px' }} onClick={() => setTrigger(todoId)}>
      <PlusCircle style={{ width: '1rem', marginRight: '5px' }} />
      <h3 className='thin'>New Task</h3>
    </div>
  )
}
