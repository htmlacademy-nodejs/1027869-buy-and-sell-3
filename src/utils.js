const {Picture} = require('./constants')

const getRandomInt = (min,max) =>{
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max -min + 1)) + min;
}

const shuffle = (someArray) => {
 return  someArray.map((_, i)=> {
    const randomPosition = Math.floor(Math.random() * i);
    [someArray[i], someArray[randomPosition]] = [someArray[randomPosition], someArray[i]];
  })
};
const getPictureFileName = (num) => Picture[num];

module.exports = {
  getRandomInt,
  shuffle,
  getPictureFileName
}
