import './Home.css'
import monstera from '../../assets/monstera.jpg'
import mint from '../../assets/mint.jpg'
import calathea from '../../assets/calathea.jpg'
import { useState } from 'react';

function Home() {

    let count = 1;
    const pictures = [monstera, mint, calathea];
    const [plant, setPlant] = useState(pictures[count])

    const next = () => {
        count++;
        setPlant(pictures[count % 3]); 
        console.log(count)
    }

    const prev = () => {
        if (count !== 0) {
            count = (count - 1) % pictures.length;
        } else {
            count = pictures.length - 1;
        }
        setPlant(pictures[count]);
    }
    
    return ( 
        <div className="home">
            <button className='prev' onClick={prev}>&lt;</button>
            <img src={plant} alt='plant-carroussel'/>
            <button className='next' onClick={next}>&gt;</button>
        </div>
    );
}

export default Home;