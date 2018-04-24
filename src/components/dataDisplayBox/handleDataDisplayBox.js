// import Vue from 'vue'
// import axios from 'axios'
import { fetchList, handleDataBox } from '@/api/article'

let getDataBox = async function (handleData) {
  var afterHandleData = 0
  var afterNewAsset = 0
  var afterValidAseet = 0
  var afterInvalidAsset = 0
  if (handleData === 'securityEvent') {
    const response = await fetchList(handleData)
    for (let i = 0; i < response.data.data.data.length; i++) {
      var mValue = response.data.data.data[i].count
      afterHandleData += mValue
    }
  } else if (handleData === 'totalAssets') {
    const res = await handleDataBox(handleData)
    afterNewAsset = res.data.data.data.assetSummary.NEW.length
    afterValidAseet = res.data.data.data.assetSummary.VALID.length
    afterInvalidAsset = res.data.data.data.assetSummary.INVALID.length
    afterHandleData = afterNewAsset + afterValidAseet + afterInvalidAsset + res.data.data.data.assetSummary.IGNORED.length
  } else {
    afterHandleData = 111
  }
  // console.log('afterHandleData', afterHandleData)
  return {
    "afterHandleData": afterHandleData,
    "afterNewAsset": afterNewAsset,
    "afterValidAseet": afterValidAseet,
    "afterInvalidAsset": afterInvalidAsset
  }
}

export { getDataBox }
