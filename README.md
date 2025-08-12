# Sales Dashboard API

A Node.js + Express API to serve sales data from `sales.json` for dropdowns, date filters, and dashboard charts/cards.

Step:

1. npm install
2. npm run dev
3. A Postman collection is provided for easy testing: **`test.postman_collection.json`**


API Endpoints

1. Get Unique States:-
get  => http://localhost:3000/api/v1/sales/states
Response:
{
    "status": 200,
    "message": "States fetched successfully",
    "data": [
        "Kentucky",
        "California",
        "Florida",
        "North Carolina",
        "Washington",
        "Texas",
        "Wisconsin",
        "Utah",
        "Nebraska",
        "Pennsylvania",
        "Illinois",
        "Minnesota",
        "Michigan",
        "Delaware",
        "Indiana",
        "New York",
        "Arizona",
        "Virginia",
        "Tennessee",
        "Alabama",
        "South Carolina",
        "Oregon",
        "Colorado",
        "Iowa",
        "Ohio",
        "Missouri",
        "Oklahoma",
        "New Mexico",
        "Louisiana",
        "Connecticut",
        "New Jersey",
        "Massachusetts",
        "Georgia",
        "Nevada",
        "Rhode Island",
        "Mississippi",
        "Arkansas",
        "Montana",
        "New Hampshire",
        "Maryland",
        "District of Columbia",
        "Kansas",
        "Vermont",
        "Maine",
        "South Dakota",
        "Idaho",
        "North Dakota",
        "Wyoming",
        "West Virginia"
    ]
}


2. Get Min/Max Dates for a State :- 
Get => http://localhost:3000/api/v1/sales/states-max-min-date/Florida
Response:
{
    "status": 200,
    "message": "Max Min date fetched successfully",
    "data": {
        "minDate": "2014-01-21",
        "maxDate": "2017-12-25"
    }
}

3. Dashboard Data (Bonus)
Post => http://localhost:3000/api/v1/sales/getDashboardData
Response:
{
    "status": 200,
    "message": "successfully",
    "data": {
        "totalSales": 993.9000000000001,
        "totalQuantity": 5,
        "totalProfit": 261.49559999999997
    }
}