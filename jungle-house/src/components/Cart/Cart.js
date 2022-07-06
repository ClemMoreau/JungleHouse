import './Cart.css'
import { plantList } from "../../data/plantList";
import PlantCart from "../Plant/Plant-Cart/Plant-Cart";

function Cart({cart, updateCart}) {

    const total = cart.reduce(
        (prevTotal, item) => prevTotal + (item.amount * item.price),
        0
    );

    return (
        <div className="cart">
            {cart.map((item) => 

                <PlantCart key={item.name}
                plant={plantList.find((plant) => 
                    plant.name === item.name
                )} 
                cart={cart}
                updateCart={updateCart}
                />
            )}
            <div className='total'>
                Total : {total} $
                <button>Submit your order</button>
                <button onClick={() => updateCart([])}>Empty your cart</button>
            </div>
        </div>
    );
}

export default Cart;