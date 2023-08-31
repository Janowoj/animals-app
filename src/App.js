import { useState } from "react";
import AnimalShow from "./AnimalShow";


const getRandomAnimal = () => {
    const animals = ['cat', 'dog', 'horse', 'gator', 'cow', 'bird'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // animals.push(getRandomAnimal());
        // this is another way, but NOT GOOD (modifies a piece of state)
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    // it is the same as if we write:

    // const renderedAnimals = animals.map((animal) => {
    //     return 
    //         <AnimalShow type={animals[0]}/>
    //         <AnimalShow type={animals[1]}/>
    // })

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>{renderedAnimals}</div>
        </div>
    );
}
// whenever we return an array of strings to React, it will automatically print them out as next to each other

export default App;

// EVENT SYSTEM detects changes in the DOM

// STATE SYSTEM detects changes in the state and updates the UI

// ==================================== //

// Using Events:

//  1. Decide what kind of event you want to watch for;
//  2. Create a function (usually called a handler or callback function);
//  3. Name the function using patern of "handle" + "EventName" (not a requirement, but a convention);
//  4. Pass the function AS A PROP to the element that will be watching for the event;
//  5. Make sure that you pass a function using a valid name ('onClick', 'onMouseOver', etc.);
//  6. Make sure you pass a reference to the function (don't call it!);

// most common events: onClick and onChange;
// other popular: onSubmit, onMouseOver, onMouseOut, onKeyPress, onKeyDown, onKeyUp

// ==================================== //

// We can write event handlers in two ways:

// 1. Inline (directly in the JSX):
// <button onClick={() => {
//     console.log('Button is clicked!')
// }}>Add Animal</button>

// 2. As a separate function:
// function handleClick() {
//     console.log('Button is clicked!')
// }

// <button onClick={handleClick}>Add Animal</button>

// ==================================== //

// In this case we need some kind of counter
// to keep track of how many times the button was clicked,
// Count should start at 0 and increase by 1 every time the button is clicked.
// Whenever the value is changed, the content on the screen is updated
// (this is called RE-RENDERING).

// STATE SYSTEM
// There are 4 steps for using the state system after
// we have imported the useState function:


// 1. Define a piece of state using the useState function;
// 2. Give the value to the useState function. This is the default, initial value for our piece of state;
// 3. Use the state in some way in our component (often in the returned JSX);
// 4. When user does something, update the state using the function. It causes React to re-render the component.

// 1. When defining a piece of state, we use ARRAY DESTRUCTURING
// to get acces to the PIECE OF STATE and the SETTER FUNCTION.

// function useState(defaultValue) {
//     return {
//         yourState: defaultValue,
//         yourSetter: function () {
//             // do something
//         }
//     }
// // returnnig an object with two properties
// }

// // how can we create two different pieces of state??

// function App() {
//     // const stateConfig = useState(0);
//     // const count = stateConfig.yourState;
//     // const setCount = stateConfig.yourSetter;

//     const {yourState: count, yourSetter: setCount} = useState(0);
// }

// We can use OBJECT DESTRUCTURING to get the values (the JS feature), but
// to create two pieces of state, we use array destructuring.


