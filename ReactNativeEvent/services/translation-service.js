export class TranslationService {
  constructor() {
    this.authToken = '';
  }

  static async translate(inputText) {
    // Documentation: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-reference
    if (this.authToken === undefined || this.authToken === '') {
      this.authToken = await this.getAuthToken();
    }
    var authorizationValue = 'Bearer ' + this.authToken;
    console.log(authorizationValue);
    return fetch(
      'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=hi',
      {
        method: 'POST',
        headers: {
          Authorization: authorizationValue,
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify([{Text: inputText}]),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson[0].translations[0].text;
      })
      .catch(error => {
        console.error(error);
      });
  }

  static async getAuthToken() {
    return fetch(
      'https://reactnative.cognitiveservices.azure.com/sts/v1.0/issuetoken',
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': '1816933efe0c47c08dcba95463ba5bfa',
        },
      },
    )
      .then(response => response.text())
      .then(responseText => {
        this.authToken = responseText;
        return responseText;
      });
  }
}

export default TranslationService;
