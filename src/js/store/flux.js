const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recipe: [],
			users : [],
			loggId: [],
			favorites: [],
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

			registerUsers: (user)=>{
				const newUser = getStore().users;
				newUser.push(user)
				setStore({ users: newUser });
			},
			LogInUsers: (userLogged)=>{
				const log = getStore().loggId;
				log.push(userLogged)
				setStore({ loggId: log });
			},
			addFav: (fav) => {
				//get the store
				const newFavorites = getStore().favorites;
				newFavorites.push(fav)
		
				//reset the global store
				setStore({ favorites: newFavorites });
			},
		
		  deleteFav: (fav)=>{
			var deleteFavo = getStore().favorites;
			let delet = deleteFavo.filter((element)=>element!==fav)
			setStore({ favorites: delet });
		  },

		}
	};
};

export default getState;
