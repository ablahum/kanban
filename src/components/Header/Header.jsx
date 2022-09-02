import { ReactComponent as Plus } from '../../assets/plus.svg'

const Header = () => {
  return (
    <div className='header container'>
      <h1>Product Roadmap</h1>
      <button className='btn btn-primary btn-new'>
        <Plus style={{ fontSize: 'var(--h1)' }} />
        Add New Group
      </button>
    </div>
  )
}

export default Header
