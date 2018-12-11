const getTimeAsJson = function(dateString,callback){
    if(dateString!==null && dateString!==""){
        var inputDate = new Date(dateString);
        if(inputDate instanceof Date){
            let jsonTime = {
                "unix": inputDate.getTime(),
                "utc": inputDate.toUTCString()
            }

            callback(null,jsonTime);
        }else{
            let errorTime = {
                "error":"Invalid Date"
            }
            callback(errorTime);
        }
    }else{
       let inputDate = new Date();
       let jsonTime = {
            "unix": inputDate.getTime(),
            "utc": inputDate.toUTCString()
       }
       callback(null,jsonTime);
    }
}

module.exports = getTimeAsJson;