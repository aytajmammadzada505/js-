/*/task 1
function oyunhesabi(kill, death) {
  let point = kill * 100 - death * 50;
  return point;
}
console.log(oyunhesabi(5, 2));

//task 2
function endirimHesabla(qiymet, promoKod) {
  let price = qiymet;
  if (promoKod === "SUPER10") {
    return (price = qiymet - 10);
  } else {
    console.log("qiymet deyismeyib");
  }
}
console.log(endirimHesabla(50, "SUPER10"));

//task 3
/*function lvlKecdin(toplananXal, lazimOlanXal) {
  if (toplananXal >= lazimOlanXal) {
    console.log("Təbriklər, növbəti mərhələ açıldı!");
  } else {
    let xal = lazimOlanXal - toplananXal;
  }
}
console.log(lvlKecdin(80, 100));

//task 4
function calculateOrderTotal(price, promoCode) {
  let discount = price;
  if (promoCode === "SAVE20") {
    discount = price * 0.8;
  } else if (promoCode === "FLAT10") {
    discount = price - 10;
  }
  return discount * 1.18;
}
console.log(calculateOrderTotal(100, "SAVE20"));
console.log(calculateOrderTotal(50, "FLAT10"));

/*function registerUser(fullName, age) {
  if (age < 18) {
    return "Qeydiyyat üçün yaşınız minimum 18 olmalıdır.";
  }

  let name = fullName.trim();
  return `Xoş gəldiniz, ${name}! Qeydiyyat uğurla tamamlandı.`;
}

console.log(registerUser("Kamran Əliyev", 20));
console.log(registerUser("Aysel", 16));

//task 6
function calculateTaxiFare(distanceKm) {
  let tax = distanceKm * 1.5;
  if (tax <= 3) {
    return "Ödəniləcək məbləğ: 3 AZN (Minimum gediş haqqı)";
  } else if (tax > 3) {
    return `Ödəniləcək məbləğ: ${tax} AZN`;
  }
}
console.log(calculateTaxiFare(1));
console.log(calculateTaxiFare(5));


//task 7
function calculateTicketPrice(age, isStudent) {
  let qiymet = 10;
  if (age < 6) {
    return "Bilet pulsuzdur";
  } else if (age >= 6 && isStudent) {
    let price = qiymet * 0.7;
    return `Bilet qiyməti: ${price} AZN`;
  } else if (!isStudent || age >= 60) {
    let price = qiymet * 0.5;
    return `Bilet qiyməti: ${price} AZN`;
  }
}
console.log(calculateTicketPrice(4, false));
console.log(calculateTicketPrice(22, true));
console.log(calculateTicketPrice(65, false));
console.log(calculateTicketPrice(30, false));


//task 8
const aznToUsd = (azn) => azn / 1.7;
console.log(aznToUsd(170));

//task 9
const checkAccess = (age) =>
  age >= 18 ? "Giriş uğurludur" : "Giriş qadağandır";
console.log(checkAccess(20));
console.log(checkAccess(15));

//task 10
const calculateBonus = (salary, score) =>
  score > 80 ? salary * 1.2 : salary * 1.05;
console.log(calculateBonus(1000, 85));
console.log(calculateBonus(1000, 60));

//task 11
const celsiusToFahrenheit = (Celsius) => Celsius * 1.8 + 32;
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

//task 12
const calculateFuelConsumption = (distance, liters) =>
  (liters / distance) * 100;
console.log(calculateFuelConsumption(500, 40));

//task 13
const getTotalWithDelivery = (orderAmount) =>
  orderAmount >= 50 ? orderAmount : orderAmount + 5;
console.log(getTotalWithDelivery(60));
console.log(getTotalWithDelivery(30));

//task 14
const getGrade = (score) =>
  score >= 90
    ? "Əla"
    : score >= 70
      ? "Yaxşı"
      : score >= 50
        ? "Kafi"
        : "Kəsildiniz";
console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(40));

//task 15
const showSuccess = pizzaName =>
  console.log(`${pizzaName} pizzanız hazırdır, nuş olsun!`);
const showError = needMoney =>
  console.log(`Çatışmayan məbləğ: ${needMoney} AZN. Balansınız çatmır!`);
const buyPizza = (pizzaName, price, myMoney, onSuccess, onError) => {
  if (myMoney >= price) {
    onSuccess(pizzaName);
  } else {
    onError(price - myMoney);
  }
};

//task 16
function sendEmail() {
  console.log("Xoş gəldiniz məktubu göndərildi!");
}
function registerUser(username, callback) {
  console.log(`${username} sistemə əlavə olundu`);
}
registerUser("Scott", sendEmail);

//task 17
function onSuccess(finalPrice) {
  console.log(`Kupon tətbiq edildi! Yekun qiymət: ${finalPrice} AZN`);

}
function onError(msg) {
  console.log(`Xəta: ${msg}`);
}
function applyCoupon(code, totalPrice, onSuccess, onError) {
  if (code === "KOD10") {
    onSuccess(totalPrice - 10);
  } else {
    onError("Keçərsiz kupon kodu!");
  }
}
applyCoupon("KOD10", 50, onSuccess, onError);

//task 18
function onWin(heroName, damage) {
  console.log(`${heroName} qalib gəldi! Canavardan ${damage} xal üstün oldu!`);
}
function onLose(heroName, damage) {
  console.log(`${heroName} uduzdu! Canavardan ${damage} xal geridə qaldı!`);
}
function onDraw() {
  console.log("Güclər bərabərdir! Döyüş bərabərə bitdi.");

}
function attackMonster(heroName, heroPower, monsterPower, onWin, onLose, onDraw) {
  if (heroPower > monsterPower) {
    onWin(heroName, heroPower - monsterPower);
  }
  else if (heroPower < monsterPower) {
    onLose(heroName, monsterPower - heroPower);
  }
  else {
    onDraw();
  }
}
attackMonster("scott", 50, 30, onWin, onLose, onDraw); 

//task 19
const calculateTaxiFare = (distanceKm, isPeakHour, promoCode) => {
  let total = 2 + (distanceKm * 0.8);
  if (isPeakHour) {
    total *= 1.5;
  }
  else if (promoCode === "AVTO10") {
    total - 2;
  }
  else if (total < 3) {
    total = 3;
  }
  return `Yekun gediş haqqı: ${total} AZN`;
}

console.log(calculateTaxiFare(5, true, "AVTO10"));


//task 20

const Grade = (exam, quiz, attendance) => {
  let totalScore = (exam * 0.6) + (quiz * 0.4);
  if (totalScore >= 51 && attendance >= 70) {
    console.log(`İmtahandan keçdiniz! Yekun bal : ${totalScore}`);
  }
  else if (totalScore >= 51 && attendance < 70) {
    console.log("Kəsildiniz: Davamiyyət yetərsizdir!");
  }
  else {
    console.log(`Kəsildiniz: Balınız yetərsizdir ${totalScore}`);
  }
}
console.log(Grade(40, 5, 0));


//task 21
const printReceipt = (clientName, totalPrice, serviceFee) => {
  console.log(`MÜŞTƏRİ: ${clientName} | Xidmət haqqı: ${serviceFee} AZN | Yekun ödəniş: ${totalPrice} AZN`);
};

function processBill(clientName, foodAmount, isVIP, callback) {
  let serviceFee;

  if (isVIP) {
    serviceFee = 0;
  } else {
    serviceFee = foodAmount * 0.1;
  }

  const totalPrice = foodAmount + serviceFee;
  callback(clientName, totalPrice, serviceFee);
}

processBill("Ayla", 10, true, printReceipt);


//task 22
function onApproved(monthlyPayment) {
  console.log(`Kredit təsdiqləndi! Aylıq ödənişiniz: ${monthlyPayment} AZN`);
}
function onNeedGuarantor(gap) {
  console.log(`Zamin tələb olunur! Çatışmayan aylıq gəlir: ${gap} AZN`);

}
function onRejected(reason) {
  console.log(`Kredit rədd edildi! Səbəb: ${reason}`);

}

function checkCredit(salary, requestedAmount, months, onApproved, onNeedGuarantor, onRejection) {
  let monthlyPayment = requestedAmount / months;
  if (monthlyPayment <= 0.5) {
    onApproved(monthlyPayment);
  }
  else if (monthlyPayment < 0.7) {
    let gap = monthlyPayment - (salary * 0.5);
    onNeedGuarantor
  }
  else {
    onRejected("Aylıq ödəniş gəlirinizə görə çox yüksəkdir!");
  }
}
checkCredit(1000, 6000, 12, onApproved, onNeedGuarantor, onRejected); */


//task 23 (objects)
const student = {
  firstName: "Eli",
  lastName: "Əliyev",
  age: 20,
  city: "Baki",
  isGraduated: false
};
console.log(student);
console.log(student.age);
console.log(student.firstName);
student.age = 21;
console.log(student.age);
delete student.city;
console.log(student);

//task 24
const book = {
  title: 1984,
  author: "George Orwell",
  pages: 328
}
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);


//task 25
const car = {
  brand: "BMW",
  "fuel-Type": "Benzin",
  "user-Location": "Bakı"
}
console.log(car["fuel-type"]);
console.log(car["user-Location"]);

// dot notation istidafe ede bilmemeyimizin sebebi fuel-type xususiyyetinde - (tre) olmasidir, JS-de - cixma riyazi emeliyyat kimi qebul edilir


//task 26
const laptop = {
  brand: "ASUS",
  price: 1500,
  ram: "16GB"
}
let myKey = "price";
console.log(laptop[myKey]);


//task 27
const product = {
  title: "telefon",
  price: 800
}
product["price"] = 900;
product["color"] = "Qara";

console.log(product);


//task 28
const user = {
  username: "user123",
  status: "active"
}
let targetKey = "status";
user[targetKey] = "inactive";
console.log(user);

//task 29
const movie = {
  title: "Inception",
  director: "Nolan",
  "release-year": 2010
}
console.log(`${movie.title} filmi ${movie["release-year"]} ilinde numayis olunub`);


//task 30
const person = {
  name: "Aysel",
  "job-title": "Dizayner"
};
let field = "name";
console.log(person.job - title); // (-) isaresi riyazi hesablama kimi qebul edilir, (person["job-title"]) 
console.log(person.field); //deyisenin deyerini istifade etmir, bracket notation istifade olunmalidir (person[field])