import './header.css'

const Header = () => {
  // const alerts = () => {
  //   alert("Greatness is coming soon to a farm near you, maybe.")
  // }
  return (
    <header>
        <div className='logo'>
            <span className='header-left'>CRESCENT ROBOTICS</span>
        </div>
        <div className='episode'>
            <span className='header-right'>Greatness Is Coming</span>
        </div>
    </header>
  )
}

export default Header