
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewRecipe from './NewRecipe';
import './RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(response => {
        setRecipes(response.data.meals);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const addRecipe = newRecipe => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="recipe-list-container">
      <div className="background-image-container"></div>
      <h1 className="recipe-list-title">Lista de Receitas</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.idMeal} className="recipe-item">
            <Link to={`/recipe/${recipe.idMeal}`} className="recipe-item-link">
              Ver Receita
            </Link>
            <div className="recipe-item-details">
              <div className="recipe-item-title">{recipe.strMeal}</div>
            </div>
          </li>
        ))}
      </ul>
      <NewRecipe addRecipe={addRecipe} />
    </div>
  );
}

export default RecipeList;
