const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://minor-project:minor-project@coding.cqb5p.mongodb.net/minor?retryWrites=true&w=majority",
                    {useNewUrlParser: true,
                    useUnifiedTopology: true});
    console.log("DB connected!")
}

module.exports = connectDB;