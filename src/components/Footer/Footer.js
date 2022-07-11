import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footer__list}>
                <div>
                    <h3>Help</h3>
                   <ul>
                        <li>Customer Service</li>
                        <li>Live Chat</li>    
                        <li>Careers</li>
                        <li>Find a Store </li>
                   </ul>
                </div>
                <div>
                    <h3>ORDERS & RETURNS</h3>
                   <ul>
                        <li>Order Status</li>
                        <li>Shipping Information</li>    
                        <li>Return Policy</li>
                   </ul>
                </div>
                <div>
                    <h3>VS APP</h3>
                   <ul>
                        <li>IPhone</li>
                        <li>Android</li>    
                   </ul>
                </div>
                <div>
                    <h3>THE VS CREDIT CARD</h3>
                   <ul>
                        <li>Learn More</li>
                        <li>Pay My Bill</li>    
                   </ul>
                </div>
            </ul>
        </div>
    )
}

export default Footer
