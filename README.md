# TonAPI Auth

## TON authorization overview
### 1) Redirect user to the auth page
To perform auth user must be redirected to special page where auth can be checked
tonapi.io/login?{params}

**Params supported:**
* **redirect_url** – *[optional]* *string*, url where user will be redirected after successful auth
* **callback_url** – *[optional]* *string*, url which will be called from backend in after successfull auth
* **app_name** – *[optional]* *string*, name of the app shown in the auth page

One of the params **redirect_url** or **callback_url** must be passed. Please note that **authToken** wich you will get after authorization flow is **ONE TIME USE**, **SHORT LIVING** token wich should be exchanged to persistent token serverside via tonapi.io/v1/auth. Just receiving authToken is not a proof of successful user authorisation and can be possibly swapped or be stolen by attacker.

In case of success the **callback_url** or **redirect_url** will be triggered with following GET params added:
* **success** – bookean, true in case if auth was successfully performed
* **auth_token** – *[optional]* *string*, one-time-use token  
* **error_code** – *[optional]* *string*, in case of success=false short text code of error
* **error_text** – *[optional]* *string*, in case of success=false text human readable description of error

**Examples:**
```JSON
{
    "success": true,
    "auth_token": "abcd..."
}
```
```JSON
{
    "success": false,
    "error_code": "auth_rejected",
    "error_text": "User canceled authorization"
}
```

### 2) Fetching persistant token via tonapi.io/v1/auth method
After successfully obtaining **auth_token** via process described below /auth method should be called from server side to check that the **auth_token** is valid.

Authorization header must be passed to this method the same way as any other methods in tonapi.io API. Using token obtained in t.me/tonapi_bot telegram bot.

Example header:
```
Authorisation: Bearer AuthTokenHere
```

Following params needed by this method:
* **auth_token**, *string*, the token wich was returned by the method below


## OAuth demo
Simple auth demo using [tonapi.io](https://tonapi.io/), tonkeeper and oauth login flow with desktop and mobile support
[View Demo](https://beta.stickerface.io/tonapi-oauth-demo/)
Before you looking this demo read the definition of oauth [login flow](https://www.techtarget.com/searchapparchitecture/definition/OAuth) and go oauth [implementation](https://github.com/go-oauth2/oauth2)

***
```javascript
Quick start guide:

1) git clone git@github.com:startfellows/tonapi-oauth-demo.git
2) cd tonapi-oauth-demo
3) yarn
4) yarn start
```

Look at the source code for more [details](https://github.com/startfellows/tonapi-oauth-demo/blob/master/src/App.tsx)
