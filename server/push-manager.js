const webpush = require('web-push');

//Estas 2 llaves debe generarlas. ¡No usarlas!
const keys = {
    publicKey: 'BABU69DGxW0-rzUdEYDGG2xHAMQROl5RV8QD6Zuxjdoj5RBOcZKGLKw4D_YglTMBjyuL5rdTPyl_I64rnKKuKkc',
    privateKey: 'SWDFhVNnV2clDdQiFls2k7AWtr3dkK5oU5YWdaNPVsM'
};

webpush.setVapidDetails(
    'http://www.myenterprise.com', //también puede ser 'mailto:myemail@mydomain.com'
    keys.publicKey,
    keys.privateKey
);

const sendPushNotification = (subscription, dataToSend = '') => webpush.sendNotification(subscription, dataToSend);

module.exports = {
    sendPushNotification
};