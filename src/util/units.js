export const usdtToUnits = (usdt) => {
  if(!usdt)
    return 0;
  return Number(usdt) * 1000000;
}

export const dateToUnits = (date) => {
  if(!date)
    date = new Date();
  return date / 1000;
}

export const currDateToUnits = () => dateToUnits(new Date());