// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                'pulse-border': 'pulse-border 1500ms ease-out infinite',
            },
            keyframes: {
                'pulse-border': {
                    '0%': {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scale(1.5)',
                        opacity: '0',
                    },
                },
            },
        },
    },
};
