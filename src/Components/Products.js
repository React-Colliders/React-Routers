

const Products = ({name, img, des, price}) => {

    return(
        <div className="products">
                <img src={img} alt={name}/>
                <h3>{name}</h3>
                <p>{des}</p>
                <p>{price}</p>
         </div>
    )
}

export default Products;