import os
import requests

numberOfPokemon = 151
url = 'https://pokeapi.co/api/v2/pokemon/?limit=' + str(numberOfPokemon)
response = requests.get(url)


if response.status_code==200:
	data = response.json()
	pokemonList = data["results"]

	for i in range(len(pokemonList)):
		imgName = str(i+1) + '.png'
		copyCommand = 'copy "..\\' + imgName + '" "./namedImages/' + pokemonList[i]["name"] + '.png"'
		os.system(copyCommand)
