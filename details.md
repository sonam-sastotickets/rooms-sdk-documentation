# Ticket Status

## Rooms Ticket Status/Details
```
Endpoint: API_URL~/b2b/ticket/details
Method: Post
Header Params: Content-Type  : application/json
Authorization : Bearer ey...
```

| **Attribute**           | **Datatype**        | **Required** | **Description**                                            | **Values**                   |
|-------------------------|---------------------|--------------|------------------------------------------------------------|------------------------------|
| `stBookingCode`         | `string`            | Required     | stbookingCode from booking response                        |                              |

## Sample Request
```json
{
     "stBookingCode" : "{{stBookingCode}}"
}
```

## Sample Response
```json
{
    "success": true,
    "message": "Ticket details fetched successfully.",
    "data": {
        "bookingSummary": {
            "bookingDate": "2025-04-18 16:39",
            "stBookingCode": "RM-OQFHUS-RAYAMAJHI",
            "bookingReference": "v9QBGrurN5ZOguDq",
            "checkin": "2025-07-07",
            "checkout": "2025-07-08",
            "guestName": "Mr. Anil Rayamajhi",
            "totalRooms": 1,
            "totalGuests": 1,
            "hotelName": "Norbu Linka",
            "currency": "NPR",
            "soldPrice": 6242,
            "paymentStatus": "paid",
            "bookingStatus": "confirmed"
        },
        "hotelDetails": {
            "name": "Norbu Linka",
            "address": "Thamel 44600 Kathmandu",
            "totalRooms": 1,
            "totalGuests": 1,
            "totalNights": 1,
            "roomTypes": [
                "DELUXE DOUBLE"
            ]
        },
        "passengerDetails": [
            {
                "title": "Mr.",
                "firstName": "Anil",
                "lastName": "Rayamajhi",
                "type": "AD"
            }
        ],
        "contactDetails": {
            "email": "karkisamir99@gmail.com",
            "phone": "9876543200"
        }
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
        "stBookingCode": [
            "The st booking code field is required."
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