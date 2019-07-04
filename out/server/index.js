"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use('/api', require('./routes/sample-api.ts'));
app.listen(8080, function () {
  return console.log("Listening on 8080!");
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaW5kZXgudHMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwicmVxdWlyZSIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsMEJBQVo7QUFHQUEsR0FBRyxDQUFDQyxHQUFKLENBQVEsTUFBUixFQUFnQkMsT0FBTyxDQUFDLHdCQUFELENBQXZCO0FBRUFGLEdBQUcsQ0FBQ0csTUFBSixDQUFXLElBQVgsRUFBaUI7QUFBQSxTQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixDQUFOO0FBQUEsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5cbmFwcC51c2UoJy9hcGknLCByZXF1aXJlKCcuL3JvdXRlcy9zYW1wbGUtYXBpLnRzJykpO1xuXG5hcHAubGlzdGVuKDgwODAsICgpID0+IGNvbnNvbGUubG9nKFwiTGlzdGVuaW5nIG9uIDgwODAhXCIpKTtcbiJdfQ==