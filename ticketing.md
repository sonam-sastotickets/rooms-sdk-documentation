# Ticketing

## Rooms Issue-eticket

```
Endpoint: API_URL~/b2b/tickets/issue-eticket
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

``` json
{
    "success": true,
    "message": "Your booking has been confirmed.",
    "data": {
        "bookingSummary": {
            "bookingId": "GRN-SB-202504-1074191",
            "bookingReference": "gEszAWPk9NHwNmzE",
            "bookingDate": "Apr 18, 2025 07:30 AM",
            "stBookingCode": "RM-4TAOUE-RAYAMAJHI",
            "currency": "NPR",
            "totalAmount": 6662
        },
        "hotelDetails": {
            "name": "Norbu Linka",
            "address": "Thamel 44600 Kathmandu",
            "checkin": "Mon, July 07, 2025",
            "checkout": "Tue, July 08, 2025",
            "totalNights": 1,
            "totalRooms": 1,
            "rooms": [
                {
                    "room_Type": "DELUXE SINGLE",
                    "description": "DELUXE SINGLE - Breakfast",
                    "totalRooms": 1,
                    "totalAdults": 1,
                    "totalChildren": 0
                }
            ],
            "bookingStatus": "confirmed"
        },
        "passengers": [
            {
                "title": "Mr.",
                "firstName": "Anil",
                "lastName": "Rayamajhi",
                "type": "AD"
            }
        ],
        "contactDetails": {
            "email": "st-user@gmail.com",
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

*Case: Booking Not Found*
```json
{
    "success": false,
    "data": {
        "error": "Payment failed due to booking not found. Please contact customer support."
    }
}
```

*Case: GRN Booking Failed Message*
```json
{
    "success": false,
    "data": {
        "error": "Payment failed. Please contact customer support."
    }
}
```