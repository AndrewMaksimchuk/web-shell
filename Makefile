default:
	./index.js /dev/pts/2

executeble:
	chmod +x ./index.js

install: executeble
	npm run install

remove:
	npm run remove

