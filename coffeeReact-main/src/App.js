import data from './input.json'
import { useState } from "react";

const ingredients = [
  {name: "Coffee"},
  {name: "Espresso"},
  {name: "Steamed Milk"},
  {name: "Hot Water"},
  {name: "1oz Espresso"},
  {name: "2oz Espresso"},
  {name: "Long pulled espresso"},
  {name: "1oz Steamed Milk"},
  {name: "Foamed Milk"},
  {name: "Traditional"},
  {name: "Chocolate"},
  {name: "Short pulled espresso"},
  {name: "Ice cream"},
  {name: "Sweet"},
  {name: "Sugar"},
  {name: "Whiskey"},
  {name: "Cream"},
  {name: "Panela"}
]
function compare(a1,a2)
{
  //console.log(JSON.stringify(a1))
  //console.log(JSON.stringify(a2)+"ERRRRR")
  return JSON.stringify(a1)==JSON.stringify(a2)
}
let results=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]

function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(ingredients.length).fill(false)
  );
  const [resultCoffee, setResult]=useState('К сожалению такого кофе нет')
  const [resultDescription, setDescription]=useState(' Пусто :...(')
  const [resultImage, setImage]=useState('https://img.freepik.com/premium-photo/empty-mug-on-white_269353-1723.jpg?w=1380')
  const handleOnChange=(position)=>{
    const updatedCheckedState = checkedState.map((item,index)=>
    index===position ? !item:item);
    setCheckedState(updatedCheckedState);
    results=updatedCheckedState
    const resultCoffee1 = ingredients.filter(
      (value,index)=>{
        if (updatedCheckedState[index]===true)
        {
          return true
        }
      }
    )
    let resultingredients=[]
    for (let i =0;i<resultCoffee1.length;i++)
    {
      resultingredients.push(resultCoffee1[i].name)
    }
    console.log(resultingredients)
    let resultIndex=0
    let mark=false
    resultingredients.sort();
    console.log(resultingredients)
    console.log(resultingredients)
    for (let i =0;i<data.length;i++)
    {
      let dataIngredients = data[i].ingredients
      dataIngredients.sort()
      if (compare(resultingredients,dataIngredients))
      {
        console.log(data[i].title)
        resultIndex=i
        console.log(resultIndex)
        mark=true
      }
    }
    if(mark){
      setResult(data[resultIndex].title);
      setImage(data[resultIndex].image)
      setDescription(data[resultIndex].description)
    }
    else{
      setResult("К сожалению такого кофе нет")
      setImage('https://img.freepik.com/premium-photo/empty-mug-on-white_269353-1723.jpg?w=1380')
      setDescription(' Пусто :...(')
    }
  };
  return (
    <div className="App" class="container">
      <h2>
        <p>ПРОФЕССИОНАЛЬНЫЙ БАРИСТА</p>
    </h2>
    <ul>
    {ingredients.map(({name},index)=>{
      return(
        <colum>
        <button class={results[index]===true? 'ingtrue':'ingfalse'} value={name} 
        checked={checkedState[index]}
        onClick={()=>handleOnChange(index)}>{name}</button>
        </colum>
      )
    })}
    </ul>
    <img src={resultImage} width="300" height="300" className='card'></img>
    <p className='txt'>{resultCoffee}</p>
    <p className='txt'>Описание:{resultDescription}</p>
    </div>
  );
}
export default App;
