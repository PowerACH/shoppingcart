import React, {useState} from 'react'
import '../App.css'

export default function Item(props) {
    
    const [state, setState] = useState({
        quantity: props.quantity
        
    });
    
    const IncrementItem = () => {
        setState({quantity: state.quantity + 1 })
        console.log(state.quantity)
    }
       

    const DecreaseItem  = () => {
        if(state.quantity > 0) {
            setState({quantity: state.quantity -= 1 })
            console.log(props.quantity)  
        }
    }
        

    return (
        <div className = 'item'> 
            
            <img src={props.image} alt='item'></img>                  
            
            <div className = "itemName">{props.name}</div>
            
            <div>
            <button onClick={()=> {DecreaseItem(0)}} >-</button>
            <span>{state.quantity}</span>
            <button onClick={()=> {IncrementItem(0)}} >+</button>
            </div>
            <div className = "itemPrice">{props.price * props.quantity}</div>
        </div>
    )
}