const fs = require('fs');

let input = require("./api.json");

function write(name, data) {
	fs.writeFile(`${name}.json`, JSON.stringify(data), 'utf8', (err) => {
		if (err)
			console.error(err);
	});
}


let instances = {};
let classes = input.Classes;

classes.forEach(instance => {
	instances[instance.Name] = {
		Members: instance.Members,
		Super: instance.Superclass,
		Tags: instance.Tags,
		ShortDescription: "Undocumented",
		Description: "",
		Related: [],
	}
});

write("enums", input.Enums);
write("instances", instances);