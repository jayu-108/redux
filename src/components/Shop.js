import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
// import { depositMoney, withdrawMoney } from '../state/action-creator';

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <h2>Deposti/Withdraw Money</h2>
            <button className="btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
            Update Balance
            <button className="btn-primary" onClick={()=>{withdrawMoney(100)}}>-</button>
        </div>
    )
}

export default Shop
