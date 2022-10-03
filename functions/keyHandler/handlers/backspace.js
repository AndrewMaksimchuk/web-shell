export default
function
backspace(bufferInput)
{
    const newValue = bufferInput.value.slice(0, bufferInput.value.length - 1);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0); 
    process.stdout.write(newValue);
    bufferInput.change(newValue);
    return true;
}
