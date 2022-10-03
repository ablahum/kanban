import { Button } from '../Buttons'
import { ReactComponent as Exclamation } from '../../assets/danger.svg'
import { ReactComponent as Close } from '../../assets/close.svg'
import { removeItem } from '../../apis/items'

const Delete = ({ trigger, setTrigger, itemId }) => {
  const handleDelete = async () => {
    try {
      const res = await removeItem(itemId)

      console.log(res)
      // window.location.reload()
    } catch (err) {
      console.log(err)
      console.log(err)
    }
  }

  return trigger ? (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-head'>
          <Exclamation style={{ color: 'var(--danger)' }} />
          <h1 style={{ flexGrow: 1, marginLeft: '5px' }}>Delete Task</h1>
          <Close style={{ cursor: 'pointer' }} onClick={() => setTrigger(false)} />
        </div>

        <div className='modal-body'>
          <h2 className='heading thin'>Are you sure want to delete this task? your action can't be reverted.</h2>
        </div>

        <div className='modal-footer'>
          <Button type='btn-primary' confim='Delete' setTrigger={setTrigger} onSubmit={handleDelete} />
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Delete
