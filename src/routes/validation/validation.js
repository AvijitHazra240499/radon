const UserModel=require('../model/userModel')

const isValid = (value) => {
    if(typeof value === "undefined" || typeof value === "null") return false;
    if(typeof value === "string" && value.trim().length == 0) return false;
    return true; 
  }


  // /STRING VALIDATION BY REJEX
const isValidField = (name) => {
    return  /^[a-zA-Z]/.test(name.trim());
  };  

 const isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId)
} 


const isValidBody = (data) => {
  return Object.keys(data).length == 0;
}
 
  const isValidString = (String) => {
    return /\d/.test(String)
  }
  
  const isValidPhone = (phone) => {
    return /^[6-9]\d{9}$/.test(phone)
  };

  //EMAIL VALIDATION BY REJEX
  const isValidEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.trim());
  };
  // profileImage
  const isValidProfileImage = (profileImage) => {
    return /^(https:\/\/|http:\/\/)[a-zA-Z]+\.[a-zA-Z0-9\!-_$]+\.[a-zA-Z]{2,5}(\/)+[A-Za-z0-9\!@#$%&*?=+_.-]+/.test(profileImage.trim());
  };
  //PASSWORD VALIDATION BY REJEX
  const isValidPassword = (password) => {
    return /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password.trim());
  };

   //ADDRESS VALIDATION BY REJEX
   const isValidAddress = (address) => {
    return /^[a-zA-Z0-9_.-]/.test(address);
  };
  //STREET VALIDATION BY REJEX
  const isValidStreet = (street) => {
    return /^[a-zA-Z0-9_.-]/.test(street);
  };
 
  //CITY VALIDATION BY REJEX
  const isValidCity = (city) => {
    return /^[a-zA-Z0-9_.-]/.test(city);
  };
  //VALIDATION OF pincode BY REJEX
  const isValidPincode = (pincode) => {
    return /^(\d{6})$/.test(pincode)
    
  };
//  //VALIDATION OF title BY REJEX
//   const isValidTitle = (title) => {
//     return /^[A-Za-z0-9\s\-_,\.;:()]+$/.test(title.trim())
    
//   };
 
//   const isValidNumber=(value)=>{
//     value=parseInt(value)
//     if(value === NaN ) return false;
//     return true
    
//   }
  
//   const isValidSize = (size)=> {
   
//     const validSize = size.split(",").map(x => x.toUpperCase().trim())
   
//     let givenSizes = ["S", "XS", "M", "X", "L", "XXL", "XL"]
  
//     for (let i = 0; i < validSize.length; i++) {
//       if (!givenSizes.includes(validSize[i])) {
//         return false
//       }
//     }
//     return validSize
//   }
  
// const arrCheck=(value)=>{
//   if (Array.isArray(value)) {
//     let arr = []
//     if (value.length === 0) {
//         return res.status(400).send({ status: false, message: value+" can not be empty array" })
//     }
//     value.forEach(x => {
//         if (isValidSize(x)) {
//             arr.push(x)
//         }
//     })
//     if (arr.length === 0) {
//         return res.status(400).send({ status: false, message: value+" can not be empty array" })
//     }
//     data[value] = [...arr]
//     //it's checking value as a string
// } else if (isValid(value)) {

//     data[value] = value.trim()
// } else {
//     return res.status(400).send({ status: false, message: "plz enter "+ value })
// }
// }

// const keyCheck=(value)=>{
//   if(isValidBody(value)){

//   }
// }
  
module.exports={isValid, isValidBody,isValidString,isValidPhone,isValidEmail,isValidProfileImage,isValidPassword,isValidAddress,isValidPincode,isValidStreet, isValidObjectId ,isValidCity,isValidField}