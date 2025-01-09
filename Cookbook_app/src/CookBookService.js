const DjangoAPI = 'https://34.228.156.43:8000/api/recipe'



// get request

export const getRecipesFromDjango = async () => {
    
    try {
        const Response = await fetch(DjangoAPI)
        const data = await Response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("you are dumb");
        
    }
    
}

export const deleteRecipesFromDjango = async () => {
    try {
        const Response = await fetch(DjangoAPI, {
            method: 'delete'
        });
        if (!Response.ok) {
            throw new Error(`HTTP error... do better ${Response.status}`)
        }
        await Response.json();

    } catch (error) {
        console.error('delete recipe returning error: ', error);
        return {error: error.message}
        
    }
}

// export const updateRecipesFromDjango = async () => {
//     try {
        
//     } catch (error) {
        
//     }
// }