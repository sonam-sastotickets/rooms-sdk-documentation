# Integration

## JSON Configuration for Initiating SDK
To initiate the sdk process, the following JSON configuration must be generated:
```json
{
    "access_token": "<token from previous step>",
    "phone_number": 9800000000, //or unique ID from your system
    "wallet_balance": 30000,
    "success_url": "https://example.sastotickets.com/success",
    "failure_url": "https://example.sastotickets.com/failure",
}
```
> **Note:** *wallet_balance* can be set to null if restriction related to amount is NOT required when booking.
## Base64 Encoding and URL Construction
1. Convert the JSON configuration to a Base64-encoded string.
2. Append the encoded string to the base URL provided by the Sasto Tickets Team as follows:
   ```
   https://<SDK_URL>/?data=<encoded base64 value>
   ```

### Open the URL in the App
Once the URL is constructed, open it in a web view or browser within your app to initiate the booking process.

### Rooms Search & Booking
The SDK facilitates the rooms search functionality and the availability of selected rooms and provides detailed options. The SDK handles rooms reservation, returning booking details to the vendor.

### Capturing Response
- Once the SDK URL is open in a web view or browser within your app, users can use our solution to search and book a room.
- The app will have to handle the redirection URLs to capture success or failure responses:

#### Success
For success: `https://your-handler/success?data=<data>` as set in the JSON.
Example:

```
    https://example.sastotickets.com/success?data=eyJ0b3RhbENvc3QiOjQ0MDcsImJlYXJlclRva2VuIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKb2RIUndPbHd2WEM5aGNHa3VjMkZ6ZEc5MGFXTnJaWFJ6TG1OdmJWd3ZZWEJwWEM5aU1tSmNMM1l4WEM5blpYUXRkRzlyWlc0aUxDSnBZWFFpT2pFMk9EVTROamN6Tmpnc0ltNWlaaUk2TVRZNE5UZzJOek0yT0N3aWFuUnBJam9pVVc4MmExWkZNVGxMY1ZCcVZrSkNaeUlzSW5OMVlpSTZOeXdpY0hKMklqb2laakkzWkdKbU16YzVNR1UzWWpGbVkyRTRaR1ppTm1NNE9HVm1PVFZoWmprd05EWmhPRGhtWXlKOS4wREhFMzNIUWpJeUZGTzZPQ00zSlB5a3FMeGNBVDFpSXBuYzExUTBYVU1NIiwiZmxpZ2h0U3VtbWFyeSI6eyJkZXBhcnR1cmVGbGlnaHQiOnsiY2FycmllckNvZGUiOiJTMSIsImNhcnJpZXJMb2dvIjoiaHR0cHM6Ly9zYXN0b3RpY2tldHMtdWF0LWZsaWdodHMuczMuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbS9haXJsaW5lcy8xNTYyNTc4NTQ4LTUzMzk4Mi5wbmciLCJjYXJyaWVyTmFtZSI6IlNhdXJ5YSBBaXJsaW5lcyIsImRlcHREYXRlIjoiMjAyNS0wMy0xNSIsImRlcHRUaW1lIjoiMDg6MDAgQU0iLCJhcnJpdmFsRGF0ZSI6IjIwMjUtMDMtMTUiLCJhcnJpdmFsVGltZSI6IjA4OjMwIEFNIiwiZGVwYXJ0dXJlQWlycG9ydENvZGUiOiJLVE0iLCJkZXBhcnR1cmVBaXJwb3J0IjoiVHJpYmh1dmFuIEludOKAmWwgQWlycG9ydCIsImRlcGFydHVyZUNpdHkiOiJLYXRobWFuZHUiLCJkZXBhcnR1cmVDb3VudHJ5IjoiTmVwYWwiLCJhcnJpdmFsQWlycG9ydENvZGUiOiJQS1IiLCJhcnJpdmFsQWlycG9ydCI6IlBva2hhcmEgQWlycG9ydCIsImFycml2YWxDaXR5IjoiUG9raGFyYSIsImFycml2YWxDb3VudHJ5IjoiTmVwYWwifSwicmV0dXJuRmxpZ2h0IjpudWxsfSwiZW1lcmdlbmN5Q29udGFjdCI6eyJjb250YWN0IjoiOTg0MDAxMDE5MSIsImVtYWlsIjoic29uYWFtLmhpdGFuZ0BnbWFpbC5jb20iLCJuYW1lIjoiQW5pbCBSYXlhbWFqaGkifSwiYm9va2luZ1N1bW1hcnkiOnsiUE5SIjoiSVVTUDFDIiwiYm9va2luZ1JlZmVyZW5jZUlEIjoiZDU2ODBlZDctYTI3ZC00ZDc2LTg5MjEtMmE2MGI0YWFlODY2IiwiY3VycmVuY3kiOiJOUFIiLCJwYXNzZW5nZXJzIjpbeyJwYXNzZW5nZXJfaWQiOiJTVDI0NjY4IiwicGFzc2VuZ2VyX3R5cGUiOiJBRFQiLCJwYXNzZW5nZXJfbmFtZSI6IlJheWFtYWpoaSBBbmlsIn1dLCJ0cmlwVHlwZSI6Im9uZXdheSJ9fQ==
```
    
    
> **Note:** You will have to decode the data captured from base64 to get the json response, The data from this step will be used in the Ticketing API

```json
{
  "code": "RM-X6NGLV-HITANG",
  "source": "STR-S-101",
  "stBookingCode": "RM-X6NGLV-HITANG",
  "searchKey": "c111110f-501b-414d-b53b-1782baa305ef",
  "status": "initiated",
  "checkin": "2025-05-16",
  "checkout": "2025-05-17",
  "bookingDate": "2025-04-17 13:38 PM",
  "currency": "NPR",
  "purchaseTotalPrice": 5476,
  "stCommission": 1200,
  "vat": 867,
  "totalPrice": 7543,
  "rooms": [
    {
      "type": "DELUXE SINGLE",
        "description": "DELUXE SINGLE - Breakfast"
    }
  ],
  "guests": [
    {
      "title": "Mr.",
      "givenNames": "Sonaam",
      "surname": "Hitang"
    }
  ],
  "hotel": {
    "name": "Norbu Linka",
    "code": "1611692",
    "latitude": null,
    "address": "Thamel 44600 Kathmandu",
    "longitude": null,
    "description": null,
    "photos": [],
    "policy": {
      "cancellation": null,
      "additionalInfo": null
      }
    }
  }
```



#### Failure
  - Failure: `https://example.sastotickets.com/failure?message=<error_message>` as set in the JSON.
  - Example:

    ```https://example.sastotickets.com/failure?message=access_token%20and%20phone_number%20is%20required```
    ```https://example.sastotickets.com/failure?message=Booking%20Failed.%20Room%20has%20been%20booked%20or%20not%20available.%20Please%20try%20with%20another%20hotel```
