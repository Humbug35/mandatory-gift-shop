let existingElement = document.getElementsByTagName("body")[0];
let firstSection = document.createElement("section");
firstSection.setAttribute("id", "products");
existingElement.appendChild(firstSection);
/*let secondSection = document.createElement("section");
secondSection.setAttribute("id", "produkter");
existingElement.appendChild(secondSection);*/

/*let houseOne = {
    title: "Magic House",
    image: "../images/house-3123525_640.jpg",
    price: 120000,
    description: "Buy this magic house and live out your dream"
};
let houseTwo = {
    title: "Average House",
    image: "../images/render-1477041_640.jpg",
    price: 70000,
    description: "Buy this Average house and live out your dream"
};
let houseThree = {
    title: "Color House",
    image: "../images/large-home-389271_640.jpg",
    price: 250000,
    description: "Buy this Color house and live out your dream"
};
let houseFour = {
    title: "Big House",
    image: "../images/house-3146895_640.jpg",
    price: 190000,
    description: "Buy this big house and live out your dream"
};
let houseFive = {
    title: "Simple House",
    image: "../images/house-3146877_640.jpg",
    price: 90000,
    description: "Buy this simple house and live out your dream"
};
let houseSix = {
    title: "Amazing house",
    image: "../images/house-3133771_640.jpg",
    price: 150000,
    description: "Buy this amazing house and live out your dream"
};*/

let houses = [{title: "Magic House", image: "../images/house-3123525_640.jpg", price: 120000, description: "Buy this magic house and live out your dream"}, {title: "Average House", image: "../images/render-1477041_640.jpg", price: 70000, description: "Buy this Average house and live out your dream"},
              {title: "Color House", image: "../images/large-home-389271_640.jpg", price: 250000, description: "Buy this Color house and live out your dream"},{title: "Big House", image: "../images/house-3146895_640.jpg", price: 190000, description: "Buy this big house and live out your dream"},
              {title: "Simple House", image: "../images/house-3146877_640.jpg", price: 90000, description: "Buy this simple house and live out your dream"}, {title: "Amazing house", image: "../images/house-3133771_640.jpg", price: 150000, description: "Buy this amazing house and live out your dream"}
             ];

/*let myArray = [houseOne, houseTwo, houseThree, houseFour, houseFive, houseSix];*/
for(let i = 0; i < houses.length; i++) /*for(let i in myArray)*/
{
    document.getElementById("products").innerHTML += `<div class="myDivision"><h3>${houses[i].title}</h3> <br> <img src=' ${houses[i].image}'/> <br> <h3>${houses[i].price}</h3> <br> <h3>${houses[i].description}</h3></div>`
}
/*
document.getElementById("products").innerHTML += ("<h1>" + myArray[i].title + "</h1>" + "<img src='" + myArray[i].image + "'/>" + "<h3>" + myArray[i].price + ' kr' + "</h3>" + "<h3>" + myArray[i].description + "</h3>");
*/


