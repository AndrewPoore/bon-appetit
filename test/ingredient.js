async function fetchIngredients {
    await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`)

}