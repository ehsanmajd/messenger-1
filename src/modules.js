export function handleGetTime(time) {
  const dateNow = new Date(time);
  const getHours = dateNow.getHours();
  const getMinutes = dateNow.getMinutes();
  return `${getHours}:${getMinutes}`;
}

export function handleGetDate(time) {
  const dateNow = new Date(time);
  const getMonth = dateNow.getMonth();
  const getDay = dateNow.getDay();
  return `${getMonth + 1}/${getDay + 22}`;
}

export function idMaker() {
  // let counter = 0;
  // return function id() {
  //   return (counter = counter + 1);
  // };
  return Math.random();
}
