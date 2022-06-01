import './Chat.css'

import Message from "../Message/Message";
import UserInputs from "../UserInputs/UserInputs";

const Chat = () => {
  return (
    <div className="chat">
      <Message type="received" content="ciaodshdfhdfhfdijhgbfd" />
      <Message type="sent" content="ciaodshdfhdfhfdijhgbfddgdshdfhdfbgjfdbgjfdhbgfdjgbfdjgbfdjgnbfdjgnfdgjdjgdfsjg" />

      <UserInputs />
    </div>
  )
}

export default Chat