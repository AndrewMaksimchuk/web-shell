const keyWords = [
    'template',
]


export function hint(keyWords, inputCharacters, bufferInput) {
    const currPositionX = bufferInput.length;
	return keyWords.filter((keyWord) => {
        if (keyWord.includes(inputCharacters)) {
            
            process.stdout.cursorTo(0);
            process.stdout.write('\u001b[34m' + keyWord + '\u001b[0m');
            process.stderr.write(bufferInput)
            process.stdout.cursorTo(currPositionX);

            // process.stdout.moveCursor()
			// process.stdout.write(inputCharacters)
		}
	});
}