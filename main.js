let currency, exact_date;
let path = "/NBUStatService/v1/statdirectory/exchange";
let myURL = new URL(path, 'https://bank.gov.ua');
currency = "JPY";
exact_date = "20240127";
myURL.searchParams.append("valcode", currency); 
myURL.searchParams.append("date", exact_date); 
let finalURL = myURL.href + "&json"; // Уточнення що вивід має бути у форматі JSON
console.log(finalURL);