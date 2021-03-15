const YoutubeModel = require("../models/YoutubeModel");

exports.getChannelRecentInfo = async function (channelId) {
  let data = await YoutubeModel.getChannelRecentInfo(channelId);
  return ytXmlDataProccess(data);
}

function ytXmlDataProccess(data) {
  return data.feed.entry.map(function (data) {
    const { title, yt, published } = data;
    let videoid = data['yt:videoId'][0];
    let re = /#(?<tag>\S+)/g;
    let tag = re.exec(data['media:group'][0]['media:description'][0])
    if (tag === null)
      tag = null;
    else
      tag = tag[0];
    var dt = new Date(published[0]);
    let date = dt.getFullYear() + "-" + dt.getMonth() + "-" + dt.getDate();
    return result = {
      title: title[0],
      videoid: videoid,
      date: date,
      imgurl: data['media:group'][0]['media:thumbnail'][0].$.url,
      tag: tag
    };
  })
}