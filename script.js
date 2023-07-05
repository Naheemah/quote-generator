const quoteGenerator = () => {
    let body = document.getElementById('body');
    let quote = document.getElementById('quote');
    let selectedQuote = "";
    let randomQuote = Math.floor(Math.random() * 20);

    switch (randomQuote) {
        case 0:
            selectedQuote = "Love isn't about finding the perfect person. Love is about finding an imperfect person and seeing perfection.";
            break;
        case 1:
            selectedQuote = "The biggest coward is a man who awakens a woman's love with no intention of loving her";
            break;
        case 2 :
            selectedQuote = "Maintain an attitude of gratitude."
            break;
        case 3:
            selectedQuote = "The way you started loving her is the way she should always be loved.";
            break;
        case 4:
            selectedQuote = "Loving you is like breathing. How can i stop?";
            //console.log(selectedQuote);
            break;
        case 5:
            selectedQuote = "If i had a flower for every time i thought of you, i could walk in my garden forever.";
            break;
        case 6:
            selectedQuote = "Stop looking for happiness in the same place you lost it.";
            break;
        case 7:
            selectedQuote = "The win is coming, don't let the when worry you.";
            break;
        case 8:
            selectedQuote = "In a sea of people, my eyes will always be searching for you.";
            //console.log(selectedQuote);
            break;
        case 9:
            selectedQuote = "The day you start putting limitations on all you do, is the begining of your maturity.";
            break;
        case 10:
            selectedQuote = "Never make a permanent decision based on temporary feelings."
            break;
        case 11:
            selectedQuote = "One of the best lesson you can learn in life is to master how to remain calm."
            break;
        /*case 12:
            selectedQuote = "You are powerful, more than you even know, do not give your power away.."
            break;
        case 13:
            selectedQuote = "Find out what you like doing best and get someone to pay you for doing it."
            break;
        case 13:
            selectedQuote = "Success is how high you bounce when you hit the bottom"
            break;
        case 14:
            selectedQuote = "Anyone who has never made a mistake has never tried anything new."
            break;
        case 15:
            selectedQuote = "If opportunity doesn't knock, build a door."
            break;
        case 16:
            selectedQuote = "The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle."
            break;
        case 17:
            selectedQuote = "How you are treated is more important than how much you like someone."
            break;
        case 18:
            selectedQuote = "Don't try to be better than others. Try to be different."
            break;
        case 19:
            selectedQuote = "Be like water, not luxurious but valuable for life."
            break;
        case 20:
            selectedQuote = "Silence isn't empty. It's full of answers."*/
    }
}