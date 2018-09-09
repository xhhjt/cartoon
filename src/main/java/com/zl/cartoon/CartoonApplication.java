package com.zl.cartoon;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zl.cartoon.dao")
public class CartoonApplication {

	public static void main(String[] args) {
		SpringApplication.run(CartoonApplication.class, args);
	}
}
