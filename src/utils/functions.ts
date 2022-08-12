export const getExpiryDate = (start_date:Date, plan_duration: "1" | "0.5" | "2") => {
  const plan_d = parseInt(plan_duration);
  const expire_d = start_date.getTime() + plan_d* 365*24*60*60;
  return new Date(expire_d);
};