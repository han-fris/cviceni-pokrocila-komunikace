import { Product } from './Product';
import { useState } from 'react';

/*
  Zadání: Budeme chtít, aby uživatel mohl klikat na kousky oblečení a u každého viděl, kolik
    kusů si objednal. Zároveň chceme, aby se mu po kliknutí na kousek oblečení zvýšila celková
    cena objednávky.
  
  Krok 1: V komponentě `Product` založte stav `count` a zařiďte, aby se správně navyšoval a 
    zobrazoval počet kusů, když uživatel kliká na jednodlitvé produkty.

  Krok 2: Do komponenty `Product` přidejte prop `onAddToCart`, která bude očekávat funkci, 
    která se zavolá při kliknutí na produkt a předá se jí cena produktu.

  Krok 3: V komponentě `Ukol3` založte stav `totalPrice`. Také založte funkci  
    `handleAddToCart` s parametrem `price`. Ve funkci zvyšte stav `totalPrice` o vybranou 
    cenu a předejte tuto funkci komponentě `Product` skrze prop `onAddToCart`.
*/

export const Ukol3 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const changeCount1 = () => {
    setCount1(count1 + 1);
  };
  const changeCount2 = () => {
    setCount2(count2 + 1);
  };
  const changeCount3 = () => {
    setCount3(count3 + 1);
  };
  const changeCount4 = () => {
    setCount4(count4 + 1);
  };
  const changePrice = (price) => {
    setFinalPrice(finalPrice + price);
  };

  return (
    <>
      <p>
        Cena: <strong>{finalPrice} Kč</strong>
      </p>
      <div className="products">
        <Product
          image="/clothing/item01.jpg"
          name="Bunda"
          price={500}
          onAddToCart={changePrice}
          onAmountClick={changeCount1}
          value={count1}
        />
        <Product
          image="/clothing/item02.jpg"
          name="Halenka"
          price={1200}
          onAddToCart={changePrice}
          onAmountClick={changeCount2}
          value={count2}
        />
        <Product
          image="/clothing/item03.jpg"
          name="Svetr"
          price={1500}
          onAddToCart={changePrice}
          onAmountClick={changeCount3}
          value={count3}
        />
        <Product
          image="/clothing/item04.jpg"
          name="Mikina"
          price={800}
          onAddToCart={changePrice}
          onAmountClick={changeCount4}
          value={count4}
        />
      </div>
    </>
  );
};
