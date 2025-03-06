一致
// peakvisor.js 内容  
let obj = JSON.parse($response.body);  
obj.data.subscription.status = "active";  
obj.data.subscription.expire_date = "2099-12-31";  
$done({body: JSON.stringify(obj)});
