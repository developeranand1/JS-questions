import Link from 'next/link'

export const DropdownMenu = ({ submenu, styles }) => {
  return (
    <ul className="dropdown-menu">
      {submenu.map((subItem, idx) => (
        <li key={idx}>
          <Link href={subItem.href} className={`dropdown-item ${styles.navLink}`} >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
