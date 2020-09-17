import React, { useReducer, useEffect } from "react";
import { validate } from "../../../utils/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialIsValid || false,
    isTouched: false,
  });
  //   console.log(props);

  const { onInput, id } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, onInput, isValid]);

  const changeHandler = (event) => {
    dispatch({
      val: event.target.value,
      type: "CHANGE",
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };
  const element =
    props.element === "input" ? (
      <input
        className={`form-control ${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
        aria-label={props.ariaLabel}
        aria-describedby={props.ariaDescribedby}
      />
    ) : (
      <textarea
        className={`form-control w-100 ${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
        id={props.id}
        cols="30"
        rows="9"
        style={{ height: "127px" }}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div>
      <div
        className={`${
          !inputState.isValid && inputState.isTouched && "form-control--invalid"
        }`}
      >
        {element}
      </div>
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
