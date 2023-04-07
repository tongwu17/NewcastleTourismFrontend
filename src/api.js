/*
 * @Author: Jiayu Ran
 * @Date: 2023-03-08 18:09:13
 * @LastEditors: Jiayu Ran
 * @LastEditTime: 2023-03-27 01:07:10
 * @Description: Define the http api uri and methods
 */

const host = "http://localhost:8001";

const getApi = {
  'getNearbyAttractions': '/place/getNearbyAttractions',
  'getAutoComplete': '/place/getAutoComplete',
  'getDetails': '/place/getDetails',
};

export default {
  host: host,
  getApi: getApi
};