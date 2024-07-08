/** 获取搜索历史 */
function mockSearchHistory() {
  const {
    getSearchHistory
  } = require('../../model/search');
  return getSearchHistory()
}

/** 获取搜索历史 */
export function getSearchHistory() {
  return mockSearchHistory();
}

/** 获取搜索历史 */
function mockSearchPopular() {
  const {
    getSearchPopular
  } = require('../../model/search');
  return getSearchPopular()
}

/** 获取搜索历史 */
export function getSearchPopular() {
  return mockSearchPopular();
}