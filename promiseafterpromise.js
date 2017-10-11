// first()
//     .then(function(fulfill){
//         return second(fulfill);
//     }).then(console.log)

first().then(second).then(console.log);