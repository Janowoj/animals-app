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
    return (
        // <div>{type}</div>
        <img alt='animal' src={svgMap[type]} />
    )
}

export default AnimalShow;

// We have to take the type property and use it to decide, which svg should be display for the user