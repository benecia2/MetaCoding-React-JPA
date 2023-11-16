import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
    const [books, setBooks] = useState([]);

    // 함수 실행시 최초 한번 실행 + 상태 값이 변경 될때마다 실행
    useEffect(()=>{
        fetch('/book/')
        .then((res)=> res.json())
        .then((res)=>{
            setBooks(res)
        }); //비동기 함수
    },[])
    return (
        <div>
            {books.map((book)=>(
                <BookItem key={book.id} book={book}/>
            ))}
        </div>
    );
};

export default Home;