export default
function
isTerminal(TTY)
{
    return TTY && TTY.includes("/pts/");
}
