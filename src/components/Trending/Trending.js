import React,{useContext} from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import {ProductsContext,actions } from '../store'
import styles from './Trending.module.scss'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
const Trending = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const trendArray = [...state.products.filter(product => product.onTrend === true)]
    return (
        <div className={styles.trend}>
            <h1>TRENDING NOW</h1> 
            <Carousel show={4}  slide={1} swiping={true} rightArrow={true} leftArrow={true}>
                 {trendArray.map(product => (
                     <Card className={styles.card} key={product.id}>
                    <Link to="/products"> <Card.Img alt={product.name} onClick={()=> {dispatch(actions.showProduct(product))}} variant="top" src={product.src} /></Link>
                     <Card.Body>
                         <Card.Title>{product.name}</Card.Title>
                         <Card.Text> <span className={styles.price}>${parseFloat(product.price*0.8).toFixed(2)}</span></Card.Text>
                         
                     </Card.Body>
                  </Card>
                 ))}
            </Carousel>
        </div>
    )
}

export default Trending
