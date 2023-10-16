export default function Navbar() {
    return (
        <>
            <style>
                {`
                  a:hover {
                   background-color : #c0bbbb ;
                  }
                `}
            </style>
            <div style={{ backgroundColor: "white", position: "fixed", top: "0", width: "100%", zIndex: "1" }} className="w3-top">
                <div style={{ display: "flex", justifyContent: "space-between", color: "black", backgroundColor: "fff", padding: "8px 16px", boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)", letterSpacing: "4px" }} className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a style={{ color: "black", padding: "8px 16px", float: "left", width: "auto", border: "none", display: "block", outline: "0", textDecoration: "none", hover: "backgroundColor : red" }} href="#home" className="w3-bar-item w3-button"><b style={{ fontWeight: "bolder" }}>BR</b> Architects</a>
                    <div style={{ float: "right !important" }} className="w3-right w3-hide-small">
                        <a style={{ color: "black", padding: "8px 16px", float: "left", width: "auto", border: "none", display: "block", outline: "0", textDecoration: "none", textAlign: "center", cursor: "pointer" }} href="#projects" className="w3-bar-item w3-button">Projects</a>
                        <a style={{ color: "black", padding: "8px 16px", float: "left", width: "auto", border: "none", display: "block", outline: "0", textDecoration: "none", textAlign: "center", cursor: "pointer" }} href="#about" className="w3-bar-item w3-button">About</a>
                        <a style={{ color: "black", padding: "8px 16px", float: "left", width: "auto", border: "none", display: "block", outline: "0", textDecoration: "none", textAlign: "center", cursor: "pointer" }} href="#contact" className="w3-bar-item w3-button">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}