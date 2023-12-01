const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shefalijohnson98:nRNwe2utDGHYbNTM@nodetuts.8uqdnnn.mongodb.net/articles?retryWrites=true&w=majority')
    .then((res) => console.log("connected to db"))
    .catch((err) => console.log(err))