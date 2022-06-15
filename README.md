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
* **auth_token** – *string*, one-time-use token  

### 2) 


## OAuth demo
Simple auth demo using [tonapi.io](https://tonapi.io/), tonkeeper and oauth login flow with desktop and mobile support
[View Demo](https://tonapi-oauth.herokuapp.com/)
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