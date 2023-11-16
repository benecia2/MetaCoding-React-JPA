import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Nav className="me-auto">
          <Link to="/joinForm" className="nav-link">
            회원가입
          </Link>
          <Link to="/loginForm" className="nav-link">
            로그인
          </Link>
          <Link to="/saveForm" className="nav-link">
            글쓰기
          </Link>
        </Nav>
        <Form>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
          <Button variant="outline-info">Search</Button>
      </Navbar>
      <br />
    </>
  );
};

export default Header;