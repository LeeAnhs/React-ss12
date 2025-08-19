import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai03_UserInfo.css';

const UserInfo: React.FC = () => {
  const user = {
    name: 'Nguyễn Văn A',
    gender: 'Nam',
    birthDate: '06/03/2024',
    email: 'nva@gmail.com',
    address: 'Thanh Xuân, Hà Nội'
  };

  return (
    <div className="user-info-container">
      <h1 className="user-info-title">Thông tin cá nhân(Bài 3)</h1>
      <ul className="user-info-list">
        <li>Họ và tên: <strong>{user.name}</strong></li>
        <li>Giới tính: <strong>{user.gender}</strong></li>
        <li>Ngày sinh: <strong>{user.birthDate}</strong></li>
        <li>Email: <strong>{user.email}</strong></li>
        <li>Địa chỉ: <strong>{user.address}</strong></li>
      </ul>
    </div>
  );
};

export default UserInfo;
