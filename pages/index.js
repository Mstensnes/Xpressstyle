import React from "react";

export default function Home() {
  const rabatter = [
    {
      id: 1,
      kategori: "Bukser",
      produkter: [
        { butikk: "NLY Man", rabatt: "10%", link: "#bukser" },
        { butikk: "Zalando", rabatt: "15%", link: "#bukser" }
      ]
    },
    {
      id: 2,
      kategori: "Gensere",
      produkter: [
        { butikk: "H&M", rabatt: "20%", link: "#gensere" },
        { butikk: "Ellos", rabatt: "25%", link: "#gensere" }
      ]
    },
    {
      id: 3,
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

      {/* Kategorier med ankerlenker */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {rabatter.map((kategori) => (
          <li key={kategori.id} style={{ marginTop: "20px" }}>
            <h2 id={kategori.kategori.toLowerCase()}>{kategori.kategori}</h2>
            <ul>
              {kategori.produkter.map((rabatt, index) => (
                <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
                  <a href={rabatt.link} style={{ textDecoration: "none", color: "#1a73e8" }}>
                    {rabatt.butikk} - <strong>{rabatt.rabatt} rabatt</strong>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}



