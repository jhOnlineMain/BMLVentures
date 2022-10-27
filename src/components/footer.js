import react from "react"
import graphql from "gatsby"

const Footer = () => {
    <footer
        style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            height: '30vh'
        }}
    >
        © {new Date().getFullYear()} &middot; Built by
        {` `}
        <a href="https://ordinaryagency.com.au">Ordinary Agency</a>
    </footer>
}

export default Footer