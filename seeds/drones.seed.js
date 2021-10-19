// Iteration #1
let arrayOfDrones = [
    {
        name: 'DroneUn',
        propellers: 'yescool',
        maxSpeed: 18
    },
    {
        name: 'DroneDeux',
        propellers: 'yescoodsdsdsl',
        maxSpeed: 19
    },
    {
        name: 'DroneTrois',
        propellers: 'questce quun propeller?',
        maxSpeed: 18
    }
];

//connecter au drone model
const DroneModel = require("./../models/Drone.model");
//require à la base de données
const mongoose = require("mongoose");
//connecter à la base de données
mongoose.connect("mongodb://localhost/lab-express-drones", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      })
      .then(()=>{
        DroneModel.create(arrayOfDrones).
        then((droneDoc) => {console.log(droneDoc.length)
        mongoose.disconnect();
        })
        
      })
      .catch((err) => {
            console.error("Error connecting to mongo: ", err);
          })

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app








//et là on connecte à la base de données

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
//   .then(async(x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//     const res = await droneModel.insertMany(drones);

//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });


