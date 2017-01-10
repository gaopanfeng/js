var currying = function(fn){
	var args = [].slice.call(arguments,1);
	return function(){
		return fn.apply(null,args.concat([].slice.call(arguments)));
	}
};
