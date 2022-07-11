<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand ><Link to="/">Vlark</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link>Features</Link></Nav.Link>
      <Nav.Link><Link>Features</Link></Nav.Link>
      <Nav.Link><Link>Features</Link></Nav.Link>
      <Nav.Link><Link>Features</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><Link>Login/Register</Link></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
// //  <ul className={clsx(styles.nav)}>
// <div className={styles.nav__links}>
// <Link  to="/collection"><li>Collection 2021</li></Link>
//  <li>% Sale %</li>
//  <li>Shipping info</li>
//  <li>About us</li>
//  <li>Search</li>
// </div>
// <div className={styles.nav__auth}>
//  <li>Login/Register</li>
//  <li><AiOutlineShoppingCart/> My Cart </li>
// </div>
// </ul>