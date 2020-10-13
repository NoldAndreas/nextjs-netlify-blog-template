import Link from 'next/link'
import barStyles from '../styles/bars.module.css'

const Footer = ({ siteTitle }) => (
  <footer style={{
          marginTop: `2rem`
        }}>
        <ul className={barStyles.ulfooter_menubar}>
          <li className={barStyles.lifooter_left}> by Andreas Nold &mdash; <a href="https://github.com/NoldAndreas"> Github </a>
            &mdash; <a href="https://www.linkedin.com/in/andreas-nold-8686561/"> LinkedIn </a></li>
          <li className={barStyles.lifooter_right}>  October 2020 </li>
        </ul>
  </footer>

)

export default Footer


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
