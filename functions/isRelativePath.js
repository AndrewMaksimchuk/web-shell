export default
function
isRelativePath(path)
{
    return path.startsWith(".") || path.startsWith("..") ? true : false;
}
