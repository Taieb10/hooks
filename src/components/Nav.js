import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ReactStars from "react-rating-stars-component";
const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <form>
              <input type="text" placeholder="search..." />
              <button>search</button>
            </form>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav;
