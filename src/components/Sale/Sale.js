import React,{useContext,useState} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Trending from '../Trending/Trending'
import styles from './Sale.module.scss'
import { AiOutlineShoppingCart,AiOutlineSmile } from "react-icons/ai";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {ProductsContext,actions } from '../store'
import {Link} from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import ScrollToTop from "react-scroll-to-top"

const Sale = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const [show,setShow] = useState(false)
    return (
        <div className={styles.sale}>
            <Container>
            <Header/>
            {show && 
                <Alert className='alert2' variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="fs-5"><AiOutlineSmile size={20}/>You've add a new item in your cart!</Alert.Heading>
              </Alert>   
            }
             <Row lg={4} md={3} xs={2}>
                {state.products.map((product) => (
                    <Col key={product.id}>
                        <Card className={styles.card}>
                            <Link to={`/products`}>
                                <Card.Img variant="top" src={product.src}  alt={product.name} onClick={()=> { dispatch(actions.showProduct(product))}}/>
                            </Link>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text><del className='fs-6'>${product.price}</del> <span className='text-danger'>${parseFloat(product.price*0.8).toFixed(2)}</span></Card.Text>
                                <Button variant="light" lg="md" className='w-100 btn-cart' onClick={()=> {
                                    dispatch(actions.addProductToCart(product))
                                    setShow(true)
                                    {setTimeout(function(){
                                        setShow(false)
                                    },3000)}
                                    }}><AiOutlineShoppingCart/> Add to cart</Button>
                                <Link to={`/products`}>
                                <Button className="w-100 btn-purchase"  onClick={()=> {dispatch(actions.showProduct(product))}}>Purchase</Button>
                            </Link>

                            </Card.Body>
                            </Card>
                    </Col>
                ))}
             </Row>
                    <Trending />
            <ScrollToTop smooth top="20" />
            <Footer/>
            </Container>
        </div>
    )
}

export default Sale
