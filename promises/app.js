
//creation of promise
  //  syntattax 

     

    //   const promise1 = new promise((resolve, reject)=>{
    //       if(/* success  condition*/){
    //         resolve("succes result");
    //       } else{
    //          reject (err);
    //       }
    //   }) ;


    //using promise 


   // 1 //    promise1
    //     .then(result=>{
    //         console.log("resolved",result);
    //     })
    //     .catch(error=>{
    //         console.error("rejected",error);
    //     })

    //2//  synta 2
        // async function  run() 
        //  {
        //      const result =await asynctask();
        //      console.log(result);
        // }
        //  run();


        //3//  async await try catch

            // async function run() {
            //      try {
            //         const result = await mytask();
            //         console.log(result);
            //      }catch(err){
            //         console.log(err);
            //      }
                
            // }
            //  run();








  //promisified fs 


//   const fs = require('fs')
//   const path  = require ('path')
// function readFilePromisified(filePath,encoding='utf-8'){
//     return new Promise((res,rej)=>{
//         fs.readFile(path.resolve(filePath),encoding,(err,data)=>{
//             if(err) reject (err);
//             else resolve(data);
//         });
//     });
// }

// //usage
//    readFilePromisified('example,txt')
//    .then(data =>{'file content',data})
//    .catch(err=>{console.log('error',err.message)});




   //async usage
//   async function readFile(){
//      try{
//         const data = await fs.readFile('example.txt','utf8');
//         console.log("file content ",data);
//      } catch(err){
//         console.log("error",err)
//      }
//   }

    readFile();

//   function setTimeoutPromisified(ms){
//      return new Promise((res,rej)=>{

//          if(typeof ms!== 'number' || ms<0){
//             return reject (new error('invalid time'));
//          }
//         setTimeout(()=>{
//             resolve('waited foe ${ms}');
//         },ms);

        
//      });
//   }






