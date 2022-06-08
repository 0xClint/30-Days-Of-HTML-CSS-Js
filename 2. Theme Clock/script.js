setInterval(() =>{
  t = new Date();
  thour = t.getHours();
  tminute = t.getMinutes();
  tsecond = t.getSeconds();
  tdate = t.getDate();
  tday = t.getDay();
  tmonth = t.getMonth();

  hourRotation = 30 * thour + tminute / 2;
  minuteRotation = tminute * 6;
  secondRotation = tsecond * 6;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;

  const hoursOfClock = thour>=12 ? thour % 12 : thour;
  const ampm = thour >= 12 ? 'PM' : 'AM';

  const digitalTime = `${hoursOfClock}:${tminute} ${ampm}`;

  document.querySelector(".time").innerHTML = digitalTime;

  const days = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
  const months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECMBER"];
  document.querySelector(".date").innerHTML = `${days[tday-1]}, ${months[tmonth+1]} ${tdate}`;

  // console.log(thour,tminute,tsecond)
})

// toggle.addEventListener('onClick',() =>{
//     const btn = document.querySelector(".toggle").innerHTML;
// })
// const btn = document.querySelector(".toggle").innerText();
//     console.log(btn);

  const handleClick = () => {
    const Time = document.querySelector(".time");
    Time.classList.add('active');
    document.querySelector("body").classList.add("active");
    console.log("handleClick");
  }