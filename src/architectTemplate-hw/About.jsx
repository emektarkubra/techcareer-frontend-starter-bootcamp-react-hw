export default function About() {
    return (
        <>
            <style>
                {`
                  @media (min-width: 993px)
                   .w3-col.l3 {
                     width: 24.99999%;
                    }
                    
                    .w3-button:hover {
                        background-color : #c0bbbb !important;
                    }
       
                `}
            </style>
            <div style={{ padding: "32px 16px" }} className="w3-container w3-padding-32" id="about">
                <h3 style={{ padding: "16px 0px", borderBottom: "1px solid #f1f1f1", fontSize: "24px" }} className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p style={{ margin: "15px 0px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


            <div style={{ filter: "grayscale(75%)", padding: "0 8px" }} className="w3-row-padding w3-grayscale">
                <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
                    <img style={{ width: "100%", verticalAlign: "miidle", borderStyle: "none" }} src="https://www.w3schools.com/w3images/team2.jpg" alt="John" />
                    <h3 style={{ fontSize: "24px" }}>John Doe</h3>
                    <p style={{ opacity: "0.60", margin: "15px 0px" }} className="w3-opacity">CEO & Founder</p>
                    <p style={{ margin: "15px 0px" }}>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button style={{ color: "#000", backgroundColor: "#f1f1f1", display: "block", width: "100%", border: "none", padding: "8px 16px", verticalAlign: "middle", textDecoration: "none", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap" }} className="w3-button w3-light-grey w3-block">Contact</button></p>
                </div>
                <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
                    <img style={{ width: "100%", verticalAlign: "miidle", borderStyle: "none" }} src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" />
                    <h3 style={{ fontSize: "24px" }}>Jane Doe</h3>
                    <p style={{ opacity: "0.60", margin: "15px 0px" }} className="w3-opacity">Architect</p>
                    <p style={{ margin: "15px 0px" }}>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button style={{ color: "#000", backgroundColor: "#f1f1f1", display: "block", width: "100%", border: "none", padding: "8px 16px", verticalAlign: "middle", textDecoration: "none", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap" }} className="w3-button w3-light-grey w3-block">Contact</button></p>
                </div>
                <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
                    <img style={{ width: "100%", verticalAlign: "miidle", borderStyle: "none" }} src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" />
                    <h3 style={{ fontSize: "24px" }}>Mike Ross</h3>
                    <p style={{ opacity: "0.60", margin: "15px 0px" }} className="w3-opacity">Architect</p>
                    <p style={{ margin: "15px 0px" }}>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button style={{ color: "#000", backgroundColor: "#f1f1f1", display: "block", width: "100%", border: "none", padding: "8px 16px", verticalAlign: "middle", textDecoration: "none", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap" }} className="w3-button w3-light-grey w3-block">Contact</button></p>
                </div>
                <div style={{ padding: "0 8px", marginBottom: "70px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
                    <img style={{ width: "100%", verticalAlign: "miidle", borderStyle: "none" }} src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" />
                    <h3 style={{ fontSize: "24px" }}>Dan Star</h3>
                    <p style={{ opacity: "0.60", margin: "15px 0px" }} className="w3-opacity">Architect</p>
                    <p style={{ margin: "15px 0px" }}>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                    <p><button style={{ color: "#000", backgroundColor: "#f1f1f1", display: "block", width: "100%", border: "none", padding: "8px 16px", verticalAlign: "middle", textDecoration: "none", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap" }} className="w3-button w3-light-grey w3-block">Contact</button></p>
                </div>
            </div>
        </>
    )
}