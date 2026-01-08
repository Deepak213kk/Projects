import React from 'react';
import './scroll.css' ;
import juice1 from '../../assets/Orange.png';
import juice2 from '../../assets/Pineapple.png';
import juice3 from '../../assets/MOsambi.png';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const ScrollBar = () => {
  const products = [
    {
      id: 1,
      name: 'Mango Magic',
      desc: 'Freshly squeezed mango delight packed with vitamins.',
      img: juice1,
      price: '₹120'
    },
    {
      id: 2,
      name: 'Green Detox',
      desc: 'A perfect blend of spinach, apple, and lemon for a healthy start.',
      img: juice2,
      price: '₹150'
    },
    {
      id: 3,
      name: 'Berry Blast',
      desc: 'A sweet & tangy mix of strawberries, blueberries, and grapes.',
      img: juice3,
      price: '₹130'
    }
    , {
      id: 4,
      name: 'Berry Blast',
      desc: 'A sweet & tangy mix of strawberries, blueberries, and grapes.',
      img: juice3,
      price: '₹130'
    }
    , {
      id: 5,
      name: 'Berry Blast',
      desc: 'A sweet & tangy mix of strawberries, blueberries, and grapes.',
      img: juice3,
      price: '₹130'
    }
  ];

  return (
    <>
    
    <div className="featured-container ">
      {products.map((products)=>(
          <div className='featured-scroll'>
        <div className='feature-img'> <img src={products.img} alt="" /></div>
        <div>
          <h5> {products.name}</h5>
          <p>
           {products.desc}
          </p>
          <span>{products.price}</span>
          <div className='review'> <IoMdStar color='#FFC107'/><IoMdStar color='#FFC107'/> <IoMdStar color='#FFC107'/> <IoMdStarHalf color='#FFC107'/> <IoMdStarOutline color='#FFC107'/> </div>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
        
      </div>
      ))}    
    </div>
    </>
  );
};

export default ScrollBar;
