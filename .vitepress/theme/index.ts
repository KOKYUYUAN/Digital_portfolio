// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // register your custom global components
    }
}
