import React from 'react';


const FormatName: React.FC = () => {
  const formatName = (user: { firstName: string; lastName: string }) => {
    return `Họ và tên: ${user.firstName} ${user.lastName}`;
  };

  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam"
  };

  return (
    <div>
        <h1>Bài 5</h1>
      <p>{formatName(user)}</p>
    </div>
  );
};

export default FormatName;