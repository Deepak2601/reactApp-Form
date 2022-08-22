import react, { useState } from "react";
import Card from "../UI/Card";
import Classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [enterUserName, setEnterUSerName] = useState("");
  const [enterAge, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title:'Invaild Input',
        message:' Please enter a vaild name and age (non -empty values).'
      });
      return;
    }
    if (+enterAge < 1) {
        setError({
            title:'Invaild age',
            message:' Please enter a vaild age (>0).'
          });
      return;
    }
    props.onAddUser(enterUserName, enterAge);
    setEnterUSerName("");
    setAge("");

    // console.log(enterUserName, enterAge);
  };

  const usernameChangeHandler = (event) => {
    setEnterUSerName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={Classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="usernmae">UserName</label>
          <input
            id="username"
            type="text"
            value={enterUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
