//this middleware check for error and shows us if they found any

const errorMiddleware = (err, req, res, next) => {
  try{
 let error = { ...err};

 error.message = err.message;

 console.log(err);

 // let try to find what kind of error we have(it is mongoose error most of the time)

 //mongoose bad objectId
 if(err.name === 'castError'){
  const message = 'resourse not found';
  error = new Error(message)
  error.statusCode = 404;
 }

 //mongoose duplicate key
 if(err.code === 11000){
  const message = 'duplicate field value entered'
  error = new Error(message);
  error.statusCode = 400
 }


  } catch(error){
    next(error)
  }
}

export default errorMiddleware;