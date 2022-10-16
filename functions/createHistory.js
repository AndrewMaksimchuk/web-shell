import buffer from "../BUFFER.js";
import newLine from "./newLine.js";
import write from "./write.js";


export default
function
createHistory()
{
    const data = [];
    let length = data.length;
    let currentPosition = length || length + 1; // Default position outside of history

    return {
        isAvailable: function()
        {
            return Boolean(length);
        },

        add: function(value = "")
        {
            if (value)
            {
                length = data.push(value);
                currentPosition = length + 1;
            }

            return this;
        },

        clear: function()
        {
            data.length = 0;
            length = data.length;
            currentPosition = length || length + 1;
            return this;
        },

        getAll: function()
        {
            return data;
        },

        getOn: function(to = "up")
        {
            if (this.isAvailable())
            {
                if (to === "down")
                {
                    if (currentPosition >= length) return "";
                    currentPosition += 1;
                    return data.at(currentPosition);
                }

                if (currentPosition === 0)
                {
                    return data.at(currentPosition);
                }

                currentPosition -= 1;
                return data.at(currentPosition);
            }

            return "";
        },      
    };
}
