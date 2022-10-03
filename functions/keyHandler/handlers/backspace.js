export default
function
backspace(buffer)
{
    const bufValue = buffer.get();
    const newValue = bufValue.slice(0, bufValue.length - 1);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0); 
    process.stdout.write(newValue);
    buffer.change(newValue);
    return true;
}
