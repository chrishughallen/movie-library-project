let searchTerm = $('#searchTerm')
let title = $('#title')
let year = $('#year')
let runtime = $('#runtime')
let rated = $('#rated')
let plot = $('#plot')
let imdbRating = $('#imdbRating')
let poster = $('#poster')

const getMovie = (query) => {
	$.getJSON('http://www.omdbapi.com/?t=' + query +'&plot=full&apikey=' + config.apiKey).done((data)=>{
		console.log(data)
		title.text(data.Title)
		year.text(data.Year)
		runtime.text(data.Runtime)
		rated.text(data.Rated)
		plot.text(data.Plot)
		imdbRating.text(data.imdbRating)
		poster.attr('src',data.Poster)
	})
}

$('#search').click(()=>{
	let search = searchTerm.val().split(' ')
	let query="";
		search.forEach((word)=>{
			if(search[word]!=search.length){
			query += word + "+"
		}
	})

	console.log(getMovie(query))

})

