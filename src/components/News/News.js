import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import video from '../store/video.mp4'
import video2 from '../store/video2.mp4'
import Trending from '../Trending/Trending'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import ScrollToTop from "react-scroll-to-top"

const Review = ({src,h1,p,h2='Shop the collection',reverse=false,background}) =>{
    return (
        <Row lg={2} md={2} xs={1} style={{background:background}} className={reverse ? ' p-5 my-5 d-flex flex-row-reverse' :'p-5 my-5 d-flex' }> 
        <Col className='justify-content-center d-flex flex-column '>
            <h1 className='text-center text-white fs-1 mb-5'>{h1}</h1>
            <p className='text-center fs-5 fw-light text-white '> {p}</p> 

       <Link to='/sale' ><h2 className='text-center fs-3 my-5 fw-light text-white'>{h2}</h2></Link>
        </Col>
        <Col>
        <img src={src} class='img-responsive rounded' alt="ngoc-trinh-2k4" />
        </Col>
    </Row>
    )
}
const News = () => {
    return (
        <Container  fluid >
            <Header />
            <video  className='w-100 d-block' autoplay="autoplay" loop muted>
                <source src={video} type="video/mp4"  />
            </video>
            <div className='w-75 justify-content-center d-flex flex-column ' style={{margin:'0 auto'}}>
                <Review src='https://i.imgur.com/udXje04.jpg' h1='The Rao family interprets the new Gucci Bambino collection' p="The editorial shot 
                by Giovanni Corabi in Sardinia is a hymn to freedom and the beauty of sharing" background='#072056' />

                <Review src='https://i.imgur.com/6guElfz.jpg' h1="Everything You Need to Know About the House of Gucci Before Watching House of Gucci " 
                p="The real-life Gucci saga is so outrageous that to this day commentators lean on fiction—Greek tragedies, Dynasty, Dallas, 
                even the Borgias—in their attempts to explain the drama.
                 Let’s add Shakespeare to that list because Juliet’s famous line: “What’s in a name? / That which we call a rose / 
                 By any other name would smell as sweet” seems to get right to the heart of the matter." reverse background='#E9917E' />

                 <Review src='https://i.imgur.com/WsZfZDA.jpg' p="Gucci’s “Hacking” of Balenciaga Is a Fashion Power Move—And Finally Available to Shop" 
                 h1='LEONISA' background='#3B3A38' />
            </div>
            <Trending />
            <video className='w-100 d-block' autoplay="autoplay" loop muted>
                <source src={video2} type="video/mp4"  />
            </video>
            <ScrollToTop />
            <Footer />
        </Container>
    )
}
export default News
