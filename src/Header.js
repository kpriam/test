import {Navbar, Nav} from 'react-bootstrap'
import {Link} from "react-router-dom";

function Header(){
	return(
		 	<div>
		 	      <Navbar bg="primary" variant="dark">
				    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
				    <Nav className="me-auto">
				      <Link>Home</Link>
				      <Link>Add</Link>
				      <Link>Update</Link>
				      <Link>Login</Link>
				      <Link>Register</Link>
				    </Nav>
				  </Navbar>
		 	</div>
		)
}
export default Header