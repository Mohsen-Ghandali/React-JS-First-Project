const Product1 = () => {
    return ( 
        <div className="product">
<img src={require("../../../Images/p1.jpg")} alt="p1" />
<div>
    <h2>Sneaker</h2>
    <p>Preis: 300€</p>
    <a href="/product">Weiter...</a>
</div>
        </div>
     );
}
 
export default Product1;