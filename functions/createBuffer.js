export default
function
createBuffer()
{
	let data = "";
	let x = 0;
	let y = 0;
	return {
		toString: function() 
		{
			return data;
		},
		clear: function() 
		{
			data = "";
			return this;
		},
		add: function(value = "") 
		{
			data += String(value);
			return this;
		},
		change: function(value = "") 
		{
			data = value;
			return this;
		},
		get: function() {
			return data;
		},
	};
}
