import React from "react";

export default function Submit({title, setTitle, cost, setCost}) {

  const handleChangeTitle = (e) => { // 제목
    setTitle(e.target.value);
  };
  const handleChangeCost = (e) => { // 비용
    setCost(e.target.value);
  };

  return (
    <div className='Expenditure-container'>
      <form className='Expenditure-input'>
        <span>지출 항목</span>
        <input className='input'
          type="text"
          name="value"
          placeholder="예) 렌트비"
          value={title}
          onChange={handleChangeTitle}
          />
      </form>

      <form className='Expenditure-price'>
        <span>비용</span>
        <input className='input'
          type="number"
          name="value"
          value={cost}
          onChange={handleChangeCost}
          />
      </form>
    </div>
  );
}