import './Plant-Cart.css'
import sun from'../../../assets/sun.svg'
import water from'../../../assets/water.svg'

function PlantCart({plant, cart, updateCart}) {

    const currentPlant = cart.find((item) => plant.name === item.name)
    const range = [1,2,3];

    const addPlant = (name, price) => {
        const plantInCart = cart.find((plant) => 
            plant.name === name
        ); 
        const cartFiltered = cart.filter((plant) => 
            plant.name !== name
        ); 
        updateCart([...cartFiltered, {name, price, amount: plantInCart.amount + 1}]);
    }
    
    const removePlant = (name, price) => {
        const plantInCart = cart.find((plant) => 
            plant.name === name
        ); 
        const cartFiltered = cart.filter((plant) => 
            plant.name !== name
        ); 
        if ((plantInCart.amount - 1) !== 0) {
            updateCart([...cartFiltered, {name, price, amount: plantInCart.amount - 1}]);
        } else {
            updateCart(cartFiltered);
        }
    }

    return (
        <div className="item-cart">
            <div className='icon-cart'>
                <img className='img' src={plant.cover} alt="plant"/>
                <div className='name-cart'>
                    {plant.name}
                </div>
            </div>
            <div className='info-cart'>
                <div className='plant-info'>
                    <div className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum fringilla pharetra. Praesent quam lorem, placerat sed fringilla ac, malesuada a erat. Nullam quis vulputate felis, eget mollis urna. Proin non neque sit amet ipsum congue laoreet. Vivamus eu elit massa.
                    </div>
                    <div className='data'>
                        <div className='price-cart'>
                            {plant.price} $
                        </div>
                        <div className='health'>
                            <div>
                                {range.map((rangeElement) =>
                                    rangeElement <= plant.water ? <span key={rangeElement.toString()}><img src={water} alt="water" className='logo-cart'/></span> : null
                                )}
                            </div>
                            <div>
                                {range.map((rangeElement) =>
                                    rangeElement <= plant.light ? <span key={rangeElement.toString()}><img src={sun} alt="sun" className='logo-cart'/></span> : null
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shop-info'>
                    <div className='action'>
                        <button onClick={() => removePlant(plant.name, plant.price)}>-</button>
                        <div className='amount'>
                            {currentPlant.amount} 
                        </div>
                        <button onClick={() => addPlant(plant.name, plant.price)}>+</button>
                    </div>
                    <div className='total-plant'>
                        {plant.price * currentPlant.amount} $
                    </div>
                </div>
            </div>
        </div>
      );
}

export default PlantCart;