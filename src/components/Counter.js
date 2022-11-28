import React from "react";

const Counter = ({idFruit, buttonClass, fruitIcon, type, fruitName, increment, decrement, isDisabled, className, fruitValue}) => {


    return (
        <div className={className}>
            <h2 className={idFruit}>{fruitIcon}{fruitName}</h2>
            <div className={buttonClass}>
            <button
                className="increaseClass"
                type={type}
                onClick={decrement}
                disabled={isDisabled}
            >-</button>
            {fruitValue}
            <button
                className="decreaseClass"
                type={type}
                onClick={increment}
            >+</button>
            </div>
        </div>
    );
};
export default Counter;