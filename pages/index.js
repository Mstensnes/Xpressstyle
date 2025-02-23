import React from "react";

export default function Home() {
  const rabatter = [
    {
      id: "bukser",
      kategori: "Bukser",
      produkter: [
        { butikk: "NLY Man", rabatt: "10%", link: "#bukser" },
        { butikk: "Zalando", rabatt: "15%", link: "#bukser" }
      ]
    },
    {
      id: "gensere",
      kategori: "Gensere",
      produkter: [
        { butikk: "H&M", rabatt: "20%", link: "#gensere" },
        { butikk: "Ellos", rabatt: "25%", link: "#gensere" }
      ]
    },
    {
      id: "t-skjorter",
      kategori: "T-skjorter",
      produkter: [
        { butikk: "Nike", rabatt: "30%", link: "#t-skjorter" },
        { butikk: "Adidas", rabatt: "20%", link: "#t-skjorter" }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>

      {/* Navigasjonslenker til seksjoner */}
      <nav>
        <ul className="nav-links">
          <li><a href="#bukser">Bukser</a></li>
          <li><a href="#gensere">Gensere</a></li>
          <li><a href="#t-skjorter">T-skjorter</a></li>
        </ul>
      </nav>

      {rabatter.map((kategori) => (
        <div key={kategori.id} id={kategori.id} className="kategori-seksjon">
          <h2>{kategori.kategori}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {kategori.produkter.map((rabatt, index) => (
              <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
                <a 
                  href={rabatt.link} 
                  style={{ textDecoration: "none", color: "#1a73e8" }}
                >
                  {rabatt.butikk} - <strong>{rabatt.rabatt} rabatt</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}





