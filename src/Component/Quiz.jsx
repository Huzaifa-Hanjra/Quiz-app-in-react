import React, { useState } from "react";
import { Data } from "./Data";

const Quiz = () => {
  const [data, setData] = useState(Data);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  console.log(data);


  const next = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    }else{
document.querySelector(".score").innerHTML=`<p>your score : ${score}/5</p>`;



    }
    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((curVal) => {
  curVal.checked=false;
    })
  }

  const handleinput = (e) =>{
    let choosevalue = e.target.value
    console.log(choosevalue)
    if(choosevalue === data[index].ans){
        setScore(score+1)
    }
  }
  return (
    <>
      <div className="container">
        <div className="quiz">
          <div>
          <h1>Q:{data[index].q}</h1>
          <div className="option">
            <input name="select" type="radio" onChange={handleinput} className="checkedValue" value={data[index].a} />
            <p> A:{data[index].a}</p>
          </div>
          <div className="option">
            <input name="select" type="radio"  onChange={handleinput} className="checkedValue" value={data[index].b}/>
            <p> B:{data[index].b}</p>
          </div>
          <div className="option">
            <input name="select" type="radio" onChange={handleinput} className="checkedValue"  value={data[index].c}/>
            <p> C:{data[index].c}</p>
          </div>
          <div className="option">
            <input name="select" type="radio" onChange={handleinput} className="checkedValue"  value={data[index].d}/>
            <p>D: {data[index].d}</p>
          </div>
          <div className="score">

          </div>
          <div className="btn">
            <button id="next" onClick={next}>next</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Quiz;
