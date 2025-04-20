# Download eTicket

## Download eTicket
```
Endpoint: API_URL~/b2b/download-eticket
Method: Post
Header Params: Content-Type  : application/json
Authorization : Bearer ey...
```

| **Attribute**           | **Datatype**        | **Required** | **Description**                                            | **Values**                   |
|-------------------------|---------------------|--------------|------------------------------------------------------------|------------------------------|
| `stBookingCode`         | `string`            | Required     | stbookingCode from booking response                        |                              |
| `showAmount`            | `boolean`           | Required     | showAmount should be either true or false to display amount on eTicket|`true, false`      |

## Sample Request
```json
{
     "stBookingCode" : "{{stBookingCode}}",
     "showAmount" : true        // true or false to show amount on e-ticket
}
```

## Sample Response
```json
{
    "success": true,
    "data": {
        "eticketLink": "https://rooms-backend-staging.sastotickets.com/e-tickets/RM-4TAOUE-RAYAMAJHI.pdf"
    }
}
```

## Sample Error Response
*Case: Validation Errors*
```json
{
    "success": false,
    "message": "Validation errors",
    "errors": {
        "stBookingCode": [
            "The st booking code field is required."
        ]
    }
}
```

```json
{
    "success": false,
    "message": "Validation errors",
    "errors": {
        "showAmount": [
            "The show amount field is required."
        ]
    }
}
```

```json
{
    "success": false,
    "message": "Validation errors",
    "errors": {
        "showAmount": [
            "The show amount field must be true or false."
        ]
    }
}
```