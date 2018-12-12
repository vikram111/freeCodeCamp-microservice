const getRequestInfo = (req,callback)=>{
    if(req!==null){
        let finalJson = {
            "ipaddress": req.ip,
            "language":  req.get('accept-language'),
            "software": req.get('user-agent')
        }
        callback(null,finalJson);
    }else{
        callback({"error":"no headers"});
    }
}

module.exports=getRequestInfo;