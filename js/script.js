// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{
	quote: "Everyone talks about building a relationship with your customer. I think you build one with your employees first.",
	source: "Angela Ahrendts",
	tags: "business",
	displayable: true
},
{
	quote: "Innovation distinguishes between a leader and a follower.",
	source: "Steve Jobs",
	tags: "entrepreneurship",
	displayable: true
},
{
	quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	source: "Thomas Edison",
	tags: "entrepreneurship",
	displayable: true
},
{
	quote: "If you want to change the world, go home and love your family.",
	source: "Mother Teresa",
	tags: "inspirational",
	displayable: true
},
{
	quote: "An organization is not truly great if it cannot be great without you.",
	source: "Jim Collins",
	citation: "Good to Great",
	year: "2009",
	tags: "business",
	displayable: true
},
{
	quote: "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got.",
	source: "Tim Cook",
	year: "2000",
	tags: "inspirational",
	displayable: true
},
{
	quote: "Some people want it to happen, some wish it would happen, others make it happen.",
	source: "Michael Jordan",
	tags: "sports",
	displayable: true
},
{
	quote: "The secret to success is good leadership, and good leadership is all about making the lives of your team members or workers better.",
	source: "Tony Dungy",
	tags: "sports",
	displayable: true
}
];

// function getRandomQuote randomly generates and returns a quote from the "quotes" object array.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomColorGenerator() {
		return Math.floor(Math.random() * backgroundColors.length);
}

// this section adds the functions that control how often the quote automatically changes (if the user doesn't press "show new quote")
//
var timeoutID;
function autoSwitch(){
	timeoutID = window.setTimeout(printQuote, 10000);
}
function resetAutoSwitch(){
	window.clearTimeout(timeoutID);
}

var counter = 0;

var backgroundColors = ['#4D505B','#CF4858','#16A79D','#80628B','#F4AC42'];

function printQuote() {

	resetAutoSwitch();

			//Assigns random number to the displayQuote variable
			var quoteToDisplay = getRandomQuote();

					if(quoteToDisplay.displayable === true){

			    var htmlQuoteString = '<p class="quote">' + quoteToDisplay.quote + '</p>' + '<p class="source">' + quoteToDisplay.source;

					if (quoteToDisplay.citation !== undefined) {
						htmlQuoteString += '<span class="citation">' + quoteToDisplay.citation + '</span>';
					}
					if (quoteToDisplay.year !== undefined) {
						htmlQuoteString += '<span class="year">' + quoteToDisplay.year + '</span>';
					}
					htmlQuoteString += '</p>';

					//Outpoops full string to proper location in HTML
					document.getElementById('quote-box').innerHTML = htmlQuoteString;
					randomColorPicker()

					/*
					backgroundColors.push(backgroundColors.shift());
					*/

					quoteToDisplay.displayable = false;
					counter += 1; //Advances the counter each time the function is run. Once counter is equal to the amount of quotes displayed, all quotes are reset to be displayed again.
					autoSwitch(); //Automatically picks a new quote and background after 30 seconds

				//	console.log('PRINTED ' + quoteToDisplay.quote + '.');
				//	console.log('COUNTER IS ' + counter);

		} else if (counter < quotes.length){
				//console.log('SKIPPED ' + quoteToDisplay.quote);
				//console.log('COUNTER IS ' + counter);
				printQuote();

		} else {
				for(var i=0; i < quotes.length; i+=1){
            quotes[i].displayable = true;
						counter = 0;
					}

			printQuote();
		}

}

// calls the printQuote function upon page load
printQuote();


function randomColorGenerator() {
		return Math.floor(Math.random() * backgroundColors.length);
}

var lastColor;

function randomColorPicker(){

			var randomColor = randomColorGenerator();

			if(randomColor !== lastColor){
			document.getElementById('body').style.background = backgroundColors[randomColor];
			lastColor = randomColor;
		} else {
			randomColorPicker();
		}
}
