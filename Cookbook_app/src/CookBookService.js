const DjangoAPI = 'http://34.228.156.43:8000/api/recipe';

// Get request
export const getRecipesFromDjango = async () => {
    try {
        const response = await fetch(DjangoAPI);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to fetch recipes:", error.message);
        return { error: error.message };
    }
};

//update request
// export const updateRecipesFromDjango = async (id, bodyInfo) => {
//     try {
//         const updatedRecipe = 
//     } catch (error) {
        
//     }
// }




// Delete request
export const deleteRecipesFromDjango = async () => {
    try {
        const response = await fetch(DjangoAPI, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Failed to delete recipes:', error.message);
        return { error: error.message };
    }
};
