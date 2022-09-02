import { useEffect, useState } from 'react'
import { Todo, Create, Delete, Header, Update } from './components'

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTrigger, setNewTrigger] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false)
  const [deleteTrigger, setDeleteTrigger] = useState(false)

  const urlTodos = 'https://todos-project-api.herokuapp.com/todos'
  const headers = {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2NjIzMDU1MTh9.WRnD3WVtUvZ92568seR9wU-xFwLMy--LkH-gDC17ah4',
  }

  useEffect(() => {
    fetch(urlTodos, { headers })
      .then((res) => res.json())
      .then((res) => setTodos(res))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Header />
      <div className='container card-wrapper'>
        {todos?.map((t) => (
          <Todo desc={t.description} label={t.title} type='primary' setNewTrigger={setNewTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} id={t.id} />
        ))}
        {/* <Todo desc='January - March' label='Group Task 1' type='primary' setNewTrigger={setNewTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} />
        <Todo desc='April - June' label='Group Task 2' type='secondary' setNewTrigger={setNewTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} />
        <Todo desc='July - September' label='Group Task 3' type='danger' setNewTrigger={setNewTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} />
        <Todo desc='October - December' label='Group Task 4' type='success' setNewTrigger={setNewTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} /> */}
      </div>
      <Create trigger={newTrigger} setTrigger={setNewTrigger} />
      <Update trigger={updateTrigger} setTrigger={setUpdateTrigger} />
      <Delete trigger={deleteTrigger} setTrigger={setDeleteTrigger} />
    </>
  )
}

export default App
