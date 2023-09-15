import Layout from "../components/Layout"

export default function PlaceholderPage(props) {
    return (
        <Layout>
            <section className="page-container contain-width">
                <h1>{props.title || 'This is a placeholder page'}</h1>
                <br />
                <p>This is a placeholder page.</p>
                <br />
                <p>Bacon ipsum dolor amet in alcatra irure, capicola pig aliqua officia magna kielbasa quis boudin shoulder ribeye eu ground round. Shank minim chuck ex, dolore spare ribs picanha fatback strip steak aute quis elit. Kevin cillum leberkas lorem enim do ut bacon chislic qui picanha bresaola eu flank tail. Qui anim pancetta kielbasa consequat alcatra in dolore, ground round quis laborum beef esse. Flank pastrami shank fugiat short ribs veniam et frankfurter t-bone fatback.</p>
            </section>
        </Layout>
    )
}