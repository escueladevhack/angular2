// ----------
// Promises & Bonus: Fetch
// ----------------

class ArtStuff {
  constructor(query) {
    this.getArt(query);
  }

  getArt(query) {
    fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=fpGQTuED&format=json&q=${query}`, {mode: 'no-cors'}).then(response => {
        response.json().then(data => {
          data.artObjects.forEach(artObject => {
            if(artObject.hasImage) {
              let newImage = new Image(500, 500);
              newImage.src = artObject.webImage.url;
              newImage.onload = () => {
                document.body.appendChild(newImage);
              }
            }
          })
        })
      }).catch(err => {
        console.warn(err);
      });
  }
}

const foo = new ArtStuff();

foo.getArt('Van Gogh');
