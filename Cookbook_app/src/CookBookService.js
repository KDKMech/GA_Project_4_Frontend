const DjangoAPI = "http://34.228.156.43:8000/api/recipe";



// Create request
export const createRecipeFromDjango = async (bodyInfo) => {
    try {
        const response = await fetch(DjangoAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyInfo),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Failed to create recipe:", error.message);
        return { error: error.message };
    }
};



// Get request
export const getRecipesFromDjango = async () => {
  try {
    const response = await fetch(DjangoAPI);
    if (!response.  ok) {
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

// update request
export const updateRecipesFromDjango = async (id, bodyInfo) => {
  try {
    const response = await fetch(`${DjangoAPI}/${id}`, {
      method: "PUT",
    //   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyInfo),
    });
    if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Failed to update", error.message);
    return { error: error.message}
    
  }
};

// Delete request
export const deleteRecipesFromDjango = async (id) => {
  try {
    const response = await fetch(`${DjangoAPI}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to delete recipes:", error.message);
    return { error: error.message };
  }
};
