import { Outlet, useNavigate } from "react-router-dom"

const Brand = () => {

    let navigate = useNavigate()


    return (
        <div>
            <h1>Brand</h1>
            <h6>Our Top Brands</h6>

            <button onClick={()=>navigate("")}>Apple</button>
            <button onClick={()=>navigate("nokia")} >Nokia</button>
            <button onClick={()=>navigate("samsung")} >Samsung</button>
             <br />

            <Outlet />
        </div>
    )
}

export default Brand