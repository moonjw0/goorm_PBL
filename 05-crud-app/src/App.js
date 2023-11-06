import React, {useState} from 'react';
import './App.css';
import Submit from './components/Submit';
import Lists from './components/Lists';


export default function App() {

  const [budgetData, setBudgetData] = useState([
    {
      id: "1",
      title: "식비",
      cost: "1200",
    },
  ]);
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState(0);
  
  const handleSubmit = (e) => { // 제출
    e.preventDefault();

    let newBudget = {
      id: Date.now(),
      title: title,
      cost: cost,
    };

    setBudgetData(prev => 
      [...prev, newBudget]
    )
    setTitle("");
    setCost(0);
  };

  const handleDeleteList = (e) => {
    setBudgetData([]);
  };
  
  return (
    <div className='container'>
      <div className='title'>
        <h1>예산 계산기</h1>
      </div>

      <div className='calculator'>
        <Submit title={title} setTitle={setTitle} cost={cost} setCost={setCost}/>
        <input 
          className='submitBtn'
          type="submit"
          value="제출 "
          onClick={handleSubmit}
        />

<<<<<<< HEAD
        <Lists budgetData={budgetData} setTitle={setTitle} setCost={setCost} setBudgetData={setBudgetData}/>
=======
        <Lists budgetData={budgetData} setBudgetData={setBudgetData}/>
>>>>>>> 82eca10 (feat: category/product 구현)
        <input 
          className='submitBtn'
          type="submit"
          value="목록 지우기 "
          onClick={handleDeleteList}
        />
      </div>
    </div>
  );
}
