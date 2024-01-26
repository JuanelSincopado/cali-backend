import { Schema, model } from "mongoose"

const TramiteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  options: [
    {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: false
      },
      options: [
        {
          title: {
            type: String,
            required: true
          },
          url: {
            type: String,
            required: false
          },
        }
      ]
    }
  ]
})

const Tramite = model("Tramite", TramiteSchema)

export default Tramite