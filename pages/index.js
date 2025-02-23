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


