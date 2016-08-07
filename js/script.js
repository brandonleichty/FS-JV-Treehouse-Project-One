// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// below is an objet array with the quotes to be displayed.
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

//---GLOBAL VARIABLES---//
var backgroundColors = ['#4D505B','#CF4858','#16A79D','#80628B','#F4AC42'];
var counter = 0;
var lastColor;

//---FUNCTIONS---//

// getRandomQuote randomly generates and returns a quote from the "quotes" object array.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// randomColorGenerator returns a random number (that is not greater than the number of background colors).
function randomColorGenerator() {
		return Math.floor(Math.random() * backgroundColors.length);
}

// autoSwitch controls how often the quote automatically changes (if the user doesn't press "show new quote"). It's currently set to 10s.
var timeoutID;
function autoSwitch(){
	timeoutID = window.setTimeout(printQuote, 10000);
}
// resets/clears the tiemout duration
function resetAutoSwitch(){
	window.clearTimeout(timeoutID);
}

// randomColorPicker randomly picks a background color and checks to make sure the random color isn't the previously displayed color.
function randomColorPicker(){

			var randomColor = randomColorGenerator();

			if(randomColor !== lastColor){
			document.getElementById('body').style.background = backgroundColors[randomColor];
			lastColor = randomColor;
		} else {
			randomColorPicker();
		}
}


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
					randomColorPicker();

					quoteToDisplay.displayable = false;
					counter += 1; // advances the counter each time the function is run. Once counter is equal to the amount of quotes displayed, all quotes are reset to be displayed again.
					autoSwitch(); // automatically picks a new quote and background after 10 seconds

		} else if (counter < quotes.length){
				printQuote(); // if randomly selected color has already been displayed

		} else { // resets each quotes "displayable" property to "true" after all quotes have been displayed.
				for(var i=0; i < quotes.length; i+=1){
            quotes[i].displayable = true;
						counter = 0;
						}
				printQuote();
			}

}

// calls the printQuote function upon page load
printQuote();
