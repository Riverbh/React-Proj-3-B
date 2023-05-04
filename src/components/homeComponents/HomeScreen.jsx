import React, { useState, useEffect } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import RecipeCard from '../Cards/RecipeCard'
import { BiSearchAlt2 } from "react-icons/bi";
import classes from './Home.module.css'

const HomeScreen = () => { 
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  
  const getRecipe = () => {
    axios
      .get(" https://recipes.devmountain.com/recipes")
      .then((res) => {
        setRecipes(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    getRecipe()
  }, [])

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}/>
    })

  return (
    <div>
      <div>
        <AdBanner />
      </div>
      <div className={classes.recipe_section}>
      <span className={classes.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input type='text' placeholder='Search for a Recipe' value={search} onChange={(e) => setSearch(e.target.value)}/>
      </span>
      </div>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen