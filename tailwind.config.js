const typographyStyles = require('./typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.html.twig',
    ],
    darkMode: 'selector',
    theme: {
        fontSize: {
            xs: ['0.8125rem', { lineHeight: '1.5rem' }],
            sm: ['0.875rem', { lineHeight: '1.5rem' }],
            base: ['1rem', { lineHeight: '1.75rem' }],
            lg: ['1.125rem', { lineHeight: '1.75rem' }],
            xl: ['1.25rem', { lineHeight: '2rem' }],
            '2xl': ['1.5rem', { lineHeight: '2rem' }],
            '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
            '4xl': ['2rem', { lineHeight: '2.5rem' }],
            '5xl': ['3rem', { lineHeight: '3.5rem' }],
            '6xl': ['3.75rem', { lineHeight: '1' }],
            '7xl': ['4.5rem', { lineHeight: '1' }],
            '8xl': ['6rem', { lineHeight: '1' }],
            '9xl': ['8rem', { lineHeight: '1' }],
        },
        typography: typographyStyles,
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1024px',
            }
        },
        extend: {
            colors: {
                yellow: {
                    d: '#ffff00',
                },
                code: {
                    pre: {
                        bg: '#2b2b2b'
                    }
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}
