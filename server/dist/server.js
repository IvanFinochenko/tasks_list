'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _tasksdata = require('./data/tasksdata');

var _tasksdata2 = _interopRequireDefault(_tasksdata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)({ origin: '*' }));

app.get('/api/tasks', function (req, res) {
	res.json(_tasksdata2.default);
});

app.listen(_config2.default.port, function (err) {
	if (err) throw err;

	console.log('listening port ' + _config2.default.port);
});