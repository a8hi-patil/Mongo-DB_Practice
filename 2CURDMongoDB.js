//  1) Creation

// db.createCollection(name,options)

// db.collection_name.insertOne({ name: "Mongo-DB",
//         tyepe: "Data base",
//         videos:50})

// db.collection_name.insertMany([
// { name: "Node-JS",
//         tyepe: "Back end",
//         videos:60},
// {
// name: "JS",
//         tyepe: "Client Sode",
//         videos:40}
// ])

//  2) Read

// db.collection_name.find(query,projection)

// db
//  show collections

// db.collection_name.find()                 -> To get all data
// db.collection_name.find().pretty()        -> To get all datatty format

// db.collection_name.find({name:"Node-JS"}) -> conditional reading
// returns all data as object

// db.collection_name.find({name:"Node-JS"},{name:1}) -> only name field shown all are 0
//  catch is _id field will be shown as default

// db.collection_name.find({name:"Node-JS"},{_id:0,name:1})
//  will get perticlar wata without _id

// conditional filter

//  db.collection_name.find({active:true}).pretty().limit(1)
//  1st true condtion will shown

// db.collection_name.findOne({ active: true })  -> another way

// db.collection_name.find({ active: true }).pretty().limit(1).skip(1)
// Skipping 1st

//  3) Update

// db.collection_name.updateOne(<filter>,<update>)  -> frist match will update
// db.collection_name.updateOne({name="Data base"},{$set:{ type:"full-stack"}})


// db.collection_name.updateMany(<filter>,<update>)  -> all matches will update
// db.collection_name.updateMany({name="Data base"},{$set:{ type:"full-stack"}})

// 4) Delete🙄

// db.collection_name.remove(<deletion criteria>)


// db.collection_name.deleteMany(<deletion criteria>)
// db.collection_name.deleteMany({type"Full-Stack})


// db.collection_name.deleteMany({}) -> delete all documents
