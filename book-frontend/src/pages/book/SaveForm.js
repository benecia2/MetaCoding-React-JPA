import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = (props) => {
    const navigete = useNavigate()
    const [book, setBook] = useState({
        title: '',
        author: '',
    });

    const changeValue = (e) => {
    setBook({
        ...book,
        [e.target.name]: e.target.value,
      });
    };
  
    const submitBook = (e) => {
      e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.
  
      fetch('/book/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(book),
      })
        .then((res) => {
          if (res.status === 201) {
            alert("등록완료")
            navigete("/") //홈으로
            return res.json();
          } else {
            return null;
          }
        })
    };
    return (
    <Form onSubmit={submitBook}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={changeValue}
            name="title"
            />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter Author"
            onChange={changeValue}
            name="author"
            />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">글 등록</Button>
    </Form>
    );
};

export default SaveForm;