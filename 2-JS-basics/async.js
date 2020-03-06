// Simulate getting recipe ideas via API
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4]);
    }, 1500);
});

// getIDs.then(result => console.log(`Here are the available recipe ids: ${result}`));

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(recipeID => {
            const dishes = {
                1: {title: 'Beef and Broccoli', type: 'Chinese'}, 
                2: {title: 'Fresh tomato pasta', type: 'Italian'}
            };
            // resolve(`Recipe ${recipeID} -- ${dishes[recipeID].title}`)
            resolve(dishes[recipeID]);
        }, 1500, recipeID);
    });
}

// getRecipe(1).then(result => {
//     console.log(`Selected Recipe: ${result.title}`);
//     console.log(`Selected Cusine: ${result.type}`);
// });

const getRelated = cuisineType => {
    return new Promise((resolve, reject) => {
        setTimeout(cuisineType => {
            const cuisines = {
                Italian: ['Pizza', 'Tiramisu'], 
                Chinese: ['Orange Chicken', 'Egg Roll'], 
            };
            resolve(`Other Recipes include: ${cuisines[cuisineType][0]} and ${cuisines[cuisineType][1]}`)
        }, 1500, cuisineType);
    });
}

// getRelated('Chinese').then(result => {
//     console.log(result);
// });

// Chaining Three Methods above Together
// Promise
getIDs
    // .then(ids => {
    //     return getRecipe(ids[1])
    // })
    // .then(recipe => {
    //     console.log(`Selected Recipe: ${recipe.title}`);
    //     console.log(`Selected Cusine: ${recipe.type}`);
    //     return getRelated(recipe.type)
    // })
    // .then(otherRecipes => console.log(otherRecipes))
    // .catch(error => {
    //     console.log('Error!');
    // });


// Async/Await
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[1]);
    console.log(`Selected Recipe: ${recipe.title}`);
    console.log(`Selected Cusine: ${recipe.type}`);

    const related  = await getRelated(recipe.type);
    console.log(related);

    return recipe;
}
getRecipesAW()
// getRecipesAW().then(result => console.log(`${result} is the best!`));