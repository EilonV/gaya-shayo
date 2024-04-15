export const HomeCmp = ({ expand, expandableRef }) => {
    return <section className="home-cmp expandable" onClick={expand} ref={expandableRef}>
        <h1 className="first">home</h1>
        <div className="expandable-data">
            <div className="header">
                <p>gaya shayo</p>
                <p>home</p>
                <p>graphic designer</p>
            </div>
            <div className="content-wrapper">
                <div className="intro">
                    <h2>hello!</h2>
                    <p>My name is Gaya Shayo; <br />
                        an Israeli visual designer, specializing in UI & UX design.
                        I graduated from Bezalel Academy of Arts and Design Jerusalem, as a Visual Communication Designer in 2023.
                    </p>
                </div>
            </div>
        </div>
    </section>
}