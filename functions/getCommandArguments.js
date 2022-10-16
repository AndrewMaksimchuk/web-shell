export default
function
getCommandArguments(text = "", only = true)
{
    const words = text.split(" ");
    const command = words.at(0);
    const commandArguments = words.slice(1).filter(Boolean);

    return only ? [...commandArguments] : { command, commandArguments };
}
