import {Container,Navbar,Button} from 'react-bootstrap';

function MyNavbar() {
    return ( 
        <>
         <Navbar className="navbar">
      <Container>
        <Navbar.Brand className='fs-5 fw-bold text-danger' href="#home">MovieList</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="outline-danger me-4">Login</Button>{' '}
            <Button variant='danger' type="submit">Register</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
     );
}

export default MyNavbar;