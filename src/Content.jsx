import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesNew } from "./ExercisesNew";

export function Content() {
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <ExercisesNew onCreateExercise={handleCreateExercise} />
      <ExercisesIndex exercises={exercises} />
      <Signup />
      <Login />
      <LogoutLink />
    </div>
  );
}
