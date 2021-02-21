function sendApiRequest() {
	let $input = document.querySelector('#input');
	let giphyApiKey = 'ZjsSKH8gMeMcgKpcPgx8q6BuM1AAtC4m'
	let giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${$input.value}&rating=g&api_key=${giphyApiKey}`

	fetch(giphyApiUrl).then(function(data) {
		return data.json()
	})
	.then(function(json) {
		console.log(json.data[0].images.fixed_height.url)
		let imgPath = json.data[0].images.fixed_height.url
		let img = document.createElement('img')
		img.setAttribute('src', imgPath)
		document.body.appendChild(img)
	})

}