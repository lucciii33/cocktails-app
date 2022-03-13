const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recipe: []
		},
		actions: {
			// getData: (recipe)=>{
			// 	fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita `, {   
			// 	})
			// 		.then(response => {
			// 			return response.json();
			// 		})
			// 		.then(data => {
			// 			console.log(data.drinks)
			// 			return setStore({ recipe: data.drinks})
			// 		})
			// 		.catch(err => {
			// 			console.error(err);
			// 		});
			// }
		}
	};
};

export default getState;
