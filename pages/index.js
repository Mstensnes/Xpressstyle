import React from "react";

export default function Home() {
  return (
    <div className="container">
      <h1>Velkommen til XpressStyle!</h1>
      <p>Her finner du de beste rabattkodene akkurat nå.</p>

      {/* Kategori-navigasjon */}
      <nav>
        <ul className="nav-links">
          <li><a href="#bukser">Bukser</a></li>
          <li><a href="#gensere">Gensere</a></li>
          <li><a href="#t-skjorter">T-skjorter</a></li>
        </ul>
      </nav>

      {/* Kategori: Bukser */}
      <section id="bukser" className="category">
        <h2>Bukser</h2>
        <ul>
          <li><a href="https://nlyman.com" target="_blank">NLY Man - <strong>10% rabatt</strong></a></li>
          <li><a href="https://zalando.no" target="_blank">Zalando - <strong>15% rabatt</strong></a></li>
        </ul>
      </section>

      {/* Kategori: Gensere */}
      <section id="gensere" className="category">
        <h2>Gensere</h2>
        <ul>
          <li><a href="https://hm.com" target="_blank">H&M - <strong>20% rabatt</strong></a></li>
          <li><a href="https://ellos.no" target="_blank">Ellos - <strong>25% rabatt</strong></a></li>
        </ul>
      </section>

      {/* Kategori: T-skjorter */}
      <section id="t-skjorter" className="category">
        <h2>T-skjorter</h2>
        <ul>
          <li><a href="https://nike.com" target="_blank">Nike - <strong>30% rabatt</strong></a></li>
          <li><a href="https://adidas.com" target="_blank">Adidas - <strong>20% rabatt</strong></a></li>
        </ul>
      </section>
    </div>
  );
}






