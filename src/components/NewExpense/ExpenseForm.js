import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChageHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //위에 세가지를 useState에 넣었는데 하나만 바꾸면 대체가 되므로 있는 아이들 모두 업데이트 시켜주기 위해 이전 state의 값을 가져와서 복사해줌
    //   enteredTitle: event.target.value,
    // });

    setUserInput((prevState) => {
      //기존 state의 스냅샷을 넣어둠 ( 위 방법과 비슷하지만 위 보단 이게 더 나음 ->  항상 최신 상태의 스냅샷을 유지해준다.)
      //이전 상태에 따라 상태를 업데이트 할 때 마다 이 함수 구문을 쓸 것이다.
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChageHandler = (event) => {
    // setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    setUserInput((prevState) => {
      //기존 state의 스냅샷을 넣어둠 ( 위 방법과 비슷하지만 위 보단 이게 더 나음 ->  항상 최신 상태의 스냅샷을 유지해준다.)
      //이전 상태에 따라 상태를 업데이트 할 때 마다 이 함수 구문을 쓸 것이다.
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChageHandler = (event) => {
    // setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setUserInput((prevState) => {
      //기존 state의 스냅샷을 넣어둠 ( 위 방법과 비슷하지만 위 보단 이게 더 나음 ->  항상 최신 상태의 스냅샷을 유지해준다.)
      //이전 상태에 따라 상태를 업데이트 할 때 마다 이 함수 구문을 쓸 것이다.
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseDate = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(ExpenseDate);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChageHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChageHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
