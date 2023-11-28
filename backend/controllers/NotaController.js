// controllers/notaController.js
import Nota from '../models/Nota.js';
import Tenan from '../models/Tenan.js';
import Kasir from '../models/Kasir.js';



// Create a new Nota
export const createNota = async (req, res) => {
  try {
    const { KodeNota, KodeTenan, KodeKasir, JumlahBelanja, Diskon } = req.body;
    const TglNota = new Date();
    const JamNota = TglNota.getHours() + ":" + TglNota.getMinutes() + ":" + TglNota.getSeconds();
    const Total = JumlahBelanja - (JumlahBelanja *(Diskon/100));

    // Check if the referenced Tenan and Kasir exist
    const tenanExists = await Tenan.findOne({ where: { KodeTenan } });
    const kasirExists = await Kasir.findOne({ where: { KodeKasir } });

    if (!tenanExists || !kasirExists) {
      return res.status(404).json({ error: 'Tenan or Kasir not found' });
    }

    const nota = await Nota.create({
      KodeNota,
      KodeTenan,
      KodeKasir,
      TglNota,
      JamNota,
      JumlahBelanja,
      Diskon,
      Total,
    });

    return res.status(201).json(nota);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Delete a Nota by KodeNota
export const deleteNotaByKodeNota = async (req, res) => {
  try {
    const { KodeNota } = req.params;

    const deletedNota = await Nota.destroy({
      where: { KodeNota },
    });

    if (deletedNota === 0) {
      return res.status(404).json({ error: 'Nota not found' });
    }

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a Nota by KodeKasir
export const getNotaByKodeKasir = async (req, res) => {
  try {
    const { KodeKasir } = req.params;

    const notas = await Nota.findAll({
      where: { KodeKasir },
    });

    return res.status(200).json(notas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};