const countdown = () => {
  const countdate = new Date("Sept 01, 2021 00:00:00");
  const now = new Date().getTime();
  const gap = countdate - now;

  //calculation

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //   console.log(countdate);
  //   console.log(day);

  //caluation

  const textday = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);

  //applying to html

  document.querySelector(".day").innerText = textday;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".minute").innerText = textminute;
  document.querySelector(".second").innerText = textsecond;
};

setInterval(countdown, 1000);
