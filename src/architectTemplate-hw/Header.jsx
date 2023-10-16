export default function Header() {
    return (
        <>
            <header style={{ maxWidth: "1500px", position: "relative", letterSpacing: "4px" }} className="w3-display-container w3-content w3-wide" id="home">
                <img style={{ maxWidth: "100%", height: "auto", verticalAlign: "middle", }} className="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" alt="Architecture" width="1500" height="800" />
                <div style={{ marginTop: "16px", textAlign: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", }} className="w3-display-middle w3-margin-top w3-center">
                    <h1 style={{ color: "#f1f1f1", fontSize: "36px", fontFamily: "Segoe UI, Arial,sans-serif", fontWeight: "400", margin: "10px 0" }} className="w3-xxlarge w3-text-white"><span style={{ backgroundColor: "#000", opacity: "0.75", display: "inline-block", padding: "8px 16px" }} className="w3-padding w3-black w3-opacity-min"><b style={{ fontSize: "36px" }}>BR</b></span> <span style={{ fontSize: "36px" }} className="w3-hide-small w3-text-light-grey">Architects</span></h1>
                </div>
            </header>
        </>
    )
}