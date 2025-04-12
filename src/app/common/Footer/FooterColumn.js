import Link from 'next/link'
import headerStyle from '../../styles/Header.module.css'

export const FooterColumn = ({ title, items, className }) => {
  return (
    <div className={className}>
      <h5>{title}</h5>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li className="mb-2" key={index}>
            <Link
              className={`text-decoration-none text-white ${headerStyle.navLink}`}
              href={item.link}
              target="_blank"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
