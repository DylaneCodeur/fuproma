# FUPROMA-HG — Site institutionnel

Site web officiel de la **Fédération des Unions des Producteurs de Maïs de la Haute Guinée (FUPROMA-HG)**.

> Pour une agriculture moderne, productive, résiliente et rentable en Haute Guinée.

## Aperçu

Site statique (HTML5 / CSS3 / JavaScript) multi-pages, entièrement responsive, avec une charte graphique dérivée du logo de la fédération (vert maïs, or doré, bleu).

## Fonctionnalités

- Navigation globale **desktop** + **menu latéral (drawer) mobile** avec bouton burger
- **Hero** et sliders réutilisables (variantes via attributs `data-*`)
- Effets **liquid glass / glassmorphism** modernes
- Compteurs animés, animations au défilement (AOS)
- **Carte interactive** des zones d'intervention (Leaflet + OpenStreetMap)
- **Galerie filtrable** avec lightbox (GLightbox)
- Formulaire de contact et carte du siège
- **SEO complet** : meta, Open Graph, Twitter Cards, canonical, JSON-LD, `sitemap.xml`, `robots.txt`

## Pages

| Page | Fichier |
|------|---------|
| Accueil | `index.html` |
| À propos | `presentation.html` |
| Objectifs & priorités | `objectifs.html` |
| Domaines d'intervention | `domaines.html` |
| Zones d'intervention | `zones.html` |
| Réalisations & galerie | `realisations.html` |
| Partenaires & public cible | `partenaires.html` |
| Contact | `contact.html` |

## Structure

```
.
├── index.html + 7 pages
├── css/style.css        # charte graphique + composants
├── js/main.js           # nav, footer, hero, interactions
├── assets/img/          # images optimisées (noms sémantiques)
├── assets/*.JPG         # médias sources
├── sitemap.xml, robots.txt
```

## Technologies

- HTML5, CSS3, JavaScript (vanilla)
- [Tailwind CSS](https://tailwindcss.com/) (CDN)
- [Lucide Icons](https://lucide.dev/)
- [AOS](https://michalsnik.github.io/aos/) — animations au défilement
- [Swiper](https://swiperjs.com/) — sliders
- [Leaflet](https://leafletjs.com/) + OpenStreetMap — cartes
- [GLightbox](https://biati-digital.github.io/glightbox/) — lightbox
- Google Fonts (Sora, Plus Jakarta Sans)

## Lancer en local

```bash
python3 -m http.server 8099
# puis http://localhost:8099
```

## Contact

- **Siège** : Kankan, Guinée
- **Contact** : Ibrahima Kalil Sacko
- **Téléphone** : +224 610 08 74 74
- **E-mail** : fuproma112@gmail.com
- **Web** : www.fuproma.com

## Licence

Distribué sous licence MIT — voir [LICENSE](LICENSE).
