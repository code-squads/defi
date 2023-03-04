// const SERVICE_ID = process.env.SERVICE_ID;
// const TWILIO_ACCOUNT_SID = process.env.ACCOUNT_SID;
// const AUTH_TOKEN = process.env.AUTH_TOKEN;
// const OTP = require('../dbModels/otp')

const TWILIO_ACCOUNT_SID = "AC73b0e7b381f1fdf458176b6673ea1e13"
const AUTH_TOKEN = "ea23a2f6fba823006285363da300ccd8"
const SERVICE_ID = "VAe6b4f235abedf454ca46818ba25719c5"

const twilioClient = require('twilio')(TWILIO_ACCOUNT_SID, AUTH_TOKEN);

exports.sendOTP = (phone) => {
    return new Promise((resolve, reject) => {
        twilioClient
            .verify
            .services(SERVICE_ID)
            .verifications
            .create({
                to: phone,
                channel: 'sms' 
            })
            .then((res) => {
                console.log(res)
            })
            .catch(reject);
    })
}

exports.verifyOTP = (phone, code) => {
    return new Promise((resolve, reject) => {
        twilioClient
            .verify
            .services(SERVICE_ID)
            .verificationChecks
            .create({
                to: phone,
                code
            })
            .then(data => {
                if(data.status === "approved")
                    resolve(true);
                else
                    resolve(false);
            })
            .catch(reject);
    })
}