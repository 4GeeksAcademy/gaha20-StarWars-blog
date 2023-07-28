const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			details: {},
			API_URL: "https://www.swapi.tech/api"

			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			getCharacters: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/people`)
					console.log(response)
					if (response.ok) {
						const data = await response.json()
						console.log(data)
						data.results.forEach(async (element) => {
							let responseElement = await fetch(`${store.API_URL}/people/${element.uid}`)
							let dataItem = await responseElement.json()
							console.log(dataItem)
							setStore({ characters: [...store.characters, dataItem.result] })
						});
					}
				}
				catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/planets`)
					console.log(response)
					if (response.ok) {
						const data = await response.json()
						console.log(data)
						data.results.forEach(async (element) => {
							let responseElement = await fetch(`${store.API_URL}/planets/${element.uid}`)
							let dataItem = await responseElement.json()
							console.log(dataItem)
							setStore({ planets: [...store.planets, dataItem.result] })
						});
					}
				}
				catch (error) {
					console.log(error)
				}
			},
			//filter de store.characters
			getDetailed: async (group, id) => {
				let store = await getStore()
				let details
				if (group == "characters") {
					details = store.characters.filter((item) => item.uid == id)
				} else {
					details = store.planets.filter((item) => item.uid == id)
				}
				setStore({ ...store, details: details[0] ? details[0] : {} })

			}


			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
