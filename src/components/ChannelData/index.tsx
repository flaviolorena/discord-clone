import React, { useRef, useEffect } from "react";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";
import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  });
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(10).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Flavio Lorena"
            date="15/03/2022"
            content="Esta é uma mensagem do usuário"
          />
        ))}
        <ChannelMessage
          author="Flavio Lorena"
          date="15/03/2022"
          content="Esta é uma mensagem do usuário"
        />
        <ChannelMessage
          author="Carlos Augusto"
          date="15/03/2022"
          content="Esta é uma mensagem do bot"
          hasMention
          isBot
        />

        <ChannelMessage
          author="Bruno Lopes"
          date="15/03/2022"
          content={
            <>
              <Mention>@Flavio Lorena</Mention>, estou te mencionando
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
