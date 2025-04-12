import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import { NavItem } from './NavItem'
import { menuItems } from './menuData'

export const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" href={"/"} >F2DF</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} styles={styles} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
