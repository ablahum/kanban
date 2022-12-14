import { Label, NewTask } from '../Buttons'
import { Item, EmptyItem } from '../Item'

const Todo = ({ label, title, type, setCreateTrigger, setUpdateTrigger, setDeleteTrigger, items, todoId, moveItem, todo, todoLength, index }) => {
  return (
    <div className={`todo todo-${type}`}>
      <Label label={label} type={type} />
      <h3 style={{ margin: '.5rem 0', color: '#404040', textTransform: 'capitalize' }}>{title}</h3>

      {items.length === 0 ? (
        <EmptyItem />
      ) : (
        items.map((item, i) => (
          <div className='item' key={i}>
            <Item title={item.name} percent={item.progress_percentage} setUpdateTrigger={setUpdateTrigger} setDeleteTrigger={setDeleteTrigger} moveItem={moveItem} itemId={item.id} todoLength={todoLength} index={index} todo={todo} />
          </div>
        ))
      )}

      <div className='new-task'>
        <NewTask setTrigger={setCreateTrigger} todoId={todoId} />
      </div>
    </div>
  )
}

export default Todo
