import React from "react";

export default function Home() {
  const rabatter = [
    { id: 1, butikk: "NLY Man", rabatt: "10%", link: "https://nlyman.com" },
    { id: 2, butikk: "Ferner Jacobsen", rabatt: "20%", link: "https://fernerjacobsen.no" },
    { id: 3, butikk: "Care of Carl", rabatt: "15%", link: "https://careofcarl.no" },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rabatter.map((rabatt) => (
          <li key={rabatt.id} style={{ margin: "10px 0", fontSize: "18px" }}>
            <a href={rabatt.link} target="_blank" rel="noopener noreferrer">
              {rabatt.butikk} - <strong>{rabatt.rabatt} rabatt</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React from "react";
import "../styles/global.css"; // Sørg for at CSS-en er importert

export default function Home() {
  return (
    <div className="container">
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>

      {/* Hovedkategori: Klær */}
      <div className="category">
        <h2>👕 Klær</h2>

        {/* Underkategori: Gensere */}
        <div className="subcategory">
          <h3>Gensere</h3>
          <ul>
            <li>
              <a href="https://nlyman.com" target="_blank">
                NLY Man - <span className="discount">10% rabatt</span>
              </a>
            </li>
            <li>
              <a href="https://fernerjacobsen.no" target="_blank">
                Ferner Jacobsen - <span className="discount">20% rabatt</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Underkategori: Bukser */}
        <div className="subcategory">
          <h3>Bukser</h3>
          <ul>
            <li>
              <a href="https://careofcarl.no" target="_blank">
                Care of Carl - <span className="discount">15% rabatt</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Underkategori: T-skjorter */}
        <div className="subcategory">
          <h3>T-skjorter</h3>
          <ul>
            <li>
              <a href="https://nlyman.com" target="_blank">
                NLY Man - <span className="discount">10% rabatt</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

