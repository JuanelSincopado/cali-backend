import Tramite from "../model/Tramite.js";

export const getAllTramite = async (req, res) => {
  try {
    const tramites = await Tramite.find();

    res.status(200).json(tramites);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}