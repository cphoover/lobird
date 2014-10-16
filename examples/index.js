var lobird   = require("../"                           ) ,
	request  = lobird.promisify(require("request")     ) ,
	readFile = lobird.promisify(require("fs").readFile ) ;

request("http://www.google.com")
	._first (           ) // get full response
	._pick  ( 'headers' )
	.then(console.log.bind(console));

request({
	url     : "https://api.github.com/users/cphoover/repos",
	json    : true,
	headers : {
		"User-Agent": "request"
	}
})
	._last  (        ) //get response body
	._pluck ( "name" )
	.then(console.log.bind(console));

readFile(__dirname + "/people.json", "utf8")
	.then(JSON.parse.bind(JSON))
	._pluck   ( 'name' )
	._without ( 'bill' )
	._last    (        )
	._isEqual ( 'tim'  )
	.then(console.log.bind(console));
