# Authorization

## Get Access Token
```
    Endpoint: ~/b2b/auth/get-token
    Method: Post
    Header Params: Content-Type: application/json
    Body Params:   username: "agent@example.com"
                   password: "123456"
```
## Sample Response
```json
{
    "success": true,
    "data": {
        "tokenType": "Bearer",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nZHMtYWRtaW4udGVzdFwvYXBpXC9pbnRsXC9hbmRyb2lkXC9pbml0aWFsaXplIiwiaWF0IjoxNjEzMzg1ODY3LCJleHAiOjE2MTMzODk0NjcsIm5iZiI6MTYxMzM4NTg2NywianRpIjoiY3o2eFZLdEVkd05jTTRVcCIsInN1YiI6MTMsInBy",
        "b2b_details": {
            "full_name": "skybase",
            "company_name": "Skybase Innovations",
            "company_code": "IT",
            "api_username": "skybase@yopmail.com",
            "email": "skybase@yopmail.com",
            "customer_login": "No"
        }
    }
}
```
**Note:** "token" must be set in the Authorization Header of every API Request.

## Sample Error Response

*Case: Invalid parameters*
```json
{
    "success": false,
    "data": {
        "error": "Username/Password Missing."
    }
}
```

*Case: User status inactive*
```json
{
    "success": false,
    "data": {
        "error": "User status is inactive. Access-Token not granted."
    }
}
```

*Case: Invalid username/password*
```json
{
    "success": false,
    "data": {
        "error": "Invalid Username/Password. Access-Token not granted."
    }
}
```