import _KintoneAPIException from "../exception/KintoneAPIException";
/**
 * kintone api - nodejs client
 * Common function
 */

const KintoneAPIException = _KintoneAPIException;

class Common {
  /**
   * @param {String} method
   * @param {String} url
   * @param {RecordModel} model
   * @param {Connection} connection
   * @return {Promise} Promise
   */
  sendRequest(method, url, model, connection) {
    const body = model.toJSON ? model.toJSON() : model;
    return connection.request(method, url, body).then(result => {
      return result;
    }).catch(err => {
      throw new KintoneAPIException(err);
    });
  }

}

export default new Common();