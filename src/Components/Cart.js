import React, {Component} from "react";
// import Item from './Item'


export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item:  [
                {
                    name: "Plot Twist Heel - Black",
                    image: "https://i.pinimg.com/564x/42/2d/9b/422d9ba64b48fb58e4cd7f6eefa8af43.jpg",
                    price: 39.95,
                    quantity: 1
                },
                {
                    name: "Oliver Heel in Neon",
                    image: "https://i.pinimg.com/564x/60/3d/bf/603dbf623158ebd591925fdc67f5b9fe.jpg",
                    price: 24.99,
                    quantity: 1
                },
                {
                    name: "Strappy Gem Sandals",
                    image: "https://i.pinimg.com/564x/5e/ec/33/5eec33127e64f9c57bd6200abc4d868d.jpg",
                    price: 14.99,
                    quantity: 1
                }
            ]
        }
        
    }
    
    IncrementItem = (index) => {
        this.setState({ quantity: this.state.item[index].quantity += 1 })
        console.log(this.state.item[index].quantity)
    }

    DecreaseItem = index => {
        if (this.state.item[index].quantity > 0) {
            this.setState({ quantity: this.state.item[index].quantity -= 1 })
            console.log(this.state.item[index].quantity)
        }
        
    }


    render() {
        let item1 = this.state.item[0];
        let item2 = this.state.item[1];
        let item3 = this.state.item[2];
        let subtotal = ((item1.quantity * item1.price)+ (item2.quantity * item2.price) + (item3.quantity * item3.price)).toFixed(2);
        let tax = 0.04 * subtotal;
        let totalQty = (item1.quantity + item2.quantity + item3.quantity);
        let totalAmount = ((item1.quantity * item1.price)+ (item2.quantity * item2.price) + (item3.quantity * item3.price) + tax).toFixed(2);
        

        return (
        <div className = "container">
        <div className = 'left'>
            <div className = 'cartTotal'>
                <h1>cart total: {totalAmount}</h1>
            </div>
                <div className = "itemList">
                    <div className = 'item'>
                        <img src={item1.image} alt='item'></img>
                        {/* <div className="details"> */}
                        <div className = "itemName">{item1.name}</div>
                        <div className = "qty">
                        <button onClick={(item1) => {this.DecreaseItem(0)}} >-</button>
                        {/* <span> {this.state.item[0].quantity} </span> */}
                        <span> {this.state.item[0].quantity} </span> 
                        <button onClick={()=> {this.IncrementItem(0)}} >+</button>
                        </div>
                        {/* <input type="checkbox" value="on">Gift Wrap for $4</input> */}
                        {/* </div> */}
                        <div className = "itemPrice">{item1.price * item1.quantity}</div>
                        {/* <input type="checkbox/" */}
                        

                    </div>
                    <div className = 'item'> 
                        <img src={item2.image} alt='item'></img>
                        <div className = "itemName">{item2.name}</div>
                        <div>
                        <button onClick={()=>{this.DecreaseItem(1)}}  >-</button>
                        <span> {item2.quantity} </span>
                        <button onClick={()=> {this.IncrementItem(1)}} >+</button>
                        </div>
                        <div className = "itemPrice">{item2.price * item2.quantity}</div>
                    </div>
                    <div className = 'item'> 
                        <img src={item3.image} alt='item'></img>
                        <div className = "itemName">{item3.name}</div>
                        <div>
                        <button onClick={()=>{this.DecreaseItem(2)}}  >-</button>
                        <span> {item3.quantity} </span>
                        <button onClick={()=> {this.IncrementItem(2)}} >+</button>
                        </div>
                        <div className = "itemPrice">{item3.price * item3.quantity}</div>
                    </div>
                    {/* <Item image = {item3.image} name={item3.name} quantity = {item3.quantity} price = {item3.price} /> */}
                </div>
            </div>
            <div className = 'rightSide'>
                <div className = "checkout">
                    <h2>order summary</h2>
                    <br />
                </div>
                
                <div className = 'checkout2'>
                    <div className = "subtotalDiv">
                    <h4 className = "subtotal">subtotal</h4>
                    <span className = "totalQty">({totalQty} items) :</span> 
                    </div>
                    <h4>${subtotal}</h4>
                </div>
                <div className = "delivery">
                    <h4 className = "deliveryText">delivery:</h4>      
                    <h4 className = "deliveryPrice">Free</h4>
                </div>
                <div className = "taxes">
                    <h4 className = "tax">estimated tax: </h4>
                <div className = "taxDiv">
                    ${tax.toFixed(2)}
                </div>
                </div>
                <div className = "total">
                    <h2>Total ${totalAmount}</h2>
                </div>
            </div>
        </div>
        );
    }
}   
