import React from "react";
import "./QandA.css"

function QandA(props) {
    return (
        <div className="QandA">
                <div onClick={() => props.setShowAnswer(!props.showAnswer)} className="FAQsQuestion">
                    <h2>{props.qAnda.question}</h2>
                    <i className= "FAQsCancelIcon FAQsAddIcon fa-solid fa-plus"></i>
                </div>
                {props.showAnswer &&
                    <div className="FAQsAnswer">
                        <h2>{props.qAnda.answer1}</h2>
                        {props.qAnda.answer2 && <h2>{props.qAnda.answer2}</h2>}
                    </div>
                }
        </div>
    )
}

export default QandA;