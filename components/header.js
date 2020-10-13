import Link from 'next/link'
import barStyles from '../styles/bars.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <ul className={barStyles.ul_menubar}>
      <li className={barStyles.li_menu}>  <Link href="/"  style={{ textDecoration: 'none' }}>Home</Link></li>
      <li className={barStyles.li_about}>  <Link href="/about">About</Link></li>
    </ul>
    <Link href={`/`}>
     <img className="img-header" src="/images/Fluss.jpg" alt="Header image"/>
    </Link>
  </header>
)

export default Header


/*

<header
  style={{
    background: `rebeccapurple`,
    marginBottom: `1.45rem`,
  }}
>


<div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div>*/
