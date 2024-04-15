import { useEffect, useRef } from "react";
import { About } from "../components/about";
import { Connect } from "../components/connect";
import { HomeCmp } from "../components/home-cmp";
import { Projects } from "../components/projects";
import { Resume } from "../components/resume";

export const Home = () => {

    useEffect(() => {
        console.log(expandableRef.current);
    })
    const expand = (e) => {
        if (e.target.classList.contains("expandable")) {
            collapse()
            e.target.classList.add('expanded');
        }
    }

    const collapse = () => {
        for (var i = 0; i < arr.length; i++) {
            arr[i].current.classList.remove('expanded');
        }
    }

    const expandableRef = useRef()
    const expandableRef1 = useRef()
    const expandableRef2 = useRef()
    const expandableRef3 = useRef()
    const expandableRef4 = useRef()
    const arr = [expandableRef, expandableRef1, expandableRef2, expandableRef3, expandableRef4]

    return <section className="home">
        <HomeCmp expand={expand} expandableRef={expandableRef} />
        <Projects expand={expand} expandableRef1={expandableRef1} />
        <About expand={expand} expandableRef3={expandableRef3} />
        <Connect expand={expand} expandableRef2={expandableRef2} />
        <Resume expand={expand} expandableRef4={expandableRef4} />
    </section>
}