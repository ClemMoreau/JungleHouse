import './Plant.css'
import sun from'../../assets/sun.svg'
import water from'../../assets/water.svg'

function Plant({plant}) {

    const range = [1,2,3];

    return (
        <div className="item">
            <div className="icon">
                <img className='img-plant' src={plant.cover} alt="plant"/>
            </div>
            <div className='info'>
                <div className='name'>
                    {plant.name}
                </div>
                <div className='info2'>
                    <div className='health'>
                        <div>
                            {range.map((rangeElement) =>
                                rangeElement <= plant.water ? <span key={rangeElement.toString()}><img src={water} alt="water" className='logo'/></span> : null
                            )}
                        </div>
                        <div>
                            {range.map((rangeElement) =>
                                rangeElement <= plant.light ? <span key={rangeElement.toString()}><img src={sun} alt="sun" className='logo'/></span> : null
                            )}
                        </div>
                    </div>
                    <div className='price'>
                        {plant.price} $
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plant;