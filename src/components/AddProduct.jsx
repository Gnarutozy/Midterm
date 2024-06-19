import React, { useState } from 'react';
import './AddProduct.css';




function AddProduct() {
  const [product, setProduct] = useState({ Name: '', Description: '', Category: '', Quantity: '', Price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(product));
    console.log(product);
  };

  const handleCancel = () => {
    setProduct({ name: '', description: '', category: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form-column">
      <input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        name="category"
        value={product.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
        placeholder="Quantity"
      />
      <input
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <div className="form-buttons">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default AddProduct;
