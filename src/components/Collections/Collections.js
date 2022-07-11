import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styles from "./Collections.module.scss"
import Modal from 'react-bootstrap/Modal'
import {useState,memo} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ScrollToTop from "react-scroll-to-top"
const collection = [
    {id: 5,
        image: 'https://i.imgur.com/cl81dMl.jpg'
    },
    {id: 2,
        image: 'https://i.imgur.com/LVsibzt.jpg'
    },
    {id: 3,
        image: 'https://i.imgur.com/rfJk17P.jpg'
    },
    {id: 6,
        image:'https://i.imgur.com/djbjMGF.jpg'
    },
    {id: 1,
        image: 'https://i.imgur.com/iMHNrfZ.jpg'
    },
    {id: 4,
        image: 'https://i.imgur.com/Z394dyo.jpg'
    },
    {id: 7,
        image: 'https://i.imgur.com/o1OrmZI.jpg'
    },
    {id: 8,
        image: 'https://i.imgur.com/3Zjp3KO.jpg'
    },
    {id: 9,
        image: 'https://i.imgur.com/kYs83L8.jpg'
    },
    {id: 10,
        image: 'https://i.imgur.com/aEPXTFO.jpg'
    },
    {id: 11,
        image: 'https://i.imgur.com/KXgtM9s.jpg'
    },
    {id: 12,
        image: 'https://i.imgur.com/Uq4CZWK.jpg'
    },
    {id: 13,
        image: 'https://i.imgur.com/tOMoUKS.jpg'
    },
    {id: 14,
        image: 'https://i.imgur.com/1mrwFVO.jpg'
    },
    {id: 15,
        image: 'https://i.imgur.com/CGnVJd6.jpg'
    },
    {id: 16,
        image: 'https://i.imgur.com/ElMOGZI.jpg'
    },
    {id: 17,
        image: 'https://i.imgur.com/WdNWgpv.jpg'
    },
    {id: 18,
        image: 'https://i.imgur.com/L43an3U.jpg'
    },    
];



const Collections = () => {
    const [item,getItem] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className={styles.gallery}>
            <Header/>
            <Modal show={show} onHide={handleClose}>
                <Image src={item} />
            </Modal>
            <Row xs={1} md={3} lg={3}>
                {collection.filter(item => item.id <= 3).map(item =>(
                    <Col lg={4} key ={item.id}><Image fluid alt="girl" src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }} /></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 3 && item.id <= 6).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }} /></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 6 && item.id <= 9).map(item =>(
                    <Col lg={4} key ={item.id}><Image fluid alt="girl" src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 9 && item.id <= 12).map(item =>(
                    <Col lg={4}key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 12 && item.id <= 15).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <Row xs={1} md={3} lg={3}>
            {collection.filter(item =>item.id > 15 && item.id <= 18).map(item =>(
                    <Col lg={4} key ={item.id}><Image alt="girl" fluid src={item.image} onClick={() =>{
                        handleShow()
                        getItem(item.image)
                    }}/></Col>
                ))}
            </Row>
            <ScrollToTop />
            <Footer/>
        </Container>
    )
}

export default memo(Collections)
