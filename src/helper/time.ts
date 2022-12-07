export const convertTime = (s: number) => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const ms = s * 1000;

  //   const daysp = Math.floor(ms / day);
  //   const hoursp = Math.floor((ms % day) / hour);
  const minutesp = Math.floor(((ms % day) % hour) / minute);
  const secondsp = Math.floor((((ms % day) % hour) % minute) / second);

  return `${normalDate(minutesp)}:${normalDate(secondsp)}`;
};

function normalDate(value: number) {
  return value.toString().padStart(2, "0");
}
