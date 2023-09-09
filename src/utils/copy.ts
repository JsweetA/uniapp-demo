export default (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};
