
import React from "react";
import Products from "../Components/Products";


let productsData = [
    {
        id: 1, name: "Samsung 1", description: "Samsung 1", price: "$2000", img: "https://fscl01.fonpit.de/userfiles/6898953/image/android-samsung-galaxy-s6-edge-test-review-image-01.JPG"
    },
    {
        id: 2, name: "Samsung 2", description: "Samsung 2", price: "$1500", img: "https://fscl01.fonpit.de/userfiles/6898953/image/android-samsung-galaxy-s6-edge-test-review-image-01.JPG"
    },
    {
        id: 3, name: "Samsung 3", description: "Samsung 3", price: "$1000", img: "https://fscl01.fonpit.de/userfiles/6898953/image/android-samsung-galaxy-s6-edge-test-review-image-01.JPG"
    }
]
const  Samsung = () => {

    return(
        <div className="apple">
             {
                    productsData.map((item) => (
                        
                    <Products name={item.name} img={item.img} des={item.description} price={item.price} />
                        
                    ))
             }
        </div>
    )
}

export default  Samsung;