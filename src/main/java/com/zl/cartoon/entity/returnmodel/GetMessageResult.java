package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class GetMessageResult extends BaseResult {
   private List messages;

    public List getMessages() {
        return messages;
    }

    public void setMessages(List messages) {
        this.messages = messages;
    }
}
