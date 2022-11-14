import logo from '../../assets/img/logo.svg'
import './styles.css'

const Header = () => {
  return (
    <header>
      <div className='dsmeta-logo-container'>
        <img src={logo} alt='' />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por <a href='https://github.com/vinicmd'>vinicmd</a>
        </p>
      </div>
    </header>
  )
}

export default Header
