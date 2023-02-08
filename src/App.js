import React, {useState} from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

import './App.css';

function App() {

  const [courseGoal, setCourseGoal] = useState([
    {text:'Do all exercises!', id: 'g1'},
    {text: 'Finish the course!', id: 'g2'}
  ]);

  const addGoalHandler = enteredText =>{
    setCourseGoal(prevGoals => {
      const updatedGoals = [...prevGoals];//gets the previous array
      updatedGoals.push({text:enteredText, id: Math.random().toString()});//add goal at the begin of the object array
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId=>{
    setCourseGoal(prevGoals =>{
      const updateGoals = prevGoals.filter(goal => goal.id !== goalId);//get all array except the goal id that is being deleted
      return updateGoals;
    })
  };

   let content = (
    <p style={{textAlign:'center'}}>No Goals found. Maybe add one?</p>
   );
   if(courseGoal.length > 0){
    content = (
      <CourseGoalList items={courseGoal} onDeleteItem ={deleteItemHandler} />
    )
   }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
