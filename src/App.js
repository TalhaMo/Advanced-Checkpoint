import React from 'react';
import ProductsTable from './components/ProductsTable';

let products=[{name:'Smartphone SM-A21S', price:639,category:'Electronics'},{name:'Shoes', price:219,category:'Clothes'},{name:'TV Full HD', price:999,category:'Electronics'},{name:'Shorts', price:39,category:'Clothes'},{name:'Men\'s Skinny Jeans', price:89,category:'Clothes'},{name:'Asus PC X540BA', price:869,category:'Electronics'}]

const App =()=> {
  return (
    <div className="App">
     <ProductsTable products={products}  />
    </div>
  );
}

export default App;
