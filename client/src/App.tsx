import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="Catalog">
      <div className="TopMenu">
        <a className="LogoUrl" href="#">
          <div className="Logo">
            <div className = "LogoName">
            <div className="logoTipeOne">3</div>
            <div className="logoTipeTwo">O</div>
            <div className="logoTipeTwo">O</div>
            <div className="logoTipeThre">K</div>
            </div>
            <div className="LogoInfo">
              All About Literature
          </div>
          </div>
        </a>
        <div className="Cart"></div>
      </div>
      <div className="SearchMenu">
        <div className="History">Home</div>
        <input className="Search" placeholder="Search" type="text" />
      </div>
    </div>
  );
}

export default App;
