export default function Projects() {

  return (
    <>
      <style>
        {`
          @media (min-width: 993px) {
            .w3-col.l3 {
              width: 24.99999%;
            }
          }

          @media (max-width: 993px) {
            .w3-col.l3,
            .w3-col.m6,
            .w3-half {
              width: 49.99999%;
            }
          }
          @media (max-width: 601px) {
            .w3-col.l3,
            .w3-col.m6,
            .w3-half {
              width: 100%;
            }
          }

        `}
      </style>

      <div style={{ padding: "32px 16px" }} className="w3-container w3-padding-32" id="projects">
        <h3 style={{ fontSize: "24px", paddingTop: "16px", paddingBottom: "16px", borderBottom: "1px solid #ccc", borderColor: "#f1f1f1" }} className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
      </div>

      <div style={{ padding: "0 8px", boxSizing: "border-box", display: "flex", flexWrap: "wrap" }} className="w3-row-padding">

        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative" }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Summer House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house5.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Brick House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house2.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Renovated</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house3.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative" }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Barn House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house4.jpg" alt="House" />
          </div>
        </div>
      </div>
      <div style={{ padding: "0 8px", boxSizing: "border-box", display: "flex", flexWrap: "wrap" }} className="w3-row-padding">
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Summer House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house2.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Brick House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house5.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Renovated</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house4.jpg" alt="House" />
          </div>
        </div>
        <div style={{ padding: "0 8px", marginBottom: "16px", float: "left" }} className="w3-col l3 m6 w3-margin-bottom">
          <div style={{ position: "relative", }} className="w3-display-container">
            <div style={{ color: "#fff", backgroundColor: "black", padding: "8px 16px", position: "absolute", left: "0", top: "0" }} className="w3-display-topleft w3-black w3-padding">Barn House</div>
            <img style={{ width: "100%", verticalAlign: "middle" }} src="https://www.w3schools.com/w3images/house3.jpg" alt="House" />
          </div>
        </div>

      </div>
    </>
  )
}