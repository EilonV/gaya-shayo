import { useRef } from "react";

export const Home = () => {
    const expand = (e) => {
        collapse()
        e.target.classList.add('expanded');
    }

    const collapse = () => {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].current.classList.remove('expanded'));
        }
    }

    const somethingRef = useRef()
    const somethingRef1 = useRef()
    const somethingRef2 = useRef()
    const somethingRef3 = useRef()
    const arr = [somethingRef, somethingRef1, somethingRef2, somethingRef3]

    return <section className="home">
        <div className="expandable" onClick={expand} ref={somethingRef}>
            <h1 className="first">something</h1>
            <div className="expandable-data">
                <p>some stuff bro</p>
            </div>
        </div>
        <div className="expandable expanded" onClick={expand} ref={somethingRef1}>
            <h1>something</h1>
            <div className="expandable-data">
                <p>some stuff bro</p>
            </div>
        </div>
        <div className="expandable" onClick={expand} ref={somethingRef2}>
            <h1>something</h1>
            <div className="expandable-data">
                <p>some stuff bro</p>
            </div>
        </div>
        <div className="expandable" onClick={expand} ref={somethingRef3}>
            <h1>something</h1>
            <div className="expandable-data">
                <p>some stuff bro</p>
            </div>
        </div>
    </section>
}