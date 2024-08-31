import { localStorageKeys } from '../consts';

export default class HistoryService {
  static #save(localStorageKey, text) {
    const data = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    localStorage.setItem(localStorageKey, JSON.stringify([...data, text]));
  }

  static #get(localStorageKey) {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  }

  static saveGeneratedCode(text) {
    this.#save(localStorageKeys.GENERATE_QR, text);
  }

  static saveScannedCode(text) {
    this.#save(localStorageKeys.SCAN_QR, text);
  }

  static getGeneratedCodes() {
    return this.#get(localStorageKeys.GENERATE_QR);
  }

  static getScannedCodes() {
    return this.#get(localStorageKeys.SCAN_QR);
  }
}
