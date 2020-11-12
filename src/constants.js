'use strict';
const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const DEFAULT_COMMAND = `--help`;

const USER_ARGV_INDEX = 2;

const ExitCode = {
  error: 1,
  success: 0,
};


const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};


const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};
const PictureRestrict = {
  MIN: 0,
  MAX: 15,
};
const Picture = [
  `image01.jpg`, `image02.jpg`, `image03.jpg`, `image04.jpg`, `image05.jpg`,
  `image06.jpg`, `image07.jpg`, `image08.jpg`, `image09.jpg`, `image10.jpg`,
  `image11.jpg`, `image12.jpg`, `image13.jpg`, `image14.jpg`, `image15.jpg`, `image16.jpg`];

module.exports = {
  SumRestrict,
  PictureRestrict,
  Picture,
  OfferType,
  DEFAULT_COUNT,
  FILE_NAME,
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
};
