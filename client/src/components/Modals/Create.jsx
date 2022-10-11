import { useState } from 'react'

import { ReactComponent as Close } from '../../assets/close.svg'
import { Button } from '../Buttons'
import Form from '../Form'
import { createOne } from '../../apis/items'

const Create = ({ trigger, setTrigger, todoId }) => {
  const [data, setData] = useState({
    name: '',
    progress_percentage: 0,
  })

  const handleSubmit = async () => {
    try {
      const res = await createOne(todoId, data)

      alert(res.data.msg)
      setTrigger(false)
    } catch (err) {
      alert(err.response.data.msg)
      console.log(err)
    }
  }

  return trigger ? (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-head'>
          <h1>Create Task</h1>
          <Close style={{ cursor: 'pointer' }} onClick={() => setTrigger(false)} />
        </div>

        <div className='modal-body'>
          <Form data={data} setData={setData} />
        </div>

        <div className='modal-footer'>
          <Button type='btn-primary' confim='Save Task' setTrigger={setTrigger} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Create
