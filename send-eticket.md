# Send Ticket
## Send eTicket

```
Endpoint: API_URL~/b2b/send-eticket
Method: Post
Header Params: Content-Type  : application/json
Authorization : Bearer ey...
```

| **Attribute**           | **Datatype**        | **Required** | **Description**                                            | **Values**                   |
|-------------------------|---------------------|--------------|------------------------------------------------------------|------------------------------|
| `stBookingCode`         | `string`            | Required     | stbookingCode from booking response                        |                              |
| `name`                  | `string`            | Required     | The inserted name will be displayed in the mail            |                              |
| `email`                 | `string`            | Required     | The email will be sent to the provided email address       |                              |
| `showAmount`            | `boolean`           | Required     | showAmount should be either true or false to display amount on eTicket|`true, false`      |

## Sample Request
```json
{
    "stBookingCode" : "{{stBookingCode}}",
    "name" : "Test User",
    "email" : "user@gmail.com",
    "showAmount" : true                 // true or false to show amount on e-ticket
}
```

## Sample Response
```json
{
    "success": true,
    "data": {
        "message": "eTicket sent successfully."
    }
}
```

## Sample Error Response
*Case: Validation Error*
```json
{
    "success": false,
    "message": "Validation errors",
    "errors": {
        "name": [
            "The name field is required."
        ],
        "email": [
            "The email field is required."
        ],
        "showAmount": [
            "The show amount field is required."
        ]
    }
}
```

*Case: Invalid booking code or ticket not issued*
```json
{
    "success": false,
    "data": {
        "error": "Booking details not found."
    }
}
```