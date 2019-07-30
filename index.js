
// my vars //
var header = $('h1')
var button = $('.button')
var quotes = $('#quotes')

// making the button do stuff //
button.on("click", quoteGenerator);

// all the quotes //
var quote = ["We don't make mistakes, just happy little accidents.", "There's nothing wrong with having a tree as a friend.",
"All you need to paint is a few tools, a little instruction, and a vision in your mind.",
"Believe that you can do it cause you can do it.", "I believe talent is just a pursued interest. Anybody can do what I do.", "There's nothing in the world that breeds success like success.",
"lets get a little crazy here.", "The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe.",
"The only thing worse than yellow snow is green snow.", "You need the dark in order to show the light.", "Look around. Look at what we have. Beauty is everywhere—you only have to look to see it." ];

// making it random //
function quoteGenerator() {
  console.log("button clicked");
  var random = Math.random() * quote.length;
  var rounded = Math.floor(random);
  var quote2 = quote[rounded];
  quotes.text(quote2);
}
