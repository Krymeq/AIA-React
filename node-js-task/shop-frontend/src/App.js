import React from 'react';
import './App.css';
import './style.css';
import ItemList from './components/ItemList';
import Popup from './components/Popup';
import {Animated} from "react-animated-css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.nextBasketID = 3;
    this.removeItemByID = this.removeItemByID.bind(this);
    this.addItemToBasket = this.addItemToBasket.bind(this);
    this.state = {
        items : [],
        basket: [],
        showBasket: false
    }
  }

  componentDidMount(){
      fetch("http://localhost:8080/shop/list")
          .then(resp => resp.json())
          .then(e => this.setState({items: e}));
  }

  removeItemByID(id){
    this.setState({
      basket: this.state.basket.filter(e => e.id !== id)
    })
  }

  // Funkcja dodaje item 
  addItemToBasket(item){
    item.itemID = item.id;
    item.id = this.nextBasketID;
    let arr = this.state.basket;
    let found = false;
    for(let elem of arr) {
      if(elem.itemID === item.itemID){
        let quantity = parseInt(item.quantity) + parseInt(elem.quantity);
        let itemInList = this.state.items.filter(e => e.id === item.itemID)[0];
        console.log(itemInList);
        if(itemInList.quantity < quantity){
          alert(`Za mało przedmiotów typu ${item.name} w magazynie!`);
          return;
        }
        elem.quantity = quantity;
        found = true;
        break;
      }
    }
    if(!found){
      arr.push(item);
      this.nextBasketID++;
    }
    this.setState({basket: arr});
  }

  render(){
    return (
      <div className="App">
        <header>
          <span></span>
          <span>
            Alledrogo
          </span>
          <div className="popup-container">
            <div className="basket-button" onClick={()=>this.setState({showBasket: !this.state.showBasket})}>
              <img src="/assets/basket.png" alt="404"/>
            </div>
              <Animated 
                  animationIn="fadeIn" 
                  animationOut="fadeOut" 
                  animationInDuration={200} 
                  animationOutDuration={200} isVisible={this.state.showBasket}>
                <Popup 
                  items={this.state.basket} 
                  removeItem={this.removeItemByID}/>
              </Animated>
          </div>
        </header>
        <main>
          <ItemList 
            items={this.state.items}
            addItem={this.addItemToBasket}
          />
        </main>
      </div>
    );
  }
}

export default App;
