var lobird   = require("../"                           ) ,
	request  = lobird.promisify(require("request")     ) ,
	readFile = lobird.promisify(require("fs").readFile ) ;

request("http://www.google.com")
	._lb_first (           ) // get full response
	._lb_pick  ( 'headers' )
	.then(console.log.bind(console));

request({
	url     : "https://api.github.com/users/cphoover/repos",
	json    : true,
	headers : {
		"User-Agent": "request"
	}
})
	._lb_last  (        ) //get response body
	._lb_pluck ( "name" )
	.then(console.log.bind(console));

readFile(__dirname + "/people.json", "utf8")
	.then(JSON.parse.bind(JSON))
	._lb_pluck   ( 'name' )
	._lb_without ( 'bill' )
	._lb_last    (        )
	._lb_isEqual ( 'tim'  )
	.then(console.log.bind(console));
