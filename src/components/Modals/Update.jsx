import { ReactComponent as Close } from '../../assets/close.svg'
import { Button } from '../Buttons'
import Form from '../Form'

const Update = ({ trigger, setTrigger }) => {
  return trigger ? (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-head'>
          <h1>Edit Task</h1>
          <Close style={{ cursor: 'pointer' }} onClick={() => setTrigger(false)} />
        </div>

        <div className='modal-body'>
          <Form />
        </div>

        <div className='modal-footer'>
          <Button button='btn-primary' confim='Edit Task' setTrigger={setTrigger} />
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Update
