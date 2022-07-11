import React,{useContext,useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {ProductsContext,actions } from '../store'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { AiFillStar,AiOutlineStar,AiOutlineFlag,AiOutlineEnvironment,AiOutlineSmile,AiOutlineCheckCircle } from "react-icons/ai";
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
const ProductCard = () => {
    const [state,dispatch] = useContext(ProductsContext);
    const product = state.productInfo
    const [show,setShow] = useState(false)
    const [buy,setBuy] = useState(true)
    const [shown, setShown] = useState(false);
    const isLogin = state.login
    return (
        <Container >
            <Header/>
            {isLogin ? <Modal  show={shown} onHide={()=> setShown(false)}>
                <Alert className="fs-3 fw-normal text-center w-100 m-auto " variant="success" onClose={() => setShown(false)} dismissible>
                    <Alert.Heading  style={{width:'100%',height:"10rem" }} className="d-flex justify-content-center align-items-center"><AiOutlineCheckCircle color="green"/> Thanks you for payment! {state.CurrentUserName}</Alert.Heading>
                 </Alert>  
            </Modal>:
            <Modal  show={shown} onHide={()=> setShown(false)}>
            <Alert className="fs-3 fw-normal text-center w-100 m-auto " variant="danger" onClose={() => setShown(false)} dismissible>
            <Alert.Heading  style={{width:'100%',height:"10rem" }} className="d-flex justify-content-center align-items-center">You still not login, please login !</Alert.Heading>
            </Alert>  
    </Modal> 
        }
            
            {show && 
                <Alert className='alert2' variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="fs-5"><AiOutlineSmile size={20}/>You've add a new item in your cart!</Alert.Heading>
              </Alert>   
            }
             {buy ? <Row lg={2} md={2} xs={1}  className="mt-3">
                 <Col>
                        <Card.Img className='img-fluid rounded w-75 h-100' src={product.src} />
                 </Col>
                 <Col>
                      <Card.Body>
                        <Card.Title className="fs-1">{product.name}</Card.Title>
                        <Card.Text className="fs-3"><AiFillStar color="yellow"/><AiFillStar color="yellow" /><AiFillStar  color="yellow"/><AiFillStar color="yellow" /><AiOutlineStar color="yellow" /></Card.Text>
                        <Card.Text className="fs-3"><del className="fs-6">${product.price}</del> <span className='text-danger'>${parseFloat(product.price*0.8).toFixed(2)}</span></Card.Text>
                        <Button size='lg' variant="light" className={`fs-3 fw-normal px-5 py-3`} onClick={()=> {
                                dispatch(actions.addProductToCart(product))
                                setShow(true)
                                {
                                    setTimeout(function(){
                                        setShow(false)
                                    },3000)
                                }
                            }
                        }  style={{backgroundColor:'#F4C6CF',outLine:'none' , border:'none'}}>ADD TO BAG</Button>
                        <Button size='lg' variant="light" className={`fs-3 fw-normal px-5 py-3`}  style={{backgroundColor:'#C8DDB7',outLine:'none',marginLeft:'3rem' , border:'none'}} onClick={()=> setBuy(false)}>PURCHASE</Button>
                        <Card.Text className="fs-5 fw-light mt-3" ><AiOutlineEnvironment size={20}/>Free return on all VN orders <u className='ms-3'>Learn More</u></Card.Text>
                        <Button size='lg' variant="light" className="mb-3 fs-5 fw-light" ><AiOutlineFlag size={20}  />Find it near you <u className="ms-3">Select Store</u></Button>
                        <h3 className="fs-4 fw-bold mb-3 font-monospace">PRODUCT DESCRIPTION</h3>
                        <p className="fs-6 lh-lg">Smooth, seamless and forever comfortable, this panty features a cheeky cut complete with raw cut edges that are invisible under the tightest clothes, even leggings.</p>
                        <ul className="fs-5 lh-lg fw-normal">
                            <li>Low rise</li>
                            <li>Smooth moisture-wicking fabric</li>
                            <li>Shimmer finish</li>
                            <li>Minimal back coverage, lots of cheek peek</li>
                            <li>Machine wash</li>
                            <li>Imported</li>

                        </ul>

                      </Card.Body>
                 </Col>
            </Row> : <Row lg={2} md={2} xs={1}  className="mt-3">
                 <Col>
                        <Card.Img  className='img-fluid rounded w-50 ' src={product.src} />
                        <Card.Body>
                        <Card.Title className="fs-1">{product.name}</Card.Title>
                        <Card.Text className="fs-3"><AiFillStar color="yellow"/><AiFillStar color="yellow" /><AiFillStar  color="yellow"/><AiFillStar color="yellow" /><AiOutlineStar color="yellow" /></Card.Text>
                        <Card.Text className="fs-3"><del className="fs-6">${product.price}</del> <span className='text-danger'>${parseFloat(product.price*0.8).toFixed(2)}</span></Card.Text>
                        <Card.Text className="fs-5 fw-light mt-3" ><AiOutlineEnvironment size={20}/>Free return on all VN orders <u className='ms-3'>Learn More</u></Card.Text>
                        <Button size='lg' variant="light" className="mb-3 fs-5 fw-light" ><AiOutlineFlag size={20}  />Find it near you <u className="ms-3">Select Store</u></Button>
                        <h3 className="fs-4 fw-bold mb-3 font-monospace">PRODUCT DESCRIPTION</h3>
                        <p className="fs-6 lh-lg w-50">Smooth, seamless and forever comfortable, this panty features a cheeky cut complete with raw cut edges that are invisible under the tightest clothes, even leggings.</p>
                        <ul className="fs-5 lh-lg fw-normal">
                            <li>Low rise</li>
                            <li>Smooth moisture-wicking fabric</li>
                            <li>Shimmer finish</li>
                            <li>Minimal back coverage, lots of cheek peek</li>
                            <li>Machine wash</li>
                            <li>Imported</li>
                            <Button size='lg' variant="light" className={`fs-3 fw-normal px-5 py-3`} onClick={()=> {
                           dispatch(actions.addProductToCart(product))
                           setShow(true)
                           {setTimeout(function(){
                               setShow(false)
                           },3000)}}} style={{backgroundColor:'#F4C6CF',outLine:'none' , border:'none'}}>ADD TO BAG</Button>
                        </ul>

                      </Card.Body>
                 </Col>
                 <Col className="mt-5 ">
                      <h3 className="fs-1">Payment Details</h3>
                      <p className="fs-5 mb-5">Complete your purchase by providing your payment details</p>
                      <label className="fw-bold fs-5 mb-2" for="email">Enter your email</label>
                        <input className="d-block fs-4 form-control w-50 mb-3 border p-1 " type="email" id="email" name="email"></input>
                        <label className="fw-bold fs-5 mb-2" for="name">Card holder name:</label>
                        <input className="d-block fs-4 form-control w-50 mb-3 border p-1 " type="text" id="name" name="name"></input>
                        <label for="code" className="fw-bold fs-5 mb-2">Discount Code:</label>
                        <input className="d-block fs-4 form-control w-50 mb-5 border p-1 " type="text" id="code" name="code"></input>
                        <label for="number" className="fw-bold fs-5 mb-2">Phone Number:</label>
                        <input className="d-block fs-4 form-control w-50 mb-5 border p-1 " type="tel"  id="number" name="number"></input>
                        <ul className="fs-3  mb-5 fw-light list-group">
                            <li className="list-group-item d-flex justify-content-between w-50">Subtotal:<span>${product.price}</span></li>
                            <li className="list-group-item d-flex justify-content-between w-50">Discount:<span>20%</span></li>
                            <li className="list-group-item d-flex justify-content-between w-50">VAT:<span>5%</span></li>
                            <li className="list-group-item d-flex justify-content-between w-50">Total:<span>${parseFloat(product.price*0.8*1.02).toFixed(2)}</span></li>
                        </ul>
                             <Button onClick={()=> setShown(true)} variant="primary" size="lg" className="fw-light rounded d-flex justify-content-center fs-3 w-50">Pay ${parseFloat(product.price*0.8*1.02).toFixed(2)}</Button>
                 </Col>
            </Row> }
            <Footer/>
        </Container>
    )
}

export default ProductCard
