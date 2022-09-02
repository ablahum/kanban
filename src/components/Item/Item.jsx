import { useState } from 'react'
import { ReactComponent as More } from '../../assets/more.svg'
import { ReactComponent as Right } from '../../assets/right.svg'
import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Edit } from '../../assets/edit.svg'
import { ReactComponent as Delete } from '../../assets/trash.svg'

const Progress = ({ done }) => {
  const [style, setStyle] = useState({})

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    }

    setStyle(newStyle)
  }, 200)

  return (
    <div className='progress'>
      <div className='progress-done' style={style}></div>
    </div>
  )
}

const Dropdown = ({ setUpdateTrigger, setDeleteTrigger }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='dropdown'>
      <More onClick={() => setIsActive(!isActive)} style={{ cursor: 'pointer', color: '#757575' }} />
      {isActive && (
        <>
          <div className='dropdown-content'>
            <div className='dropdown-item right'>
              <Right style={{ marginRight: '1rem' }} />
              Move Right
            </div>
            <div className='dropdown-item left'>
              <Left style={{ marginRight: '1rem' }} />
              Move Left
            </div>
            <div className='dropdown-item edit' onClick={() => setUpdateTrigger(true)}>
              <Edit style={{ marginRight: '1rem' }} />
              Edit
            </div>
            <div className='dropdown-item trash' onClick={() => setDeleteTrigger(true)}>
              <Delete style={{ marginRight: '1rem' }} />
              Delete
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export const EmptyItem = () => {
  return (
    <>
      <h2 className='thin' style={{ color: '#757575', backgroundColor: '#fafafa', border: '1px solid #E0E0E0', borderRadius: '4px', margin: '6px 0', padding: '.5rem 1rem' }}>
        No Task
      </h2>
    </>
  )
}

const Item = ({ title, percent, trigger, setUpdateTrigger, setDeleteTrigger }) => {
  return (
    <>
      <div className='title'>
        <h2 style={{ color: '#404040' }}>{title}</h2>
      </div>

      <div className='progress-wrapper'>
        <Progress done={percent} />
        <h3 className='thin' style={{ color: '#757575', margin: '0 26px 0 12px' }}>
          {percent}%
        </h3>
        <Dropdown trigger={trigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} />
      </div>
    </>
  )
}

export default Item
