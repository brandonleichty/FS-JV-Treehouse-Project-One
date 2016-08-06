// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
{
	quote: "Be a yardstick of quality.",
	source: "Steve Jobs",
	tags: ,
	displayable: true
},
{
	quote: "Innovation distinguishes between a leader and a follower.",
	source: "Steve Jobs",
	tags: ,
	displayable: true
},
{
	quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	source: "Thomas Edison",
	tags: ,
	displayable: true
},
{
	quote: "If you want to change the world, go home and love your family.",
	source: "Mother Teresa",
	tags: ,
	displayable: true
},
{
	quote: "Good is the enemy of great.",
	source: "Jim Collins",
	citation: "Good to Great",
	year: "2009",
	tags: ,
	displayable: true
},
{
	quote: "Life is fragile. We're not guaranteed a tomorrow so give it everything you've got.",
	source: "Tim Cook",
	year: "2000",
	tags: ,
	displayable: true
},
{
	quote: "Some people want it to happen, some wish it would happen, others make it happen.",
	source: "Michael Jordan",
	tags: ,
	displayable: true
},
{
	quote: "Talent wins games, but teamwork and intelligence wins championships.",
	source: "Michael Jordan",
	tags: ,
	displayable: true
}
];


autoSwitch(); //activates the autoSwitch function if the user doesn't click the "get new quote" button after 10 seconds.

// randomly generates and returns a quote from the "quotes" object array.
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}


var timeoutID;	//create global setTimeout variable

//autoSwitch function changes the quote every 10 seconds.
function autoSwitch(){
	timeoutID = window.setTimeout(printQuote, 10000);
}

//resetAutoSwitch resets the time interval of the autoSwitch function back to zero.
function resetAutoSwitch(){
	window.clearTimeout(timeoutID);
}

var counter = 0;

function printQuote() {

	resetAutoSwitch();

			//Assigns random number to the displayQuote variable
			var displayQuote = getRandomQuote();

			if(displayQuote.displayable === true){

			    var htmlQuoteString = '<p class="quote">' + displayQuote.quote + '</p>' + '<p class="source">' + displayQuote.source;

					if (displayQuote.citation !== undefined) {
						htmlQuoteString += '<span class="citation">' + displayQuote.citation + '</span>';
					}
					if (displayQuote.year !== undefined) {
						htmlQuoteString += '<span class="year">' + displayQuote.year + '</span>';
					}
					htmlQuoteString += '</p>';

					//Outpoops full string to proper location in HTML
					document.getElementById('quote-box').innerHTML = htmlQuoteString;

					//Changes the background color on button click. Cycles through five different colors.
					// defining background colors outside of printQuote() function so that .push and .shift can be used to cycle through colors without the values being reset each time the function is called.
					var backgroundColors = ['#4D505B', '#CF4858', '#16A79D', '#8068B', '#F4AC42'];
					document.getElementById('body').style.background = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

					/*
					backgroundColors.push(backgroundColors.shift());
					*/

					displayQuote.displayable = false;
					counter += 1; //Advances the counter each time the function is run. Once counter is equal to the amount of quotes displayed, all quotes are reset to be displayed again.
					autoSwitch(); //Automatically picks a new quote and background after 30 seconds

					console.log('PRINTED ' + displayQuote.quote + '.');
					console.log('COUNTER IS ' + counter);

		} else if (counter < quotes.length){
				console.log('SKIPPED ' + displayQuote.quote);
				console.log('COUNTER IS ' + counter);
				printQuote();

		} else {
				for(var i=0; i < quotes.length; i+=1){
            quotes[i].displayable = true;
						counter = 0;
					}
			console.log("THE LOOP HAS FINISHED!");
			printQuote();
		}

}
