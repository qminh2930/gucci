import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

import styles from './Hero.module.scss'
const Hero = () => {
    return (
        <Container fluid lg={4}>
            <Row>
                <Col className={styles.col}>
                    <h1>G</h1>
                    <div className={styles.col__content}>
                        <h2>Beaty & convinience</h2> 
                        <p>Going to the beach, it is not just a question <br/> of sun and sand. A day at the beach is <br/>
                about attaining the perfect beach style. <br/> That is why you love the VLARK </p>
                    </div>
                 <Link to="/sale">   <button> Shop Now</button> </Link>
                </Col>
                <Col className={styles.col}>
                    <h1>U</h1>
                    <h1>C</h1>
                </Col>
                <Col className={styles.col}>
                    <img alt='1' src='https://i.imgur.com/Y8GU87d.jpg'></img>
                    <h1>C</h1>
                </Col>
                <Col className={styles.col}>
                <img alt='2' src='https://i.imgur.com/8kvQcPO.jpg'></img>
                    <h1>I</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero
