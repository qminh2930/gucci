import styles from './Navigation.module.scss'
import { AiOutlineShoppingCart,AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import {ProductsContext } from '../store'
import {useContext,useState} from 'react'
const Navigation = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const [toggle,setToggle] = useState(false)
    return (
         <Container fluid>
         <nav className={styles.navBar}>      
           <Link  to="/"><h1 className={styles.logo}>Gucci</h1></Link>
           <div className={styles.menuIcon} onClick={()=> setToggle(!toggle)}>
                <>{toggle ? <AiOutlineClose size={20}/> :  <AiOutlineMenu size={20} />} </>
           </div>
            <ul className={ toggle ? `${styles.nav__menu} ${styles.active}` : `${styles.nav__menu}`}>
            <Link to="/collection" > <li className={styles.nav__links}>Spring 2021 </li></Link>
           <Link to="/sale" ><li className={styles.nav__links}>Sales </li></Link>
            <Link to="/news"> <li className={styles.nav__links}> News</li> </Link>
            {state.login ?
            <li className={`${styles.nav__links}  ${styles.account}`}>{`Hello ${state.CurrentUserName} `}</li>
               :
               <Link to="/login" >  <li className={styles.nav__links} >Login/Register</li></Link>
          }
            <Link to="/payment"><li className={styles.nav__links} > <AiOutlineShoppingCart/> My Cart({state.yourCart.length})</li></Link> 
            </ul>
         </nav>
         </Container>
    )
}


export default Navigation
