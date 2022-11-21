module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/js/components/**/*.vue",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '3rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
