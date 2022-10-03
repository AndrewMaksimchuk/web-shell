export
default
function
escape(bufferInput)
{
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0); 
    bufferInput.clear();
    return true;
}