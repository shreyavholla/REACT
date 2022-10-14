function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

function filter(elems, predicateFn) {
    var res = [];
    forEach(elems, function(e) {
        if(predicateFn(e)) {
            res.push(e);
        }
    });
    return res;
}

