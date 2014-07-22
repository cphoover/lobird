var lobird = require("./");

var request = lobird.promisify(require("request"));

request("http://www.google.com")
._lb_first ( )
._lb_pick  ( 'headers')
.then      ( function (obj) {
	console.log(arguments);
});

request({
	url     : "https : //api.github.com/users/cphoover/repos",
	json    : true
	headers : {
		"User-Agent": "request"
	},
})
._lb_last()
._lb_pluck("name")
.bind(console)
.then(console.log);
