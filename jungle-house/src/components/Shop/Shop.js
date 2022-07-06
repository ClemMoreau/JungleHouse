import { useEffect, useState } from "react";
import { plantList } from "../../data/plantList";
import Plant from "../Plant/Plant";
import './Shop.css'

function Shop({cart, updateCart}) {

    const [plants, setPlants] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const total = cart.reduce(
        (prevTotal, item) => prevTotal + (item.amount * item.price),
        0
    );

    const handleChange = (budget) => {
        let plantTemp = plantList.filter((plant) => 
            plant.price <= budget
        );
        setPlants(plantTemp);
    }

    const handleClick = (name, price) => {
        const plantInCart = cart.find((plant) => 
            plant.name === name
        ); 
        if (plantInCart) {
            const cartFiltered = cart.filter((plant) => 
            plant.name !== name
            ); 
            updateCart([...cartFiltered, {name, price, amount: plantInCart.amount + 1}]);
            
        } else {
            updateCart([...cart, {name, price, amount: 1}]);
        }

    }

    const emptyCart = () => {
        updateCart([]);
    }

    useEffect(() => {
        setPlants(plantList);
        setIsLoading(false);   
    }, []);

    return ( 
    <div className="shop">
        <div className="sort-bar">

            <label htmlFor="price">Select the maximum price : <br/>(0-100$)</label>
            <input name="price" type="range" min='0' max='50' list='tickmarks' onChange={(event) => handleChange(event.target.value)}/>
            <datalist id="tickmarks">
                <option value="0" label="0$"/>
                <option value="10"/>
                <option value="20"/>
                <option value="30"/>
                <option value="40"/>
                <option value="50" label="50$"/>
            </datalist>
        </div>
        <div className="shop-list">
            { isLoading && <p>Loading...</p>}
            { plants && plants.map((plant) =>
                <div key={plant.id} onClick={() => handleClick(plant.name, plant.price)}>
                    <Plant plant={plant}/>
                </div>
            )}
        </div>
        <div className="cart-bar">
            {cart.length > 0 ? 
                <div>
                    <p>Cart</p>
                    <ul>
                        {cart.map((item) => 
                        <div key={item.name + item.price}>
                            {item.name} : {item.amount} x {item.price}$
                        </div>)}
                    </ul>
                    <p>Total = {total}$</p>
                    <button onClick={emptyCart}>Empty your cart</button>
                </div>
             : 
                <div> 
                    Your card is empty
                </div>
            }
        </div>
    </div>
    );
}

export default Shop;