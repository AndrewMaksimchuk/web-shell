# web-shell

Quick create vue components from terminal,  
see available npm scripts and makefile commands,  
create your own notes and get information about html tags and css properties.  


## Create vue component  
`template create` -> ./components/Default.vue  
`template create NewUser.vue` -> ./components/NewUser.vue with composition API  
`template create NewUser.vue --option` -> ./components/NewUser.vue with option API  
`template create NewUser.vue --composition` -> ./components/NewUser.vue with composition API  
`template create NewUser.vue path=absolute_path` -> absolute_path/NewUser.vue with composition API  
`template create NewUser.vue --option path=absolute_path` -> absolute_path/NewUser.vue with composition API  


## Notes
`note create note_name` -> Create note. Open vi editor.  
`note show note_name`, `note update note_name`, `note search note_name`, `note remove note_name`, `note clear`  


## NPM and Makefile
`npm + press_tab` -> Show list of scripts.  
`make + press_tab` -> Show available commands.  


## Install
1. `git clone "this_repository"`
2. `npm run install` - Install that package globally.  


## Platform
Linux: Ubuntu


## Shell commandsgst
- [+] "cd"
- [+] "ls"
- [-] "js"
- [+] "npm"
- [+] "css"
- [+] "make"
- [+] "exit"
- [+] "help"
- [+] "read"
- [+] "note"
- [+] "html"
- [+] "mkdir"
- [+] "history"
- [+] "template"
- [+] "markdown"
- [+] "documentation"
- [-] "wiki"


## Commands description
- `cd` - Change directory  
- `ls` - List directory contents  
- `npm` - Show npm scripts and run it  
- `css` - Open browser with page of property description `css border`  
- `make` - Show Makefile commands and run it  
- `exit` - Exit from shell  
- `help` - Show this file  
- `read` - Show of file content  
- `note` - Create, read, update, delete your own notes  
- `html` - Open browser with page of tag description `html div`  
- `mkdir` - Create new directory or directories  
- `history` - Show history of shell input  
- `template` - Work with framework component  
- `markdown` - Show cheat sheet  
- `documentation` - Show documentation of javascript module(.js file) and generate markdown file from it  

