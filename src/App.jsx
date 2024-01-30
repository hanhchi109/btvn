import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import React, { useState } from 'react';
import './App.css'; 

const App = () => {
  const [value, setValue] = useState("");
  const [nameList, setNameList] = useState([]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onAddName = () => {
    if (value.trim() !== "") {
      setNameList((prevList) => [...prevList, value.trim()]);
      setValue(""); 
    }
  };

  return (
    <div className="Name">
       <h1>Điền tên bạn muốn hẹn hò</h1>
      <form style={{
        display: 'flex',
        gap: "10px",
        height: "60px"
    
      }}>
        <input
          id="input"
          value={value}
          onChange={onChangeInput}
          placeholder="Điền tên bạn muốn hẹn hò"
        />
        <button type="button" onClick={onAddName}>Thêm vào danh sách thành công </button>
      </form>

      <div className="List">
        <h2>Danh sách bạn muốn hẹn hò:</h2>
        <ul>
        {nameList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default App
