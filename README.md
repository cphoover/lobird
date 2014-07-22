lobird
=======

A freak hybrid of bluebird and lodash

### Example Usage
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

### NOTE
	this hasn't been fully tested, use at your own risk

### TODO
- Add test suite with different use cases
- Make sure it works when passed a Promise
	- [like bluebird map](https://github.com/petkaantonov/bluebird/blob/master/API.md#mapfunction-mapper--object-options---promise)
