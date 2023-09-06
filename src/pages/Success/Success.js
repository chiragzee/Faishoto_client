import React, {useState,useEffect} from 'react'
// import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs';
// import { useStateContext } from '../context/StateContext';
import { runFireworks } from './utils';
import "./Success.scss";
import { useNavigate } from 'react-router-dom';
const Success = () => {
    // const navigate = useNavigate();

    // const handleClick = () =>{
    // navigate("/")
    // }
    
    useEffect(()=>{
          runFireworks();
    }, []);
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>
                Thank you for your order !
            </h2>
            <p className="email-msg">
                Check your email inbox for the receipt
            </p>
            <p className="description">
                If you have any questions, please email
                <a href="mailto:order@example.com" className="email">order@example.com</a>
            </p>
            
                <button className="btn"  type="button" width="300px">
                  Continue Shopping
                </button>
            
        </div>
    </div>
  )
}

export default Success