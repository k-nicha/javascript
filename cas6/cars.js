/* Da se definira klasa kola koja sto sodrzi
 properties: model, boja, dolzina, godina na proizvodstvo,
 maksimalna brzina i momentalna brzina

 Treba da se kreiraat dva metodi so koi sto ke go
 ubrzuvame i usporuvame voziloto. Pri ubrzuvanje, dokolku ja dostigneme
 maksimalnata brzina, i probame da ubrzame uste povekje, da se ispecati predupreduvanje (ne moze da odis pobrzo od 200)
 Pri usporuvanje, dokolku stigneme do 0, da se ispecati poraka deka voziloto e zapreno (stopping...)

 Dvata metodi za ubrzuvanje i usporuvanje treba kako parametar da primaat vrednost
 (za kolku km/h ubrzuvame ili usporuvame) +20 -20

 Dokolku ja postigneme ili premineme maksimalnata brzina, da se vrati voziloto na 0 km/h

 Vozenjeto na kolata go simulirame so beskonecen while ciklus */

class Car {
  constructor(model, color, length, year, maxVelocity, currentVelocity) {
    this.model = model
    this.color = color
    this.length = length
    this.year = year
    this.maxVelocity = maxVelocity
    this.currentVelocity = currentVelocity
  }

  goFaster(acceleration) {
    this.currentVelocity += acceleration
    if (this.currentVelocity >= this.maxVelocity) {
      console.log('You have reached the maximum speed limit')
      this.goSlower(this.currentVelocity)
    } else {
      console.log(`Accelerating by ${acceleration} km/h`)
    }
  }

  goSlower(deceleration) {
    this.currentVelocity -= deceleration
    if (this.currentVelocity <= 0) {
      console.log('The car is stopping')
    } else {
      console.log(`Slowing down by ${deceleration} km/h`)
    }
  }
}

const Jeep = new Car(
  'Jeep',
  'white',
  5,
  2010,
  200,
  50
)

while (Jeep.currentVelocity > 0) {
  Jeep.goFaster(50)
}


class SportsCar extends Car {
  constructor(
    model,
    color,
    length,
    year,
    maxVelocity,
    currentVelocity,
    rimSize,
    nbExhaust
  ) {
    super(model, color, length, year, maxVelocity, currentVelocity)
    this.rimSize = rimSize
    this.nbExhaust = nbExhaust
  }
}

const McLaren = new SportsCar(
  'McLaren',
  'blue',
  5,
  2015,
  300,
  150,
  15,
  2
)


while (McLaren.currentVelocity > 0) {
  McLaren.goFaster(30)
}



