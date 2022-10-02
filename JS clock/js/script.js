
const date = document.querySelectorAll(".date")[0],
time = document.querySelectorAll(".time")[0],
day = document.querySelectorAll(".day")[0];

    const d = new Date();
const monthArr = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
date.textContent = "Date:" + " " + d.getDate() + "/" + monthArr[d.getMonth()] + "/" +  d.getFullYear();

let hour, AmPm;
const haCon = (h) => {
    if (h < 12) {
        hour = h;
        AmPm = "AM";
    } else if (h === 12) {
        hour = h;
        AmPm = "PM";
    } else {
        hour = h - 12;
        AmPm = "PM";
    }
};

const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday"]
const dayFunc = (w) => {
 
    w.map((wa) => {
        const div = document.createElement("div");
        div.textContent = wa;
        day.appendChild(div);
    });

};

dayFunc(dayArr);

const activeDay = (d) => {
    const today = dayArr[d.getDay()];
    Array.from(day.children).map((d) => {
        d.textContent === today
        ? d.classList.add("activeDay")
        : d.classList.remove("activeDay");
    });
};


setInterval(() => {
    const d = new Date();
    haCon(d.getHours());
    activeDay(d);
    time.textContent = 
    "Time:" + " " + 
    ("0" + hour).slice(-2) + ":" + 
    ("0" + d.getMinutes()).slice(-2) + ":" + 
    ("0" + d.getSeconds()).slice(-2) + " " + AmPm; 
},1000);







