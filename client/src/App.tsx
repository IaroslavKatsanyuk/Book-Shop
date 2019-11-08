import React from 'react';
import Logotype from '../src/img/Vector.png';
import UserLogin from '../src/img/User.png';
import ShoppingCar from '../src/img/shopping cart.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="Catalog">
      <div className="TopMenu">
        <a className="LogoUrl">
          <div className="Logo">
            <div className="LogoName">
              <img src={Logotype} alt="Books" className="LogoType" />
            </div>
            <div className="LogoInfo">All About Literature</div>
          </div>
        </a>
        <a className="LogInUrl">
          <div className="LogIn">Log In</div>
          <img src={UserLogin} alt="Log In" className="ImagelogIn" />
        </a>
        <a className="ShopingCarUrl"><img src={ShoppingCar} alt="Log In" className="ShoppingCar" /></a>

        <div className="Cart"></div>
      </div>
      <div className="SearchMenu">
        <div className="History">Home</div>
        <input className="Search" placeholder="Search" type="text" />
      </div>
      <div className="NamePages">Catalog</div>
      <div className="CurrencyInfo">Currency
      <select className="Сurrency">
          <option value="AUD">AUD</option>
          <option value="BYN">BYN</option>
          <option value="EUR">EUR</option>
          <option value="GPP">GPP</option>
          <option value="PLN">PLN</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="SortInfo">Sort By
      <select className="Sort">
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
        </select>
      </div>
      <div className="Filter">
        <p className="FilterName">CATEGORY</p>
        <div className="FilterCheckbox">
        <input type="checkbox" /> Books<br />
        <input type="checkbox" /> Newspapers<br />
        <input type="checkbox" /> Magazines<br />
        </div>
        <div className="FilterPrice">Price, $</div>
        <div className="FilterSumm">
          <input className="PriceLow" type="text" placeholder="low"/>
          <input className="PriceHigh" type="text" placeholder="high"/>
          <div className="Dolar">$</div>
          <input className="FilterButton" type="button" value="OK" />
          <input type="range" min="0" max="3000" />
        </div>
      </div>
      <div className="Book1">1</div>
      <div className="Book1_2">2</div>
      <div className="Book1_3">3</div>
      <div className="Book1_4">4</div>
      <div className="Book1_5">5</div>
      <div className="Book1_6">6</div>
      <div className="Book1_7">7</div>
      <div className="Book1_8">8</div>
      <div className="Book1_9">9</div>
    </div>
  );
}

export default App;
