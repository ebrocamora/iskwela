const PersonalityInsightsV3 = require(['ibm-watson/personality-insights/v3'], function(value) {
    console.log(value);
});
const { IamAuthenticator } = require(['ibm-watson/auth'], function(value) {
    console.log(value);
});

const apikey = 'vyqEFFnAfa0B61Z_fo0d35OigPTPQoJosb06uy82eHbo';
const url = 'https://gateway-wdc.watsonplatform.net/personality-insights/api';

const personalityInsights = new PersonalityInsightsV3({
  version: '2017-10-13',
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  url: url,
});

const profileParams = {
  // Get the content from the JSON file.
  content: require('js/profile.json'),
  contentType: 'application/json',
  consumptionPreferences: true,
  rawScores: true,
};

personalityInsights.profile(profileParams)
  .then(profile => {
    console.log(JSON.stringify(profile, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

console.log("Prince Carlo");