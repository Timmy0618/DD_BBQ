const axios = require("axios").default;
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

/**
 * 獲取頻道最近影片資訊
 * @param {String} channelId 頻道ID
 * @returns {Promise<Array|Boolean>} return false on failure
 */
exports.getChannelRecentInfo = channelId => {
  return axios
    .get(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)
    .then(res => res.data)
    .then(data => parser.parseStringPromise(data))
    .catch(() => false);
};

/**
 * 獲取頻道最近影片資訊
 * @param {String} headShotUrl 頻道ID
 * @returns {Promise<Array|Boolean>} return false on failure
 */
exports.getHeadShot = headShot => {
  return axios
    .get(url)
    .then(res => res.data)
    .then(res => {
      let urls = res.match(regex);
      let url = urls.map(url => url.replace(/"/g, "")).filter(url => /^https:.*?rj$/.test(url));
      return url.pop();
    });
};
