#! /usr/bin/env node
var fs = require('fs'),
	path = require('path'),
	cwd = process.cwd(),
	argv = process.argv;

var absolutePath = path.join(cwd, 'dd', 'read.md'); //G:\workplace\test\dd\read.md
    normalizePath = path.normalize(cwd+'/aa');//G:\workplace\test\aa

var readme = "README.md",
	bin = "bin",
	src = "src",
	test = "test",
	lib = "lib",
	examples = "examples",
	tools = "tools",
	doc = "doc",
	dist = "dist";

if (argv[2]) {
	var as = argv[2].substr(1).trim();
	if (as === "h" || as ==="help") {
		console.log('create base directory and file in your github project!');
	}else {
		console.log('wrong arguments!');
		console.log('-h -help for help');
	}
	return;
}

//make directory
fs.mkdir(bin, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, bin)+" success!")
});
fs.mkdir(src, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, src)+" success!")
});
fs.mkdir(test, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, test)+" success!")
});
fs.mkdir(tools, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, tools)+" success!")
});
fs.mkdir(lib, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, lib)+" success!")
});
fs.mkdir(doc, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, doc)+" success!")
});
fs.mkdir(dist, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, dist)+" success!")
});
fs.mkdir(examples, function(err){
	if (err) {console.log(err);return;}
	console.log('created '+path.join(cwd, examples)+" success!")
});

// make file
fs.writeFile(readme, '** read me!', function(err){
	if(err){console.log(err);return;}
	console.log('write readme.md success!');
});

//console.log(process.argv);