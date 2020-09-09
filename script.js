const random_words = ["yes", "no", "okay", "yeah", "begin", "end", "shirt", "pant", "mobile", "phone", "sing", "song", "ping", "pong", "joke", "woke", "apple", "banana", "fruit", "program", "server", "application", "greeting", "physics", "math", "english", "computer", "script", "time", "speed", "mass", "width", "height", "write", "read", "run", "walk", "bathroom", "toilet", "school", "parliament", "clock", "date", "high", "low", "king", "queen", "have", "had", "did", "do", "does", "doesn't", "let", "wings", "iron", "metal", "country", "heaven", "airplane", "car", "bus", "sleep", "finger", "meat", "chicken", "pork", "day", "night", "afternoon"];

var written = 0;

function getWrittenWord(string)
{
    var wWord = "";
    for (var i = 0; i < string.length - 1; i++)
    {
        wWord += string[i];
    }
    
    return wWord;
}

function getToTypeWord(string)
{
    var word = "";
    for (var i = 0; i < string.length; i++)
    {
        if (string[i] == " ")
        {
            break;
        }
        else
        {
            word += string[i];
        }
    }

    return word;
}

let text = "";
for (var i = 0; i < random_words.length; i++)
{
    var number = Math.floor((Math.random() * random_words.length - 1) + 1);
    text += random_words[number] + " "
}

document.getElementsByClassName("toType")[0].value = text;


var playing = true;
var IntervalHandle_ = setInterval(() => {

    if (playing)
    {
        if (document.getElementsByClassName("toType")[0].value.length <= 25)
        {
            var newText = "";
            for (var i = 0; i < random_words.length; i++)
            {
                var newNumber = Math.floor((Math.random() * random_words.length - 1) + 1);
                newText += random_words[newNumber] + " "
            }
            document.getElementById("toType")[0].value = newText;
        }
        
    
        if (document.getElementsByClassName("userInput")[0].value.includes(" "))
        {
            var writtenWord = getWrittenWord(document.getElementsByClassName("userInput")[0].value);
            console.log("[USER] New word:", writtenWord);
            document.getElementsByClassName("userInput")[0].value = "";
    
    
            if (writtenWord == getToTypeWord(document.getElementsByClassName("toType")[0].value))
            {
                console.log("[SCRIPT] " + writtenWord + " was written correctly.");
                document.getElementsByClassName("toType")[0].value = document.getElementsByClassName("toType")[0].value.replace(writtenWord + " ", "");
                written += 1;
            }
            else
            {
                console.log("[SCRIPT] " + getToTypeWord(document.getElementsByClassName("toType")[0].value) + " was written incorrectly.")
            }
        }
    }
    else
    {
        clearInterval(IntervalHandle_);
    }
}, 10)

var time = 0;

function startCounting()
{
    
    var IntervalHandle = setInterval(() => {
        time += 1;
        if (time == 60)
        {
            document.getElementsByClassName("userInput")[0].disabled = true;
            time = 0;
            playing = false;
            clearInterval(IntervalHandle);
            document.body.innerHTML = "<h1 style=\"text-align: center;\">SCORE: " + written + " WPM</h1>\n<button onclick=\"window.location.reload(false);\">Play again</button>";
        }
    }, 1000)
}