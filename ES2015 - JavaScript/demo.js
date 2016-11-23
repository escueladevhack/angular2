class DescribeMyPhone {
  constructor(phoneInfo) {
    this.phoneInfo = phoneInfo;
  }

  writeData() {
    let domElem = document.createElement('div');
    domElem.innerHTML = `
      <h1 style="color: ${this.phoneInfo.color}">
        Mi teléfono se llama ${this.phoneInfo.name}
      </h1>
      <h3>
        Es de marca ${this.phoneInfo.brand}
      </h3>
      <div>
        Sus características son
        ${this.phoneInfo.features.map(feature => feature.charAt(0).toUpperCase() + feature.substring(1)).join(', ')}
      </div>
      `;

      document.body.appendChild(domElem);
  }

}

const info = {
  name: 'telefonito',
  brand: 'patito',
  color: '#66fab0',
  features: [
    'bonito',
    'rojo',
    'huele a chicle'
  ]
}

const describeMyPhone = new DescribeMyPhone(info);

describeMyPhone.writeData();