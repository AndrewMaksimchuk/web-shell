export default
function
ctrlC(buffer, ctrl)
{
    return ctrl ? process.exit() : false;
}
