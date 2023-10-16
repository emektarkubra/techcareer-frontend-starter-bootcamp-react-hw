import About from "./About";
import Contact from "./Contact";
import Image from "./Image";
import Projects from "./Projects";

export default function PageContent() {
    return (
        <>
            <div style={{ maxWidth: "1564px", padding: "8px 16px", marginLeft: "auto", marginRight: "auto", boxSizing: "border-box", display: "flex", flexDirection: "column" }} className="w3-content w3-padding" >
                <Projects />
                <About />
                <Contact />
                <Image />

            </div>
        </>
    )
}