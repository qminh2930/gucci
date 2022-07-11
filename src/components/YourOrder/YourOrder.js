import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {useContext,useState} from 'react'
import {ProductsContext,actions } from '../store'
import {AiOutlineCheck,AiOutlineClose} from 'react-icons/ai'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {Link} from 'react-router-dom'
import Trending from '../Trending/Trending'
import Modal from 'react-bootstrap/Modal'
function EmptyCart() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert variant="danger" className="m-5 w-100 p-5 text-center" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! Your Cart is Empty!</Alert.Heading>
          <p>
                Please buy something
          </p>
        <Link to='/sale' > <button className="fs-3 bg-info p-3 rounded border-0 text-white">Shop Now</button> </Link>
        </Alert>
      );
    }
    return <Button  className="m-5" onClick={() => setShow(true)}>Show Alert</Button>;
}

const orderNumber = Math.floor(Math.random()*1000)
const YourOrder = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const today = new Date();
    const isItem = state.yourCart.length > 0
    const [shown, setShown] = useState(false);
    const isLogin = state.login
    const Total =  state.yourCart.reduce((Total,product)=>{
        return Total + product.price;
},0)
    return (
        
        <Container > 
                {isLogin ? <Modal  show={shown} onHide={()=>{
                      {state.yourCart=[]}
                     setShown(false)
                     }}>
                <Alert className="fs-3 fw-normal text-center w-100 m-auto " variant="success" onClose={() => {
                   
                    setShown(false)
                    }} dismissible>
                    <Alert.Heading  style={{width:'100%',height:"10rem" }} className="d-flex justify-content-center align-items-center"><AiOutlineCheck color="green"/> Thanks you for payment! {state.CurrentUserName}</Alert.Heading>
                 </Alert>  
            </Modal>:
            <Modal  show={shown} onHide={()=> setShown(false)}>
            <Alert className="fs-3 fw-normal text-center w-100 m-auto " variant="danger" onClose={() => setShown(false)} dismissible>
            <Alert.Heading  style={{width:'100%',height:"10rem" }} className="d-flex justify-content-center align-items-center">You still not login, please login !</Alert.Heading>
            </Alert>  
          </Modal> }
            <Header/>
            <div  className='w-50 my-0 mx-auto d-flex flex-column justify-content-center align-items-lg-center align-items-md-center align-items-xs-center'>
                {isItem ? 
                    <div >
                         <div className='text-center mt-5'>
                                        <h1>Order #{orderNumber}</h1>
                                        <h3 className="mt-5 ">Status<AiOutlineCheck size={20} color='green' className='me-3'/> <span className='me-3'>Paid</span> <span className='me-3'>Date:  {today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()}</span> </h3>
                                        <h2 className="mt-5">Order Summary</h2>
                            </div>
                            <div>
                                    <ListGroup className="mt-5" variant="flush" style={{height:'20rem', overflowY: 'scroll'}}>
                                        {state.yourCart.map((product,index)=>(
                                            <ListGroup.Item key={product.id} >
                                                <Row>
                                                    <Col><img className="img-thumbnail " style={{with:'30rem',height:'10rem'}} src={product.src}/></Col>
                                                    <Col>
                                                    <Row>
                                                    <Col>
                                                            <h3>{product.name}</h3>
                                                            <p>${product.price}</p>
                                                    </Col>
                                                    <Col>
                                                            <AiOutlineClose 
                                                            onClick={()=> 
                                                                dispatch(actions.deleteProductToCart(index))
                                                            }
                                                            color="green" style={{cursor:'pointer',position:'absolute',top:0,right:0,}} size={20}/>
                                                    </Col>
                                                    </Row>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                            </div>
                        <div>
                              <ul className="fs-3 mt-5  d-flex  mb-5 fw-light list-group" style={{width:'30rem'}}>
                            <li className="list-group-item d-flex justify-content-between ">Subtotal:<span >${Total}</span></li>
                            <li className="list-group-item d-flex justify-content-between ">Discount:<span>20%</span></li>
                            <li className="list-group-item d-flex justify-content-between ">VAT:<span>5%</span></li>
                            <li className="list-group-item d-flex justify-content-between ">Total:<span>${parseFloat(Total*0.8*1.02).toFixed(2)}</span></li>
                         </ul>
                             <Button onClick={()=> setShown(true)} variant="primary" size="lg" className="fw-light rounded  w-100 fs-3 ">Pay ${parseFloat(Total*0.8*1.02).toFixed(2)}</Button>
                         </div>

                </div>
                    : <EmptyCart/>
                }
                </div>
                <Trending />
            <Footer/>
        </Container>
    )
}

export default YourOrder
