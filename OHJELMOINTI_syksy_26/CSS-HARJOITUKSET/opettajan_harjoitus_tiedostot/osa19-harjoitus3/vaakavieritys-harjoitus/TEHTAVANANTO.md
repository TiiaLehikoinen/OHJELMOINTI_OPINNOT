# Tehtävä: Miksi mobiilisivu vierii vaakasuunnassa?

## Tavoite
Selvitä Chrome DevToolsin avulla, miksi sivu vierii mobiilissa vaakasuunnassa, ja korjaa ongelman varsinainen syy.

## Työvaiheet
1. Avaa `index.html` selaimessa.
2. Avaa DevTools (F12 tai hiiren oikea → Tarkasta).
3. Käynnistä Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M).
4. Testaa leveydet 320 px, 375 px, 390 px ja 768 px.
5. Vieritä sivua sivusuunnassa. Etsi elementti, joka ylittää näkymän leveyden.
6. Tutki Elements-paneelissa elementin CSS-sääntöjä ja Computed-arvoja.
7. Korjaa CSS siten, että sisältö mahtuu pienelle näytölle.
8. Tarkista, että myös 200 % zoomaus toimii.

## Palautus
Palauta korjattu `styles.css` sekä lyhyt selitys: mikä sääntö aiheutti ongelman, miksi ja miten korjasit sen? Liitä ennen/jälkeen-kuvakaappaukset.

## Vinkki
DevToolsin Console-välilehdellä voit kokeilla seuraavaa koodia. Se näyttää elementit, jotka ulottuvat näkyvän alueen ulkopuolelle:

```js
[...document.querySelectorAll('*')].filter(el => {
  const rect = el.getBoundingClientRect();
  return rect.right > document.documentElement.clientWidth + 1 || rect.left < -1;
});
```

Älä korjaa ongelmaa lisäämällä `overflow-x: hidden` body-elementille: se voi vain piilottaa virheen ja leikata sisältöä.
