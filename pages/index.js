import React from "react";

const rabatter = {
  "Klær": {
    "Gensere": [
      { id: 1, butikk: "NLY Man", rabatt: "10%", link: "https://nlyman.com" },
      { id: 2, butikk: "Zalando", rabatt: "15%", link: "https://zalando.no" }
    ],
    "Bukser": [
      { id: 3, butikk: "H&M", rabatt: "20%", link: "https://hm.com" },
      { id: 4, butikk: "Asos", rabatt: "25%", link: "https://asos.com" }
    ]
  },
  "Sko": {
    "Sneakers": [
      { id: 5, butikk: "Nike", rabatt: "30%", link: "https://nike.com" },
      { id: 6, butikk: "Adidas", rabatt: "15%", link: "https://adidas.no" }
    ],
    "Boots": [
      { id: 7, butikk: "Timberland", rabatt: "10%", link: "https://timberland.com" },
      { id: 8, butikk: "Ecco", rabatt: "20%", link: "https://ecco.com" }
    ]
  }
};

export default function Home() {
  return (
    <div className="container">
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>

      {Object.keys(rabatter).map((kategori) => (
        <div key={kategori} className="category">
          <h2>{kategori}</h2>

          {Object.keys(rabatter[kategori]).map((underkategori) => (
            <div key={underkategori} className="subcategory">
              <h3>{underkategori}</h3>
              <ul className="rabatt-liste">
                {rabatter[kategori][underkategori].map((rabatt) => (
                  <li key={rabatt.id}>
                    <a href={rabatt.link} target="_blank" rel="noopener noreferrer">
                      {rabatt.butikk} - <strong>{rabatt.rabatt} rabatt</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


