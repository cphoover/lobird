var _ = require("lodash"), Promise = require("bluebird");

_.chain ( _.prototype  )
.pick   ( _.isFunction )
.each   ( function ( v, k) {
	Promise.prototype["_" + k] = function(opts) {
		var args = _.toArray(arguments);
		return this.then(function(res){
			return _[k].apply(_,[res].concat(args));
		});
	};
});

module.exports = Promise;
