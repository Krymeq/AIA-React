import React from 'react';
import PopupItem from './PopupItem'

class Popup extends React.Component {
    render(){
        const items = this.props.items.map(e => 
            <PopupItem 
            item={e} 
            key={e.id} 
            id={e.id} 
            removeItem={this.props.removeItem}
            />)
            
        let totalPrice = 0.0;
        for(let item of this.props.items){
            totalPrice += item.price * item.quantity;
        }
        return (
            <div className="popup">
                {items.length !== 0 ?
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                
                                </th>
                                <th>
                                    Nazwa:
                                </th>
                                <th>
                                    Ilość:
                                </th>
                                <th>
                                    Cena za szt.
                                </th>
                                <th>
                                    Cena razem
                                </th>
                            </tr>
                            {items}
                        </tbody>
                    </table>
                    <span className="total-price">
                        Cena razem: {totalPrice.toFixed(2)}
                    </span>
                </div>     
                
               : <span>Koszyk jest pusty</span>}
            </div>
        )
    }
}

export default Popup;