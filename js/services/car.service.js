import utilService from "./util.service.js";



var cars = [{ id: 1, vendor: 'Mazdi', price: 89.78 }, { id: 2, vendor: 'Toyoka', price: 98.21 }];

function query() {
    return cars;
}

function save(carData) {
    carData.id = utilService.makeId();
    cars.push(carData);
}



export default {
    query,
    save
}