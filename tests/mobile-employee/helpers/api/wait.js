import { DEFAULT_TIMEOUT, MINIMUM_TIMEOUT } from '../../../constants';

/**
 * API for `waitForDisplayed`
 * @param  {string}  selector
 * @return {boolean}
 */

export default function defaultWait(selector) {
  return $(selector).waitForDisplayed(DEFAULT_TIMEOUT, false);
}
export function wait(selector) {
  return $(selector).waitForDisplayed(DEFAULT_TIMEOUT, false);
}
export function minWait(selector) {
  return $(selector).waitForDisplayed(MINIMUM_TIMEOUT, false);
}
