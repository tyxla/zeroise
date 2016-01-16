var tape = require('tape');
var zeroise = require('./');

tape('add leading zeros when number digits are more than the threshold', function(t) {
	var result = zeroise(12, 4);
	var expected = '0012';

	t.same( result, expected );

	t.end();
});

tape('leave the number untouched when number digits are the same as the threshold', function(t) {
	var result = zeroise(1234, 4);
	var expected = '1234';

	t.same( result, expected );

	t.end();
});

tape('leave the number untouched when number digits are more than the threshold', function(t) {
	var result = zeroise(12345, 4);
	var expected = '12345';

	t.same( result, expected );

	t.end();
});

tape('use a custom padding string', function(t) {
	var result = zeroise(12, 4, 5);
	var expected = '5512';

	t.same( result, expected );

	t.end();
});