import { useState } from 'react'
import { updateItem } from '../../apis/items'
import { ReactComponent as Close } from '../../assets/close.svg'
import { Button } from '../Buttons'
import Form from '../Form'

const Update = ({ trigger, setTrigger, itemId }) => {
  const [data, setData] = useState({
    name: '',
    progress_percentage: 0,
  })

  const handleSubmit = async () => {
    try {
      // const res = await updateItem(itemId, { data })
      console.log(itemId)
      // console.log(res)
      // window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return trigger ? (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-head'>
          <h1>Edit Task</h1>
          <Close style={{ cursor: 'pointer' }} onClick={() => setTrigger(false)} />
        </div>

        <div className='modal-body'>
          <Form data={data} setData={setData} />
        </div>

        <div className='modal-footer'>
          <Button type='btn-primary' confim='Edit Task' setTrigger={setTrigger} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Update
