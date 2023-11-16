package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.domain.Book;

//	@Repository 적어야 스프링 IOC에 빈으로 등록이 되는데 JpaRepository를 extends하면 생략 가능하다
// JpaRepository는 CRUD 함수를 가지고 있다.
public interface BookRepsitory extends JpaRepository<Book, Long> {

}
