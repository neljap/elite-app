import ChatBot from "react-simple-chatbot"
import {ThemeProvider} from "styled-components"


const ChatBox = () => {

  const steppes = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      end: true,
    },
  ];

  const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#232A60',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#232A60',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steppes} />
    </ThemeProvider>
  )
}

export default ChatBox