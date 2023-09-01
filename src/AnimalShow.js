import './AnimalShow.css';
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// const svgMap = {
//     bird: bird,
//     cat: cat,
//     cow: cow,
//     dog: dog,
//     gator: gator,
//     heart: heart,
//     horse: horse
// }

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

function AnimalShow({ type }) {

    const [countClicks, setCountClicks] = useState(0);

    const handleClick = () => {
        setCountClicks(countClicks + 1);
    }

    return (
        <div className='animal-show' onClick={handleClick}>
            <img
                className='animal'
                alt='animal'
                src={svgMap[type]} />
            {/* <div>Count is: {count}</div> */}
            <img
                className='heart'
                alt='heart'
                src={heart}
                style={{ width: 10 + 10 * countClicks + 'px' }} />
        </div>

    )
}

export default AnimalShow;

// We have to take the type property and use it to decide, which svg should be display for the user