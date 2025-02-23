import React from "react";

export default function Home() {
  const rabatter = [
    {
      id: 1,
      kategori: "Bukser",
      produkter: [
        { butikk: "NLY Man", rabatt: "10%", link: "https://nlyman.com" },
        { butikk: "Zalando", rabatt: "15%", link: "https://zalando.no" }
      ]
    },
    {
      id: 2,
      kategori: "Gensere",
      produkter: [
        { butikk: "H&M", rabatt: "20%", link: "https://hm.com" },
        { butikk: "Ellos", rabatt: "25%", link: "https://ellos.no" }
      ]
    },
    {
      id: 3,
      kategori: "T-skjorter",
      produkter: [
        { butikk: "Nike", rabatt: "30%", link: "https://nike.com" },
        { butikk: "Adidas", rabatt: "20%", link: "https://adidas.com" }
      ]
    }
  ];

  return (
    <div className="container">
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>

      {rabatter.map((kategori) => (
        <div key={kategori.id}>
          <h2 id={kategori.kategori.toLowerCase()}>{kategori.kategori}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {kategori.produkter.map((rabatt, index) => (
              <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
                <a 
                  href={rabatt.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
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




