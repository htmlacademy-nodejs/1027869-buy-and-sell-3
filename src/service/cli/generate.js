'use strict';
const {getRandomInt, shuffle, getPictureFileName} = require(`../../utils`);
const {CATEGORIES, SENTENCES, TITLES, OfferType, SumRestrict, PictureRestrict, DEFAULT_COUNT, FILE_NAME} = require(`../../constants`);
const fs = require(`fs`).promises;
const chalk = require('chalk')


const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    category: [CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)]],
    description: shuffle(SENTENCES).slice(1, 5).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
  }))
);

module.exports = {
  name: `--generate`,
 async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer));
   try {
     await fs.writeFile(FILE_NAME, content);
     console.log(chalk.green(`Operation success. File created.`));
   } catch (err) {
     console.error(chalk.red(`Can't write data to file...`));
   }
  }
};
