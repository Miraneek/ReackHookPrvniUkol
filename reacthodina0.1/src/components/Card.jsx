import React from "react";

export function Card(props){

    const [numberOfStars, setNumberOfStars] = React.useState(0)



    function handleClick(buttonNumber){
        setNumberOfStars(buttonNumber)
    }

    return (
        <div className={"flex"}>
            <div className={"flex2"}>
                <img src={props.imgSRC} alt={props.movieName + " nahledovy obrazek"}/>
                <div>
                    <h3>
                        {props.movieName}
                    </h3>
                    <h5>
                        {props.author}
                    </h5>
                </div>
            </div>
            <div className={"buttons"}>
                <button className={numberOfStars >= 1 ? "starFilled" : "starBlank"} onClick={() => handleClick(1)}></button>
                <button className={numberOfStars >= 2 ? "starFilled" : "starBlank"} onClick={() => handleClick(2)}></button>
                <button className={numberOfStars >= 3 ? "starFilled" : "starBlank"} onClick={() => handleClick(3)}></button>
                <button className={numberOfStars >= 4 ? "starFilled" : "starBlank"} onClick={() => handleClick(4)}></button>
                <button className={numberOfStars >= 5 ? "starFilled" : "starBlank"} onClick={() => handleClick(5)}></button>
            </div>
        </div>
    )

}