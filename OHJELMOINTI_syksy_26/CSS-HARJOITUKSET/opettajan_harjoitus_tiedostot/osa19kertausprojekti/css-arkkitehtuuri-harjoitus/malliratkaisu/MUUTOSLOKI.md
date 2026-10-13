# Opettajan mallivastauksen muutosloki

| Ennen | Jälkeen | Miksi |
|---|---|---|
| ID-valitsimet ja !important | Luokkavalitsimet kerroksessa components | Vähemmän spesifisyyskilpailua |
| Toistuvat violetit ja värit | :root design tokenit | Muutokset yhdessä paikassa |
| Korttityylit kahdesti | Yksi .course-card-sääntö | Vähemmän toistoa |
| Viewport-mediaquery kortille | Nimetty @container course | Sama kortti eri levyisissä säiliöissä |
| Kiinteä height | min-height | Teksti mahtuu kasvaessaan |
| outline:none | :focus-visible | Näppäimistökohdistus näkyy |
| Heikko .tag-kontrasti | Tummempi väri | Luettavuus paranee |
| 3 kiinteää saraketta | auto-fit/minmax | Kapeat näytöt toimivat |
| transition:all | transform + reduced-motion | Rajatumpi animaatio |

**Testaa myös:** leveässä pääsisällössä ja kapeassa sivupalkissa; 320px ja 390px; 200 % zoom. Huomaa, että `@container`-asettelu vaihtuu vasta, kun yksittäisen kortin säiliö on vähintään 28rem leveä.
