var currying = function(){
	var func = arguments[0];
	var args = [].slice.call(arguments,1);
	return function(){
		var new_args = [].slice.call(arguments,0);
		return func.apply(null,args.concat(new_args));
	}
};
