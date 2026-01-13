import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Kok Yu Yuan | Portfolio',
    description: 'Engineering & AI Portfolio',
    base: '/Digital_portfolio/',

    themeConfig: {
        logo: '/Digital_portfolio/Profile.png',

        // Search functionality
        search: {
            provider: 'local'
        },

        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            { text: 'Skills', link: '/skills' },
            { text: 'Projects', link: '/projects' },
            { text: 'Contact', link: '/contact' }
        ],

        sidebar: [
            {
                text: 'Portfolio',
                items: [
                    { text: 'Home', link: '/' },
                    { text: 'About Me', link: '/about' },
                    { text: 'Skills', link: '/skills' },
                    { text: 'Contact', link: '/contact' }
                ]
            },
            {
                text: 'Projects',
                items: [
                    { text: 'Tourism Anomaly Detection', link: '/projects/tourism' },
                    { text: 'Water Quality Monitoring', link: '/projects/water-quality' },
                    { text: 'Night Landscape Enhancement', link: '/projects/night_landscape_enhancement' }
                ]
            },

            {
                text: 'DIP Class',
                collapsed: true, // Collapsible folder
                items: [
                    { text: 'Reflection For DIP class', link: '/dip/reflection' },
                    { text: 'DIP Assignment', link: '/dip/assignment' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com' },
            { icon: 'linkedin', link: 'https://linkedin.com' }
        ]
    }
})
