import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai04_ColorBox.css';

const ColorBox: React.FC = () => {
  const colors = ['red', 'blue', 'green'];

  return (
    
    <div className="color-box-container"> 
    <h1>Bài 4</h1>
      {colors.map(color => (
        <div key={color} className={`color-box ${color}`}>
          Box
        </div>
      ))}
    </div>
  );
};
export default ColorBox;
