// @@@LICENSE
//
//      Copyright (c) 2010-2013 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// LICENSE@@@

var webOS = require('webos');
console.log("Testing require");
var r = webOS.require(require, {name: "loader"}, ['require_target.js']);
console.log("typeof r = " + typeof r);
console.log("r.exports = " + r.exports);
if (r.MojoLoader) {
	console.log("r.exports.name = " + r.exports.name);	
}
