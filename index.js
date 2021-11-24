// Destructuring

// Destructuring assignment for Arrays:
const IDlist = [123,124,125];
let [ID1,ID2,ID3] = IDlistL; 

// Destructuring assignment for Arrays with rest:
const products = ["phone","notebook","shoes","coat","pot","knife"];
let [product1, product2, product3, ...restOfProducts] = products;


// Destructuring assignment of objects:
const productInfo = {
  id: 123,
  name: "mouse",
  brand: "logitech",
  price: "75€"
}

let {productName, productID} = productInfo;

// Destructuring assignment of objects:
let {productName, ...restOfProperties} = productInfo;


// Nesting

const userList = [
  {
    id:123,
    fname:"John",
    lname:"Smith",
    location: {
      city: "Berlin",
      country: "Germany"
    },
    skills: ["writing","langauges","coding"]
  },
  {
    id:124,
    fname:"Violet",
    lname:"Zaun",
    location: {
      city: "Canary Islands",
      country: "Spain"
    },
    skills: ["sports","research","coding"]
  },
  {
    id:123,
    fname:"Claude",
    lname:"Riegan",
    location: {
      city: "Oslo",
      country: "Norway"
    },
    skills: ["research","management","coding"]
  },  {
    id:123,
    fname:"Aloy",
    lname:"-",
    location: {
      city: "San Diego",
      country: "United States"
    },
    skills: ["coding","electronics","sports"]
  }
]


//Example of accessing information:
console.log(userList[0].fname) // John
console.log(userList[1].lname) // Zaun
console.log(userList[2].location.city) //Oslo
console.log(userList[1].skills[2]) //sports
console.log(userList[3].location) //{city: "San Diego", country: "United States"}

