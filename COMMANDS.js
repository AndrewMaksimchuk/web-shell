export default
{
    npm: "npm",
    make: "make",
    exit: "exit",
    run:
    {
        value: "run",
        option:
        {

        }
    },
    template: 
    {
        value: 'template',
        children:
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
