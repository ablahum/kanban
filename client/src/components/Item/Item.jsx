import { useState } from 'react'

import { More, Right, Left, Edit, Delete, Checklist } from '../../assets'

const Progress = ({ done }) => {
  return (
    <div className='progress'>
      <div className={done === 100 ? 'progress-done' : 'progresses'} style={{ width: `${done}%` }}></div>
    </div>
  )
}

const Dropdown = ({ setUpdateTrigger, setDeleteTrigger, moveItem, itemId, todo, todoLength, index }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='dropdown'>
      <More onClick={() => setIsActive(!isActive)} style={{ cursor: 'pointer', color: '#757575' }} />
      {isActive && (
        <>
          <div className='dropdown-content'>
            {todoLength - 1 !== index && (
              <div className='dropdown-item right' onClick={() => moveItem(itemId, todo[index + 1].id)}>
                <Right style={{ marginRight: '1rem' }} />
                Move Right
              </div>
            )}

            {index !== 0 && (
              <div className='dropdown-item left' onClick={() => moveItem(itemId, todo[index - 1].id)}>
                <Left style={{ marginRight: '1rem' }} />
                Move Left
              </div>
            )}

            <div className='dropdown-item edit' onClick={() => setUpdateTrigger(itemId)}>
              <Edit style={{ marginRight: '1rem' }} />
              Edit
            </div>

            <div className='dropdown-item trash' onClick={() => setDeleteTrigger(itemId)}>
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
    <h2 className='thin' style={{ color: '#757575', backgroundColor: '#fafafa', border: '1px solid #E0E0E0', borderRadius: '4px', margin: '6px 0', padding: '.5rem 1rem' }}>
      No Task
    </h2>
  )
}

export const Item = ({ title, percent, trigger, setUpdateTrigger, setDeleteTrigger, moveItem, itemId, todoLength, index, todo }) => {
  return (
    <>
      <div className='title'>
        <h2 style={{ color: '#404040' }}>{title}</h2>
      </div>

      <div className='progress-wrapper'>
        <Progress done={percent} />

        <div style={{ margin: '0 26px 0 12px' }}>
          {percent === 100 ? (
            <Checklist style={{ width: '1rem', height: '1rem' }} />
          ) : (
            <h3 className='thin' style={{ color: '#757575' }}>
              {percent}%
            </h3>
          )}
        </div>

        <Dropdown trigger={trigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} moveItem={moveItem} itemId={itemId} todoLength={todoLength} index={index} todo={todo} />
      </div>
    </>
  )
}
