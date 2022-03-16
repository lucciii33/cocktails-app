const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recipe: [],
			users : [],
			loggId: []
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

			RegisterUsers: (user)=>{
				const newUser = getStore().favorites;
				newUser.push(user)
				setStore({ users: newUser });
			}

		}
	};
};

export default getState;
