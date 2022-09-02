import { useState } from 'react'
import { ReactComponent as Close } from '../../assets/close.svg'
import { Button } from '../Buttons'
import Form from '../Form'

const Create = ({ trigger, setTrigger }) => {
  const [data, setData] = useState({
    name: 'asd',
    progress_percentage: 20,
  })

  const urlItem = (id) => `https://todos-project-api.herokuapp.com/todos/${id}/items/`
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjIzMDU1MTh9.WRnD3WVtUvZ92568seR9wU-xFwLMy--LkH-gDC17ah4',
  }

  const handleSubmit = () => {
    fetch(urlItem('3'), {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        alert('Add item successful')
        window.location.reload()
      })
      .catch((err) => console.log(err))
  }

  // useEffect(() => {
  //   // fetch(urlItem('3'), { headers })
  //   fetch(urlItem('3'), {
  //     method: 'POST',
  //     headers,
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // }, [])

  return trigger ? (
    <div className='modal-wrapper'>
      <div className='modal'>
        <div className='modal-head'>
          <h1>Create Task</h1>
          <Close style={{ cursor: 'pointer' }} onClick={() => setTrigger(false)} />
        </div>

        <div className='modal-body'>
          <Form />
        </div>

        <div className='modal-footer'>
          <Button button='btn-primary' confim='Save Task' setTrigger={setTrigger} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default Create
