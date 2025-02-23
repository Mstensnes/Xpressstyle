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

