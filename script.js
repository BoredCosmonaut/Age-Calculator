const calculate = (day,month,year,date) => {
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();

    //Calculates the year age
    let yearAge = currentYear - year
    let monthAge = 0
    let dayAge = 0

    //Calculates the month age
    if(currentMonth >= month) {
        monthAge = currentMonth - month
    } else {
        yearAge--;
        monthAge = 12 + currentMonth - month
    }

    //Calculates the day age
    if(currentDay >= day) {
        dayAge = currentDay - dayAge
    } else {
        month--;
        dayAge = 31 + currentDay - day
    }

    //if month's age is negative lowver the year age by one 
    if(monthAge < 0) {
        monthAge = 11;
        yearAge--;
    }

    let ageValues = [yearAge, monthAge, dayAge]
    return ageValues
}

document.getElementById("arrow").addEventListener("click", () => {
    const year = document.getElementById("year-input");
    const month = document.getElementById("month-input");
    const day = document.getElementById("day-input");

    document.getElementById("empty-input").style.display = "none"
    document.getElementById("valid-year").style.display = "none"
    document.getElementById("valid-month").style.display = "none"
    document.getElementById("valid-day").style.display = "none"
    const state = checkInput(new Date)
    if(state) {
        let values = calculate(day.value, month.value, year.value, new Date());
        document.getElementById("year-amount").innerText = values[0];
        document.getElementById("month-amount").innerText = values[1];
        document.getElementById("day-amount").innerText = values[2];
    }
})

const checkInput = function(date) {
    const year = document.getElementById("year-input").value;
    const month = document.getElementById("month-input").value;
    const day = document.getElementById("day-input").value;
    if(year == 0 || month == 0 || day == 0) {
        document.getElementById("empty-input").style.display = "block"
        makeDefault()
        return false
    }
    else if(year > date.getFullYear()) {
        document.getElementById("valid-year").style.display = "block"
        makeDefault()
        return false
    }
    else if(month > "12") {
        document.getElementById("valid-month").style.display = "block"
        makeDefault()
        return false
    }
    else if(day > "31") {
        document.getElementById("valid-day").style.display = "block"
        makeDefault()
        return false
    }
    else {
        return true
    }
}

const makeDefault = () => {
        document.getElementById("year-amount").innerText = "--";
        document.getElementById("month-amount").innerText = "--";
        document.getElementById("day-amount").innerText = "--";
}