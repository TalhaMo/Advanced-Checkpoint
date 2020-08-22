import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsTable.css';


const ProductsTable = ({products}) => {  
    //const  {products}=props;
    return (
        <div className='ProductsTable'>
            <Table striped bordered hover size="sm">
                <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => {
              return( <tr  key={index} className={product.category ==='Electronics' ? "electronics" : "clothes"}>
                    <td >{product.name}</td>
                    <td >{`${product.price} TND`}</td>
                    <td >{product.category}</td>
                </tr>
                ) 
            })}
            </tbody>
            </Table>
        </div>

    );
}
ProductsTable.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category:PropTypes.string.isRequired,
    })).isRequired,
}
export default ProductsTable;