import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai08.css';

const TableRow: React.FC<{ stt: number; fullName: string; birthDate: string; gender: string; address: string; action: string }> = ({
  stt,
  fullName,
  birthDate,
  gender,
  address,
  action
}) => {
  return (
    <tr>
      <td>{stt}</td>
      <td>{fullName}</td>
      <td>{birthDate}</td>
      <td>{gender}</td>
      <td>{address}</td>
      <td>
        <button className="action-btn">{action}</button>
      </td>
    </tr>
  );
};

const TableHeader: React.FC = () => {
  return (
    <tr>
      <th>STT</th>
      <th>Họ và tên</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th>Địa chỉ</th>
      <th>Hành động</th>
    </tr>
  );
};

const Bai08: React.FC = () => {
  const users = [
    {
      stt: 1,
      fullName: "Marcellus Lockyer",
      birthDate: "21/03/1983",
      gender: "Nam",
      address: "New York",
      action: "Sửa"
    },
    {
      stt: 2,
      fullName: "Maria",
      birthDate: "11/02/1999",
      gender: "Nữ",
      address: "London",
      action: "Sửa"
    }
  ];

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow
              key={user.stt}
              stt={user.stt}
              fullName={user.fullName}
              birthDate={user.birthDate}
              gender={user.gender}
              address={user.address}
              action={user.action}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bai08;