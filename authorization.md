# Authorization

## Get Access Token
```
    Endpoint: API_URL~/b2b/auth/get-token
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
        "token": "ey....",
        "b2b_details": {
            "full_name": "John Doe",
            "company_name": "Some Company",
            "company_code": "IT",
            "api_username": "company@test.test",
            "email": "company@test.test",
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