export default
function
createBuffer()
{
	let data = "";
	let hint = "";
	let width = 0;
	let height = 0;
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
		setHint: function(value = "") {
			hint = value;
			return this;
		},
		getHint: function() {
			return hint;
		},
		setWindowSize: function(winWidth = 0, winHeight = 0) {
			width = winWidth;
			height = winHeight;
			return this;
		}
	};
}
