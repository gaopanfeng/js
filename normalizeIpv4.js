var ip = require('ip');
var Address6 = require('ip-address').Address6;

function normalizeIpv4(ipStr) {
    let ret;
    if (ip.isV6Format(ipStr)) {
        var address = new Address6(ipStr);
        if (address.isValid()) {
            let ipv4 = address.to4();
            if (ipv4.isValid()) {
                ret = ipv4.address;
            }
        }
    }
    return ret || ipStr;
}
module.exports = normalizeIpv4;
