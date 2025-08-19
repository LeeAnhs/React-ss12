import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai06_AdminIndex.css';


const Header: React.FC = () => {
  return (
    <div className="header">
      Header
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="menu">
      Menu
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <div className="main">
      Main
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="footer">
      Footer
    </div>
  );
};

const AdminIndex: React.FC = () => {
  return (
    <div className="admin-container">
      <Header />
      <div className="content">
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default AdminIndex;