import {
  getGoodsList
} from './goods';
import db from '../utils/db'

/**
 * @param {number} sort
 * @param {number} pageNum
 * @param {number} pageSize
 * @param {number} minPrice
 * @param {number} maxPrice
 * @param {string} keyword
 */

export async function getSearchHistory() {
  const res = await db.collection('search').doc('b58a38f6668b7bf100bb28c571618f70').get()
  const historyWords = res.data.historyWords || []
  return {
    historyWords
    // historyWords: [
    //   '鸡',
    //   '电脑',
    //   'iPhone12',
    //   '车载手机支架',
    //   '自然堂',
    //   '小米10',
    //   '原浆古井贡酒',
    //   '欧米伽',
    //   '华为',
    //   '针织半身裙',
    //   '氢跑鞋',
    //   '三盒处理器',
    // ],
  };
}

export async function getSearchPopular() {
  const res = await db.collection('search').doc('b58a38f6668b7bf100bb28c571618f70').get()
  const popularWords = res.data.popularWords || []
  return {
    popularWords
    // popularWords: [
    //   '鸡',
    //   '电脑',
    //   'iPhone12',
    //   '车载手机支架',
    //   '自然堂',
    //   '小米10',
    //   '原浆古井贡酒',
    //   '欧米伽',
    //   '华为',
    //   '针织半身裙',
    //   '氢跑鞋',
    //   '三盒处理器',
    // ],
  };
}

export function getSearchResult() {
  return {
    saasId: null,
    storeId: null,
    pageNum: 1,
    pageSize: 30,
    totalCount: 1,
    spuList: getGoodsList(7),
    algId: 0,
  };
}