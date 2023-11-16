import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams} from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();
  const navigete = useNavigate()

  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetch('/book/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  // 삭제
  const deleteBook = () => {
    fetch('/book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          alert("삭제완료")
          navigete("/")
        } else {
          alert('삭제실패');
        }
      });
  };

  const updateBook = () => {
    navigete('/updateForm/' + id);
  };

  return (
    <div>
      <h1>책 상세보기</h1>
      <Button variant="warning" onClick={updateBook}>
        수정
      </Button>
      {'  '}
      <Button variant="danger" onClick={deleteBook}>
        삭제
      </Button>
      <hr />
      <h3>{book.author}</h3>
      <h1>{book.title}</h1>
    </div>
  );
};

export default Detail;