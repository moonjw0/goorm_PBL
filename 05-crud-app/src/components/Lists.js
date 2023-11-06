import React from "react";

export default function Lists({budgetData, setTitle, setCost, setBudgetData}) {

  const itemStyle = () => {
    return {
      display: 'flex',
      alignItems: 'center',
      marginBottom: "10px",
      paddingLeft: "10px",
      fontSize: "12px",
      border: "1px lightgrey solid",
    }
  };

  const btnStyle = {
    margin: "5px 5px",
    padding: "5px 5px",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    float: "right",
  };

  const handleEdit = (id) => {
    let EditData = budgetData.filter((data) => data.id == id);
    setTitle(EditData[0].title);
    setCost(EditData[0].cost);
  };

  const handleDelete = (id) => { // 항목 삭제
    let newBudgetData = budgetData.filter((data) => data.id !== id);
    setBudgetData(newBudgetData);
  };

  return (
    <div className='Expenditure-list'>
      {budgetData.map((data) => (
        <div style={itemStyle()} key={data.id}> 
          <span style={{ flex: '2' }}>{data.title}</span>
          <span style={{ flex: '2', color:'grey' }}>{data.cost}</span>
          <button style={btnStyle} onClick={() => handleEdit(data.id)}>v</button>
          <button style={btnStyle} onClick={() => handleDelete(data.id)}>x</button>
        </div>
      ))}
    </div>
  );
}