// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{
	quote: "Be a yardstick of quality.",
	source: "Steve Jobs"
},
{
	quote: "Innovation distinguishes between a leader and a follower.",
	source: "Steve Jobs"
},
{
	quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	source: "Thomas Edison"
},
{
	quote: "If you want to change the world, go home and love your family.",
	source: "Mother Teresa"
},
{
	quote: "Good is the enemy of great.",
	source: "Jim Collins",
	citation: "Good to Great"
},
{
	quote: "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got.",
	source: "Tim Cook"
},
{
	quote: "Some people want it to happen, some wish it would happen, others make it happen.",
	source: "Michael Jordan"
},
{
	quote: "Talent wins games, but teamwork and intelligence wins championships.",
	source: "Michael Jordan"
}
];

//Randomly generates a quote from the "quotes" object array. 
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//Defining background colors outside of printQuote() function so that .push and .shift can be used to cycle through colors without the values being reset each time the function is called. 
var backgroundColors = ['#962D3E', '#343642', '#979C9C', '#DEC07A', '#348899'];

function printQuote() {
	
	var displayQuote = getRandomQuote();
    document.getElementById('quote-box').innerHTML = '<p class="quote">' + displayQuote.quote + '</p>' + '<p class="source">' + displayQuote.source + '<span class="citation"> ' + displayQuote.citation + '</span><span class="year"> ' + displayQuote.year + '</span></p>';

//Changes the background color on button click. Cycles through five different colors.
    
	document.getElementById('body').style.background = backgroundColors[0];
	backgroundColors.push(backgroundColors.shift());
	
}
