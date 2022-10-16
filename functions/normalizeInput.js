export default
function
normalizeInput(buffer)
{
    const normText = buffer.get().replaceAll(/\s+/g, " ");
    return buffer.change(normText);
}
