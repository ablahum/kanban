import { useEffect, useState } from 'react'
import { showTodos } from './apis/todos'
import { Todo, Create, Delete, Header, Update } from './components'

const App = () => {
  const [todos, setTodos] = useState([])

  const [todoId, setTodoId] = useState(null)

  const [createTrigger, setCreateTrigger] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false)
  const [deleteTrigger, setDeleteTrigger] = useState(false)

  const label = ['Task 1', 'Task 2', 'Task 3', 'Task 4']
  const type = ['primary', 'secondary', 'danger', 'success']

  const getData = async () => {
    try {
      const res = await showTodos()

      setTodos(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <div className='container todo-wrapper'>
        {todos?.map((todo, i) => (
          <>
            <Todo label={label[i]} type={type[i]} title={todo.title} setCreateTrigger={setCreateTrigger} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} items={todo.Items} />
            <Create trigger={createTrigger} setTrigger={setCreateTrigger} todoId={todo.id} />
          </>
        ))}
        {/* <Update trigger={updateTrigger} setTrigger={setUpdateTrigger} itemId={todo.Items.id} /> */}
        {/* <Delete trigger={deleteTrigger} setTrigger={setDeleteTrigger} itemId={todo.Items.id} /> */}
      </div>
    </>
  )
}

export default App
