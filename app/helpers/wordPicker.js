import fs from 'fs';
import path from 'path';

/**
 * @description Class that picks a random word from our dictionary json file
 *
 * @class WordPicker
 */
class WordPicker {
  constructor() {
    this.dictionaryPath = path.join(__dirname, '../dictionary.json');
  }

  /**
   * @description Reads the json dictionary file
   * @memberof WordPicker
   *
   * @returns JSON object
   */
  readJSONDictionary() {
    return fs.readFileSync(this.dictionaryPath, 'utf-8');
  }

  /**
   *
   * @description Returns the keyname in the json object
   * @param {*} obj
   * @memberof WordPicker
   *
   * @returns {string} key name
   */
  getKeyName(obj) {
    return Object.keys(obj);
  }

  /**
   * @description Picks a random word from the json dictionary
   * @memberof WordPicker
   *
   * @returns {string} word
   */
  pickRandomWord() {
    const dictionary = this.readJSONDictionary();
    const parsedJSON = JSON.parse(dictionary);

    // Choose a random json object from the array
    const randomJSON =
      parsedJSON[Math.floor(Math.random() * parsedJSON.length)];
    const keyName = this.getKeyName(randomJSON);

    return randomJSON[`${keyName}`];
  }
}

export default WordPicker;
