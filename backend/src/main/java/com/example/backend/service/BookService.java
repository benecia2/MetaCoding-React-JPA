package com.example.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.domain.Book;
import com.example.backend.repository.BookRepsitory;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BookService {
	
	private final BookRepsitory bookRepsitory;
	
	@Transactional	// 서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리.
	public Book 저장하기(Book book) {
		return bookRepsitory.save(book);
	}
	
	@Transactional(readOnly = true)	// JPA 변경감지라는 내부 기능 활성화X, update시의 정합성을 유지해주며 insert의 유령데이터현상(팬텀현상)못막는다.
	public Book 상세보기(Long id) {
		return bookRepsitory.findById(id).orElseThrow(()-> new IllegalArgumentException("id를 확인해주세오"));	
	}
	
	@Transactional(readOnly = true)
	public List<Book>전체보기(){
		return bookRepsitory.findAll();
	}
	
	@Transactional
	public Book 수정하기(Long id, Book book) {
		// 더티채킹 update
		Book bookEntity = bookRepsitory.findById(id).orElseThrow(()-> new IllegalArgumentException("id를 확인해주세요"));
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		return bookEntity;
	}
	
	@Transactional
	public String 삭제하기(Long id) {
		bookRepsitory.deleteById(id);
		return "ok";
	}
}
