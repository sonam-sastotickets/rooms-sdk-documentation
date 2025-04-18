# Download eTicket

## Download eTicket
```
Endpoint: ~/b2b/download-eticket
Method: Post
Header Params: Content-Type  : application/json
Authorization : Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9nZHMtYWRtaW4udGVzdFwvYXBpXC9pbnRsXC9hbmRyb2lkXC9pbml0aWFsaXplIiwiaWF0IjoxNjEzMzg1ODY3LCJleHAiOjE2MTMzODk0NjcsIm5iZiI6MTYxMzM4NTg2NywianRpIjoiY3o2eFZLdEVkd05jTTRVcCIsInN1YiI6MTMsInBy
```

### Sample eTicket Request
```json
{
     "stBookingCode" : "{{stBookingCode}}",
     "showAmount" : true        // true or false to show amount on e-ticket
}
```

### Sample eTicket Response
```json
{
    "success": true,
    "data": {
        "eticketLink": "https://rooms-backend-staging.sastotickets.com/e-tickets/RM-4TAOUE-RAYAMAJHI.pdf"
    }
}
```