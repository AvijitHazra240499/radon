const urlModel = require("../model/urlModel")
const validUrl = require("valid-url")
const { default: mongoose } = require("mongoose")
const shortid = require("shortid")


const redis = require("redis");

const { promisify } = require("util");

//Connect to redis
const redisClient = redis.createClient(
  13190,
  "redis-13190.c301.ap-south-1-1.ec2.cloud.redislabs.com",
  { no_ready_check: true }
);
redisClient.auth("gkiOIPkytPI3ADi14jHMSWkZEo2J5TDG", function (err) {
  if (err) throw err;
});

redisClient.on("connect", async function () {
  console.log("Connected to Redis..");
});



//1. connect to the server
//2. use the commands :

//Connection setup for redis

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);


//let validUrl= /^(http(s)?:\/\/)?(www.)?([a-zA-Z0-9])+([\-\.]{1}[a-zA-Z0-9]+)\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/[^\s])?$/gm

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

module.exports.createUrl = async function (req, res) {
    try {
        let data = req.body
        if (!Object.keys(data).length)
            return res.status(400).send({ status: false, message: "Bad Request, Please enter the details in the request body." });
        const longUrl = data.longUrl
        if (!isValid(longUrl))
            return res.status(400).send({ status: false, message: "Long Url is required. ⚠️" });

        if (!validUrl.isWebUri(longUrl)) { //isweburi
            return res.status(400).send({ status: false, message: "Please enter valid LongUrl. ⚠️" });
            }
       
    
        let uniqueUrl=await urlModel.findOne({longUrl}).select({_id:0,__v:0,createdAt:0,updatedAt:0})
        if (uniqueUrl){
            return res.status(200).send({status:true,message:"This is already created ⚠️",data:uniqueUrl})
        }

        const urlCode = shortid.generate().toLowerCase()
        const shortUrl = "http://localhost:3000/" + urlCode

      

        let Data = {
            longUrl: longUrl,
            shortUrl: shortUrl,
            urlCode: urlCode
        }
    
        let urlCreated = await urlModel.create(Data) //.select({_id:0,_v:0,createdAt:0,updatedAt:0})
        //  uniqueUrl=await urlModel.findOne({longUrl}).select({_id:0,__v:0,createdAt:0,updatedAt:0})
        return res
            .status(201)
            .send({ status: true, message: "Success", data: Data});

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });

    }
}

//********************************getApi ***********************************************************************



module.exports.redirectUrl = async function (req, res) {
    try {
      let urlCode = req.params.urlCode;

      let redisData=await GET_ASYNC(`${urlCode}`)
      if(redisData){
        return res.status(302).redirect(JSON.parse(redisData).longUrl)
 
      }
  
      const findUrlCode = await urlModel.findOne({urlCode})

  
      if(!findUrlCode) return res.status(404).send({status: false, message: "url code not matched"})
      await SET_ASYNC(`${urlCode}`,JSON.stringify(findUrlCode))

      return res.status(302).redirect(findUrlCode.longUrl)
  
    } catch (error) {
      
        return  res.status(500).send({ status: false, error: error.message });
    }
  };
// module.exports = (createUrl)