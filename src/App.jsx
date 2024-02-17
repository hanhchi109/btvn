import React, { useState, useEffect } from 'react';
import './App.css';

const initialFriends = ['Joel', 'Ellie', 'Charles'];

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);
  const [friendMessages, setFriendMessages] = useState(() => {

    const storedMessages = localStorage.getItem('friendMessages');
    return storedMessages ? JSON.parse(storedMessages) : {
      Joel: [],
      Ellie: [],
      Charles: []
    };
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('friendMessages', JSON.stringify(friendMessages));
  }, [friendMessages]);

  const sendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        timestamp: Date.now()
      };
      setFriendMessages({
        ...friendMessages,
        [selectedFriend]: [...friendMessages[selectedFriend], newMessage]
      });

      const updatedFriends = [selectedFriend, ...friends.filter(friend => friend !== selectedFriend)];
      setFriends(updatedFriends);

      setInputValue('');
    }
  };

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  const sortedMessages = friendMessages[selectedFriend].slice();

  return (
    <div className="chat-container">
      <div className="friend-list">
        {friends.map((friend, index) => (
          <div
            key={index}
            className={`friend ${friend === selectedFriend ? 'active' : ''}`}
            onClick={() => handleFriendClick(friend)}
          >
            {friend}
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div className="chat-list">
          {sortedMessages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
              <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default App;