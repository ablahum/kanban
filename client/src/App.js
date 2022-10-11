import { useEffect, useState } from 'react'
import { getAll } from './apis/todos'

import { Todo, Create, Delete, Header, Update } from './components'
import { moveOne } from './apis/items'

const App = () => {
  const [todos, setTodos] = useState([])

  const [createTrigger, setCreateTrigger] = useState(false)
  const [updateTrigger, setUpdateTrigger] = useState(false)
  const [deleteTrigger, setDeleteTrigger] = useState(false)

  const label = ['Task 1', 'Task 2', 'Task 3', 'Task 4']
  const type = ['primary', 'secondary', 'danger', 'success']

  const getTodos = async () => {
    try {
      const res = await getAll()

      setTodos(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  useEffect(() => {
    getTodos()
  }, [createTrigger, updateTrigger, deleteTrigger])

  const moveItem = async (itemId, todoId) => {
    const payload = { targetTodoId: todoId }
    try {
      const res = await moveOne(itemId, payload)

      if (res.status === 200) {
        getTodos()
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Header />
      <div className='container todo-wrapper'>
        {todos?.map((todo, i) => (
          <>
            <Todo
              label={label[i]}
              type={type[i]}
              title={todo.title}
              setCreateTrigger={setCreateTrigger}
              setUpdateTrigger={setUpdateTrigger}
              setDeleteTrigger={setDeleteTrigger}
              moveItem={moveItem}
              todo={todos}
              items={todo.Items}
              todoId={todo.id}
              todoLength={todos.length}
              index={i}
            />
          </>
        ))}

        <Create trigger={createTrigger} setTrigger={setCreateTrigger} todoId={createTrigger} />
        <Update trigger={updateTrigger} setTrigger={setUpdateTrigger} itemId={updateTrigger} />
        <Delete trigger={deleteTrigger} setTrigger={setDeleteTrigger} itemId={deleteTrigger} />
      </div>
    </>
  )
}

export default App
