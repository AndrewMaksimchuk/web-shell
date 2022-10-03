export
default
function
escape(buffer)
{
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0); 
    buffer.clear();
    return true;
}