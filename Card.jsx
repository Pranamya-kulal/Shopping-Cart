[19:32, 2/17/2024] Sameeksha: // Card.js
import React, { useState } from 'react';
import './Card.css';
import './Navbar.css';
import './SearchBar.css'
import SearchBar from './SearchBar'; // Import the SearchBar component

const card = [
  {
    id: 1,
    image: "https://i5.walmartimages.com/asr/9f228d9e-4582-434c-9cd3-2ffaa45b4000_1.c42b0b1a13cdfe59c2ecfa4a55dec434.jpeg",
    info: "Women's Loose Wrap Long Sleeve Shirt Office Blouse Shirts Tops",
    price: 699,
  },
  {
    id: 2,
    image: "https://th.bing.com/th/id/OIP.7S4EdVtyQT1hQfu8MDa4bQHaJ3?w=186&h=248&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    info: "Women's Stylish Indian Daily Wear Tunics Kurtis",
    price: 899,
  },
  {
    id: 3,
    image: "https://th.bing.com/th/id/OIP.COsFUo_pfOAB9g9j7Lk4LwHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.4&…
[19:32, 2/17/2024] Sameeksha: // npm i react-router-dom
//Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <ul>

        <li>
          <Link to="/Card">WOMEN </Link>
        </li>


      </ul>
    </>
  )
}