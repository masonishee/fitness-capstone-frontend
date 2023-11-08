import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesNew } from "./ExercisesNew";
import { ExercisesShow } from "./ExercisesShow";
import { WorkoutsIndex } from "./WorkoutsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setIsExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});
  const [workouts, setWorkouts] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  const handleIndexWorkouts = () => {
    console.log("handleIndexWorkouts");
    axios.get("http://localhost:3000/workouts.json").then((response) => {
      console.log(response.data);
      setWorkouts(response.data);
    });
  };

  const handleCreateExercise = (params, successCallback) => {
    console.log("handleCreateExercise", params);
    axios.post("http://localhost:3000/exercises.json", params).then((response) => {
      setExercises([...exercises, response.data]);
      successCallback();
    });
  };

  const handleShowExercise = (exercise) => {
    console.log("handleShowExercise", exercise);
    setIsExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsExercisesShowVisible(false);
  };

  useEffect(handleIndexExercises, []);

  useEffect(handleIndexWorkouts, []);
  return (
    <div>
      <Routes>
        <Route path="/ExerciseNew" element={<ExercisesNew onCreateExercise={handleCreateExercise} />} />
        <Route
          path="/ExerciseIndex"
          element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise} />}
        />

        <Route path="/WorkoutsIndex" element={<WorkoutsIndex workouts={workouts} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Logout" element={<LogoutLink />} />
      </Routes>

      <Modal show={isExercisesShowVisible} onClose={handleClose}>
        <ExercisesShow exercise={currentExercise} />
      </Modal>
    </div>
  );
}
