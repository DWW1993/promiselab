var promise = Promise.reject(new Error("yup"))

promise.catch(function(err){
    console.error(err.message)
});