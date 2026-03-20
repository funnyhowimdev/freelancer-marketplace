import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Chat = ({ clientId, freelancerId }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('https://your-socket-server-url'); // Change to your socket server URL
        setSocket(newSocket);

        newSocket.on('receiveMessage', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => newSocket.close();
    }, []);

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const messageData = {
                senderId: clientId,
                recipientId: freelancerId,
                content: message,
                timestamp: new Date().toISOString(),
            };
            socket.emit('sendMessage', messageData);
            setMessages((prevMessages) => [...prevMessages, messageData]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">  
                {messages.map((msg, index) => (
                    <div key={index} className={msg.senderId === clientId ? 'sent' : 'received'}>
                        <p>{msg.content}</p>
                        <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;