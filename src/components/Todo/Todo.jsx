import { useEffect, useState } from 'react'
import { Label, NewTask } from '../Buttons'
import Item from '../Item'
import { EmptyItem } from '../Item'

const Todo = ({ label, desc, type, setNewTrigger, setUpdateTrigger, setDeleteTrigger, id }) => {
  const [items, setItems] = useState([])

  const urlItem = (id) => `https://todos-project-api.herokuapp.com/todos/${id}/items`
  const headers = {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjIzMDU1MTh9.WRnD3WVtUvZ92568seR9wU-xFwLMy--LkH-gDC17ah4',
  }

  useEffect(() => {
    fetch(urlItem(id), { headers })
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className={`card card-${type}`}>
      <div>
        <Label label={label} type={type} />
        <h3 style={{ margin: '.5rem 0', color: '#404040' }}>{desc}</h3>
      </div>

      {items ? (
        items.map((t) => (
          <div className='item'>
            <Item title={t.name} percent={t.progress_percentage} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} />
          </div>
        ))
      ) : (
        <EmptyItem />
      )}

      <div className='new-task'>
        <NewTask setTrigger={setNewTrigger} />
      </div>
    </div>
  )
}

export default Todo
