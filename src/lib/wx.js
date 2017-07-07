/**
 * @return {object} 
 *  - status
 *  - data: errMsg || { latitude, longitude, }
 */
export function getLocation() {
    return new Promise(function(resolve, reject) {
        if (!wx || !wx.getLocation) {
            reject({
                status: 1,
                errMsg: 'lost wx',
            });
            return;
        }
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                // let latitude = ; // 纬度，浮点数，范围为90 ~ -90
                // let longitude = ; // 经度，浮点数，范围为180 ~ -180。
                resolve({
                    status: 0,
                    data: {
                        latitude: res.latitude,
                        longitude: res.longitude,
                    },
                });
            },
            fail(res) {
                reject({
                    status: -1,
                    data: res.errMsg,
                });
            },
        });
    });
}