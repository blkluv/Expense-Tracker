import React from "react";

function Footer() {
  return (
    <div
      className="py-3 d-flex justify-content-center"
      style={{
        backgroundColor: "#222",
        color: "white",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        Leave a ⭐ on{" "}
        <a
          href="https://github.com/J0SAL/Decentralized-Expense-Tracker"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          Github
        </a>
        <span style={{ padding: "0 8px" }}>|</span>
        Made by{" "}
        <a
          href="https://bio.link/j0sal"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          @ARVRtise
        </a>
      </p>
    </div>
  );
}

export default Footer;
