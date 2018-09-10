const  mongoose = require('mongoose');

const shortid = require ('shortid');

const response = require('./../libs/responselib')

const logger = require('./../libs/loggerlib');

const  check = require('./../libs/checklib');

const  slabmodel = mongoose.model('slabs');

const   creditdebitModel = mongoose.model('creditsdebits');




// function for deleting the   slab   model
let deleteslab =(req, res)=>{

    slabmodel.deleteMany((err, result)=>{
         if(err)
         {
             logger.error(`error occured ${err}`, 'database' , 10)
             let apiresponse = response.generate('true', 'some error occured', 500, null)
             res.send(apiresponse);
         }

         else {
              let apiresponse = response.generate('false' , 'data deleted  succesfully', 200)
              res.send(apiresponse);

         }
    })
}

// end of function of deleting the slabmodel   by admin



//  function  to set the slabdata by admin

let postslabdata =(req, res)=>{

    if(check.isEmpty(req.body.minslab) || check.isEmpty(req.body.minslab1)|| check.isEmpty(req.body.maxslab)|| check.isEmpty(req.body.minslabvalue)|| check.isEmpty(req.body.minslabvalue1)|| check.isEmpty(req.body.maxslabvalue))
    {
        let apiresponse = response.generate('true', 'required parameter missing', 403, null)
        res.send(apiresponse)
    }

    else {


        let newslabdata = new slabmodel({

            minslab:req.body.minslab,
            minslab1:req.body.minslab1,
            maxslab:req.body.maxslab,
            minslabvalue:req.body.minslabvalue,
            minslabvalue1:req.body.minslabvalue1,
            maxslabvalue:req.body.maxslabvalue,
            startdate: Date.now(),
            slabid : shortid.generate()


        })
            

        newslabdata.save((err, result)=>{

            if(err)
            {
                logger.error(`error occured ${err}` , 'database', 10)
                let apiresponse = response.generate('true', 'some error occured', 500, null);
                res.send(apiresponse)
            }

            else {
                let apiresponse = response.generate('false ', 'data saved succesfully', 200, result )
                res.send(apiresponse);
                //console.log('slab postd succesfully');
            }



        })


    }

}

// end of function  (to set the slab model by admin)


// function  for fetching the slab data
let getslabdata =(req , res)=>{


    slabmodel.find((err,result)=>{

        if(err)
        {
            logger.error(`error ocuured ${err}`, 'database ', 10);
            let apiresponse = response.generate('true', 'some error occured', 500, null);
            res.send(apiresponse);
        }

        else {

            let apiresponse = response.generate('false' , ' slab  fetched  ' , 200, result)
            res.send(apiresponse);

        }

    })
}

// end of function fetching the slab data




module.exports ={

    postslabdata : postslabdata,
    getslabdata:getslabdata,
    deleteslab:deleteslab
   


}
