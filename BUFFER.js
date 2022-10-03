import createBuffer from "./functions/createBuffer.js";


export default
{
	value: "",
	x: 0,
	y: 0,
	toString: function() 
	{
		return this.value;
	},
	clear: function() 
	{
		this.value = "";
		return this;
	},
	add: function(value) 
	{
		this.value += String(value);
		return this;
	},
	change: function(value) 
	{
		this.value = value;
		return this;
	},
	get: function() {
		return this.value;
	},
};