import { Stomp } from '@stomp/stompjs';
import React from 'react'
import SockJS from 'sockjs-client';
import styled from 'styled-components';

const Homewrap = styled.div`
  width: 100%;
  height: 100vh;
  background: #F9F5EB;
  padding: 50px 30px;
`

const UserEnter = styled.div`
  margin: 0 auto;
  text-align: cetner;
`


function Home() {

  let stompClient = null;
// wss://iq200test.ml/wss/641/jlkolz2r/websocket
  
  // const socket = new WebSocket('wss://iq200test.ml/wss')



  /***  stomp Debug console log disabled  ***/
  // stompClient.debug = () => {};



  const onConnected = () => {
    console.log("✅ 연결!");
    stompClient.subscribe('/topic/public', (e) => console.log(e))
    stompClient.send("/app/chat.addUser", {}, JSON.stringify({sender: 'React 입장한다', type: 'JOIN', content: '메세지'}))
    stompClient.send("/app/chat.sendMessage", {}, JSON.stringify({sender: 'React 말한다', type: 'CHAT', content: '메세지'}))
  }

  const onDisconnected = () => {
    console.log("💨 나가!", new Date());
    // stompClient.unsubscribe('sub-0');  <-- 상관없음 (구독을 안하는것 / send 받지않겠다)
    stompClient.disconnect(() => console.log("나갔다."));
  }

  // stompClient.connect({}, onConnected , () => console.log("연결실패"))

  const enter = async () => {
    // const socket = new WebSocket('ws://1.212.9.203:39083/websocket/ws')
    // const socket = new WebSocket('wss://iq200test.ml/wss')
    const socket = new SockJS('https://iq200test.ml/ws')
    // const socket = new SockJS('http://1.212.9.203:39083/websocket/ws')
    stompClient = Stomp.over(socket)
    stompClient.connect({}, onConnected , () => console.log("❌ 연결실패"))
  }

// https://iborymagic.tistory.com/93


  // socket.addEventListener("open", () => {
  //   console.log("Connected to Server ✅");
  // });
  // socket.onopen = () => {
  //   console.log("Connected to Server ✅");
  //   socket.send("browser에서 전송 !")
  // }

  // socket.onclose = (message) => {
  //   console.log('message from server : ', message.data)
  // }

  // socket.addEventListener("close", () => {
  //   console.log("Disconnected from Server ❌");
  // })
  // socket.onclose = () => {
  //   console.log("Disconnected from Server ❌");
  // }




  return (
    <Homewrap>
      Home
      <button onClick={enter}>들어가기</button>
      <button onClick={onDisconnected}>나가기</button>
      <UserEnter>

      </UserEnter>
      
    </Homewrap>
  )
}

export default Home