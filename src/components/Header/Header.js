import {Link} from "react-router-dom"
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
          <Link to="/">  <h1>Gucci</h1> </Link>
        </div>
    )
}

export default Header
