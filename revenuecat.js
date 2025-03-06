// revenuecat.js 内容  
let obj = JSON.parse($response.body);  
obj.subscriber.entitlements = {  
  "pro": {  
    "expires_date": "2099-12-31T00:00:00Z",  
    "product_identifier": "annual_subscription",  
    "purchase_date": "2023-01-01T00:00:00Z"  
  }  
};  
$done({body: JSON.stringify(obj)});  
