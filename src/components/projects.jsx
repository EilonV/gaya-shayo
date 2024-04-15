export const Projects = ({ expand, expandableRef1 }) => {
    return <section className="projects expandable" onClick={expand} ref={expandableRef1}>
        <h1>Projects</h1>
        <div className="expandable-data">
            <div className="header">
                <p>gaya shayo</p>
                <p>projects</p>
                <p>graphic designer</p>
            </div>
            <div className="content-wrapper">
                <ol>
                    <li><a href="/" target="_blank">Cakewalk</a></li>
                    <li><a href="/">Winwin</a></li>
                    <li><a href="/">Indexideas</a></li>
                    <li><a href="/">Sorrymom</a></li>
                    <li><a href="/">Illustrations</a></li>
                </ol>
            </div>
        </div>
    </section>
}