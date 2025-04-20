# Ticket Status

## Rooms Ticket Status/Details
```
Endpoint: ~/b2b/ticket/details
Method: Post
Header Params: Content-Type  : application/json
Authorization : Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nZHMtYWRtaW4udGVzdFwvYXBpXC9pbnRsXC9hbmRyb2lkXC9pbml0aWFsaXplIiwiaWF0IjoxNjEzMzg1ODY3LCJleHAiOjE2MTMzODk0NjcsIm5iZiI6MTYxMzM4NTg2NywianRpIjoiY3o2eFZLdEVkd05jTTRVcCIsInN1YiI6MTMsInBydiI6IjQyZWRlMzMzNGEwNGNkNjVjYjJiZTNmNWFkZmViMmMxZWRkMzA3NzQifQ.UzEWszpOW92jOqSkdciWoGV4456CdS1nuPx7Tql-_Xk
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