import { Schema, model } from "mongoose"

const TramiteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }]
})

const Tramite = model("Tramite", TramiteSchema)

export default Tramite