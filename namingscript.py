import os
import requests

numberOfPokemon = 151
url = 'https://pokeapi.co/api/v2/pokemon/?limit=' + str(numberOfPokemon)
response = requests.get(url)


if response.status_code==200:
	data = response.json()
	pokemonList = data["results"]

	for i in range(len(pokemonList)):
		pokemon = pokemonList[i]["name"]
		pokemonId = i+1

		imgName = str(pokemonId) + '.png'
		copyCommand = 'copy "..\\' + imgName + '" "./namedImages/' + pokemon + '.png"'
		print(pokemonId, pokemon, copyCommand)
		os.system(copyCommand)
