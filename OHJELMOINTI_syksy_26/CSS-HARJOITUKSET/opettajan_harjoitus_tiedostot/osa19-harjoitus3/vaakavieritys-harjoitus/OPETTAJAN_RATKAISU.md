# Opettajan malliratkaisu

Ongelma on `styles.css`-tiedoston mobiilimediaehdossa:

```css
@media (max-width: 650px) {
  .product-card { min-width: 420px; }
}
```

Kortin vähimmäisleveys on 420 px, vaikka esimerkiksi 375 px leveän näkymän sisältöalue on sivun paddingien vuoksi tätä kapeampi. Grid-sarakkeen sisältö ylivuotaa ja aiheuttaa vaakavierityksen.

Korjaus: poista `.product-card { min-width: 420px; }` kokonaan tai muuta `min-width: 0;`-määritykseksi. Koska `.product-grid` vaihtuu mobiilissa yhteen sarakkeeseen, kortti täyttää käytettävissä olevan tilan.

Testaa 320/375/390/768 px, 200 % zoom sekä pitkät tekstit. Älä peitä oiretta `overflow-x: hidden` -määrityksellä.
