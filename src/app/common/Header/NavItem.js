import Link from 'next/link'
import { DropdownMenu } from './DropdownMenu'

export const NavItem = ({ item, styles }) => {
  if (item.submenu) {
    return (
      <li className="nav-item dropdown">
        <Link href="#" className={`nav-link dropdown-toggle text-white ${styles.navLink}`} role="button" data-bs-toggle="dropdown">
          {item.label}
        </Link>
        <DropdownMenu submenu={item.submenu} styles={styles} />
      </li>
    )
  }

  return (
    <li className="nav-item">
      <Link href={item.href} className={`nav-link text-white ${styles.navLink}`}>
        {item.label}
      </Link>
    </li>
  )
}
