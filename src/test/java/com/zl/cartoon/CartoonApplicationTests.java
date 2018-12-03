package com.zl.cartoon;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.nio.charset.Charset;
import java.util.Base64;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CartoonApplicationTests {

	@Test
	public void contextLoads() {

	}

	private String content() {
		String content = "周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书";
		content = Base64.getEncoder().encodeToString(content.getBytes(Charset.defaultCharset()));

		return content;
	}


}
