const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
  changeHotelName(newName) {
      this.name = newName;
      this.someMethod();
    },
    someMethod() {
      console.log("Hello everyone!!!");
  }
};

hotel.changeHotelName('Stars for you')
console.log(hotel);

const { name, stars, capacity} = hotel;
console.log(hotel);

