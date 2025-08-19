import React from 'react';
import '../styles/PTIT_CNTT1_Session12_Bai07_UserLayout.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      Header
    </div>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      Navigation
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <div className="menu02">
      Menu
    </div>
  );
};

const Cart: React.FC = () => {
  return (
    <div className="cart">
      Cart
    </div>
  );
};

const Article: React.FC = () => {
  return (
    <div className="article">
      Article
    </div>
  );
};

const Main: React.FC = () => {
  return (
    <div className="main">
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </div>
  );
};
const UserLayout: React.FC = () => {
  return (
    <div className="user-layout">
      <Header />
      <Navigation />
      <div className="content-wrapper">
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
};

export default UserLayout;
