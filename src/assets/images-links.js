import React, { useState } from 'react';
import LendForm from '../components/LendForm.js';

export const links = [
  {
    label: "Borrow",
    imgSrc:
      "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
  },
  {
    label: "Lend",
    imgSrc:
      "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    
  },
  {
    label: "Buy Coin",
    imgSrc:
      "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
  },
  {
    label: "Sell Coin",
    imgSrc:
      "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
  },
]; 

function ImageLinks() {
  const [showLendForm, setShowLendForm] = useState(false);

  const handleLendClick = () => {
    setShowLendForm(true);
  };

  return (
    <>
      {links.map((item, i) => (
        <div key={i} onClick={item.label === 'Lend' ? handleLendClick : null}>
          <img src={item.imgSrc} alt={item.label} />
          <p>{item.label}</p>
        </div>
      ))}

      {showLendForm && <LendForm onClose={() => setShowLendForm(false)} />}
    </>
  );
}

export default ImageLinks;
