const fs = require('fs');

let input = require("./api.json");

function write(name, data) {
	fs.writeFile(`${name}.json`, JSON.stringify(data, null, "	"), 'utf8', (err) => {
		if (err)
			console.error(err);
	});
}


let instances = {};
let classes = input.Classes;

var reads = 0;

classes.forEach(instance => {
	let name = instance.Name
	reads++;
	fs.readFile(`Instances/${name}/Description.md`, "utf8", (err, data) => {
		console.log(name, err, data)
		reads--;
		instances[name] = {
			// Members: instance.Members,
			Super: instance.Superclass,
			Tags: instance.Tags,
			ShortDescription: "Undocumented",
			Description: data == null ? "" : data,
			Related: [],
		}
		if (reads == 0)
			write("instances", instances);
	});
	
});

write("enums", input.Enums);