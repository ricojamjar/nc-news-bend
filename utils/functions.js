
const formatTime = (inputArr) => {
  if (inputArr.length === 0) return []
  const formattedArr = inputArr.map(singleObject => {
    const newObj = { ...singleObject };
    newObj.created_at = new Date(newObj.created_at);
    return newObj
  })
  return formattedArr
}

const changeKeys = (dataArr, keyToChange, newKey) => {
  if (dataArr.length === 0) return [];
  const arrWithNewKey = dataArr.map(singleObject => {
    const newObj = { ...singleObject };
    newObj[newKey] = newObj[keyToChange];
    delete newObj[keyToChange]
    return newObj
  });
  return arrWithNewKey;
}
const createRef = (data, key, value) => {
  if (data.length === 0) return {};
  const referenceObj = {};
  data.forEach(elem => {
    const keys = elem[key];
    const values = elem[value];
    return (referenceObj[keys] = values);
  });
  return referenceObj;
};

const formatData = (dataToConvert, referenceObj, keyToReject, newKey) => {

};
module.exports = { createRef, formatData, formatTime, changeKeys };
