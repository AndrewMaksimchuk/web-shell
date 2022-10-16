export default
{
    cd: "cd",
    ls: "ls",
    npm: "npm",
    make: "make",
    exit: "exit",
    help: "help",
    read: "read",
    mkdir: "mkdir",
    history: "history",
    markdown: "markdown",
    html: "html",
    css: "css",
    note: 
    {
        value: "note",
        subcommands:
        {
            show: 
            {
                value: "show",
            },
            create: 
            {
                value: "create",
            },
            remove: 
            {
                value: "remove",
            },
            update: 
            {
                value: "update",
            },
            search: 
            {
                value: "search",
            },
            clear:
            {
                value: "clear",
            },
        },
    },
    documentation:
    {
        value: "documentation",
        subcommands:
        {
            read:
            {
                value: "read",
            },
            generate:
            {
                value: "generate",
            },
        },
    },
    template: 
    {
        value: 'template',
        subcommands:
        {
            create: 
            {
                value: 'create',
                options: 
                {
                    option: 
                    {
                        value: "--option",
                        template: "option.vue",
                    },
                    composition: 
                    {
                        value: "--composition",
                        template: "composition.vue",
                    },
                    path: "path=",
                }
            },
            remove: 'remove',
        },
    },
}
