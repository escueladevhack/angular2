class HotelApi {
  
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getData() {
    return fetch(this.apiUrl)
  }
}


class ShowHotels {
  constructor(hotelData){
    hotelData.then(response => {
      response.json().then(data => data.forEach(hotel => this.paintStuff(hotel)))
    });
  }

  paintStuff(hotelInfo) {
    let domElem = document.createElement('div');
    domElem.innerHTML = `
      <h1>
        ${hotelInfo.name}
      </h1>
      <h3>
        ${hotelInfo.description}
      </h3>
      `;
      this.paintPicrures(hotelInfo.pictures[0], domElem);
      
  }

  paintPicrures(pictureUrl, domElem) {
    let newImage = new Image(500, 500);
    newImage.src = pictureUrl;
    newImage.onload = () => {
      domElem.appendChild(newImage);
      document.body.appendChild(domElem);
    } 
  }
}

const API_URL = 'http://192.168.1.185:3000/api/hotels';

const hotelApi = new HotelApi(API_URL);

const showHotels = new ShowHotels(hotelApi.getData());