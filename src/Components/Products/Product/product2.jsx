const Product2 = () => {
    return ( 
        <div className="product">
           <img src={require("../../../Images/p2.jpg")} alt="p2" />
           <div>
    <h2>Sneaker</h2>
    <p>Preis: 300€</p>
    <a href="/product">Weiter...</a>
</div>
        </div>
        
     );
}
 
export default Product2;