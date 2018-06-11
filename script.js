var database = [
{
	username: "kunal",
	password: "stupid"
},
{
	username: "nidhi",
	password: "angry"
},
{
	username: "madhvi",
	password: "dumbo"
}
];

var newsfeed = [
{
	username: "Vikas",
	timeline: "Hey! I brought new laptop ALIENWARE!!"
},
{
	username: "Ishaan",
	timeline: "Its f**king hot outside."
},
{
	username: "Jay",
	timeline: "What a tiring day!!"
}
];

function isUserValid(username,password)
{
	for(var i = 0 ; i < database.length ; i++)
		{
			if(database[i] === username && database[i] === password)
			{
				return true;
			}
		}
		return false;
}


function signIn(username,password)
{
	if(isUserValid(username,password))
	{
		console.log(newsfeed);
	}
	else
	{
		alert("Sorry, Wrong username and password");
	}
}

var userprompt = prompt("Enter your username:");
var passprompt = prompt("Enter your password:");

signIn(userprompt , passprompt);