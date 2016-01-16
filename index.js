var zeroise = function(number, threshold, pad) {
	if ( typeof pad === 'undefined' ) {
		pad = '0';
	}

	var width = number.toString().length;
	if ( width >= threshold ) {
		return number + "";
	}

	return Array(threshold - width + 1).join(pad) + number;
}

module.exports = zeroise;