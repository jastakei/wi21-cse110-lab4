let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (const property in statistics) {
    let first = property.charAt(0);
    let remainder = statistics[property] % 2;
    if (first == 'r' || remainder == 1) {
        console.log(statistics[property]);
    }
  }
  