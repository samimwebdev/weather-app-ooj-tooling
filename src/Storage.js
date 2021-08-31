class Storage {
  constructor() {
    this.city = "";
    this.country = "";
  }

  saveItem() {
    localStorage.setItem("wetherApp-city", this.city);
    localStorage.setItem("wetherApp-country", this.country);
  }
  getItem() {
    this.city = localStorage.getItem("wetherApp-city");
    this.country = localStorage.getItem("wetherApp-country");
  }
}

const storage = new Storage();

export default storage;

// const storage = {
//   city: "",
//   country: "",
//   saveItem() {
//     localStorage.setItem("wetherApp-city", this.city);
//     localStorage.setItem("wetherApp-country", this.country);
//   },
//   getItem() {
//     this.city = localStorage.getItem("wetherApp-city");
//     this.country = localStorage.getItem("wetherApp-country");
//   },
// };
