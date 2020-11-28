export function handleGetTime() {
  const dateNow = new Date(Date.now());
  const getHours = dateNow.getHours();
  const getMinutes = dateNow.getMinutes();
  return `${getHours}:${getMinutes}`;
}

export function handleGetDate() {
  const dateNow = new Date(Date.now());
  const getMonth = dateNow.getMonth();
  const getDay = dateNow.getDay();
  return `${getMonth + 1}/${getDay + 22}`;
}

// TODO 2 in 1 time geter
// function handleTime(timeParams1, timeParams2, timeType) {
//   const dateNow = new Date(Date.now());
//   timeParams1 = dateNow.timeParams1();
//   timeParams2 = dateNow.timeParams2();
//   return `${timeParams1}${timeType}${timeParams2}`;
// }

//TODO fetch ...
