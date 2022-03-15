//// HEADING //////
const today = new Date();
const options = { weekday: "long",day: "numeric",month: "long",
};

document.getElementById("heading").innerHTML = today.toLocaleDateString("en-US",options);

//// DATA /////

// for making birth date to current date to show content
// you can change birth dates to current dates to see person in results
var d = new Date();
var currentMonthAndDate =(d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "/" + d.getDate();

// Date :  MM/DD/YYYY
const data = [
{
    id: 1,
    name: "Raj ",
    date: "01/25/2000",
    image:"",
},
{
    id: 2,
    name: "Akash Biswas",
    date: currentMonthAndDate + "/1998", // changing date and month to current date to show initial content
    image:"https://lh3.googleusercontent.com/OXTqLLie7l_zvUKJPocik8nuxQqgPSL61RzQ0W7iaeKKNxZXWtQe0Pn_YSS49FClnny-drUg9lU1jplu0xJenZyBRZPtOY0ObZPDBVyA2qH9247q10vw8fdPoMoQWFJ1bluX5thJnkG2Z66gnvUSgDZIYKegZiOHIP27XeHuTZWM_90BWQNF9Qr4asWJzabSgQWcUmxLIHuVzNMj9gc-_85O_eM0tG54L8USmb7TrizM312A0mttmUZWRppVgoZUlxcLkULmgC0movx6-AD_053X5luDkFBfTHvf29hxrUqNIZ0NMzJ1Ekcvs0pfLUrdQGi_US-_awoLZLqporKnHDc4fHu5KI1Ws7PTlm2S5onmSIYKv0Ypc7PuDoK53A83E5I3Gsmjox8R_mdrRgCsbRHAsX6yyrtrAf7IFO4TlePiW3saOQXcfO4GQDgvYKcpCwUY5Kj38JFbai1ThAn3DsWJ5nPPLu_XMVMU8z2sBZ1n0qYrupPk7z6Nt4tkAUTgQR6FBF13CTLw70qFICRRRYfsmW1BFMvH2kGrCy-PMXPPxIhi55t6JtgfRdhXr1-vOVYDaX1poCWxnopnpn3Gtv8dKUpB2HFG5gMrArfIyGdns_Rwv2J80hXDJtBuy83qNGe4QHx5dbSHDTzmZ-tgfG7yt0tTUohCgZUiYVJl4qCfpHMhwzmSokUSKug8cMFLyjKbSSteKpedgJUY0n3CRVdV=w526-h253-no?authuser=0",
},
{
    id: 3,
    name: "Narendra Modi",
    date: currentMonthAndDate + "/1950", // changing date and month to current date to show initial content
    image:"https://yt3.ggpht.com/ytc/AAUvwnh7CHDDIuu6a87VwcIoDe-UeDb-Cfu8Ig8utAcGBDw=s900-c-k-c0x00ffffff-no-rj",
},

];


var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person, index) => { const { date } = person; 
return (
    parseInt(date.substring(3, 5)) === currentDate &&
    parseInt(date.substring(0, 2)) === currentMonth + 1
);
});

/// DISPLAY ////

var noOfBirthdays = document.getElementById("noOfBirthdays");
noOfBirthdays.innerHTML = todayData.length + " birthdays today";

var people = document.getElementById("people");

todayData.forEach((person) => {
const { id, name, date, image } = person;

var article = document.createElement("article");
article.setAttribute("class", "person");

var img = new Image();
img.src = image;
img.setAttribute("alt", name);

var info = document.createElement("div");

var h4 = document.createElement("h4");
h4.setAttribute("id", "name");
h4.innerHTML = name;

var p = document.createElement("p");
var dob = new Date(date);
  //calculate month difference from current date in time
var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
var age_dt = new Date(month_diff);

  //extract year from date
var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
var age = Math.abs(year - 1970);
p.innerHTML = age + " years";

info.appendChild(h4);
info.appendChild(p);

article.appendChild(img);
article.appendChild(info);

people.appendChild(article);
});

//// clear ////

function clearAll() {
people.innerHTML = "";
noOfBirthdays.innerHTML = "There are no birthdays available today";
}