export default function Contact() {
  return (
    <>
      <div style={{ padding: "32px 16px" }} className="w3-container w3-padding-32" id="contact">
        <h3 style={{ borderColor: "#f1f1f1", paddingTop: "16px", paddingBottom: "16px", borderBottom: "1px solid #ccc", fontFamily: "Segoe UI,Arial,sans-serif", fontWeight: "400", margin: "10px 0", fontSize: "24px" }} className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
        <p style={{ margin: "15px 0" }}>Lets get in touch and talk about your next project.</p>
        <form action="/action_page.php" target="_blank" style={{ boxSizing: "border-box" }}>
          <input style={{ border: "1px solid #ccc", padding: "8px", width: "100%" }} className="w3-input w3-border" type="text" placeholder="Name" required="" name="Name" />
          <input style={{ margin: "16px 0px", padding: "8px", border: " 1px solid #ccc", width: "100%", display: "block" }} className="w3-input w3-section w3-border" type="text" placeholder="Email" required="" name="Email" />
          <input style={{ margin: "16px 0px", border: "1px solid #ccc", padding: "8px", width: "100%", display: "block" }} className="w3-input w3-section w3-border" type="text" placeholder="Subject" required="" name="Subject" />
          <input style={{ margin: "16px 0px", border: "1px solid #ccc", padding: "8px", width: "100%", display: "block" }} className="w3-input w3-section w3-border" type="text" placeholder="Comment" required="" name="Comment" />
          <button style={{ color: "#fff", backgroundColor: "#000", marginTop: "16px", marginBottom: "16px", border: "none", display: "inline-block", padding: "8px 16px", verticalAlign: "middle", overflow: "hidden", textDecoration: "none", textAlign: "center", cursor: "pointer", whiteSpace: "nowrap" }} className="w3-button w3-black w3-section" type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
        </form>
      </div>


    </>
  )
}