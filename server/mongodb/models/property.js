import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  propertyType: { type: "string", required: true },
  location: { type: "string", required: true },
  price: { type: "string", required: true },
  photo: { type: "string", required: true },
  creator: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const propertyModel = mongoose.model("property", PropertySchema);

export default propertyModel;