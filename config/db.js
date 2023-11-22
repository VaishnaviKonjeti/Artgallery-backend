import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://chaluvadimanideep83:test123@art.veggdca.mongodb.net/?retryWrites=true&w=majority"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
