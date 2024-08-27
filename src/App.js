import { useEffect, useState } from 'react';
import './index.css';
import axios from "axios";
import Card from './components/Card';

function App() {

  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

useEffect(() => {
axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch).then((res) => setMealsData(res.data.meals));
}, [inputSearch]);

  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input type="text" placeholder="Entre le nom d'un aliment (en anglais)" onChange={(e) => setInputSearch(e.target.value)}/>
      <div className="meals-container">
        {mealsData && mealsData
        .slice(0, 24)
        .map((meal) =>
        <Card key={meal.idMeal} meal={meal} /> )}
      </div>
    </div>
  );
}

export default App;
