import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai02_Calculation.css';

const Calculation: React.FC = () => {
  const calculations = [
    { expression: '10 + 10', result: 10 + 10 },
    { expression: '10 - 10', result: 10 - 10 },
    { expression: '10 * 10', result: 10 * 10 },
    { expression: '10 / 10', result: 10 / 10 }
  ];

  return (
    <div className="calculation-container">
      <h1 className="calculation-title">Danh sách kết quả(Bài 2)</h1>
      <ul className="calculation-list">
        {calculations.map((calc, index) => (
          <li key={index} >
            {calc.expression} = {calc.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculation;