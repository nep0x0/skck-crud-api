const SKCK = require('../models/skck');

//get skck
const getSKCK = async (req, res) => {
    try {
      const skcks = await SKCK.find({});
      res.status(200).json(skcks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Create SKCK
const createSKCK = async (req, res) => {
    try {
        const skck = await SKCK.create(req.body);
        res.status(201).send(skck);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Read SKCK
const getByIdSKCK = async (req, res) => {
    try {
        const skck = await SKCK.findById(req.params.id);
        if (!skck) {
            return res.status(404).send({ error: "SKCK not found" });
        }
        res.send(skck);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Update SKCK
const updateSKCK = async (req, res) => {
    try {
        const skck = await SKCK.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!skck) {
            return res.status(404).send({ error: "SKCK not found" });
        }
        res.send(skck);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// Delete SKCK
const deleteSKCK = async (req, res) => {
    try {
        const skck = await SKCK.findByIdAndDelete(req.params.id);
        if (!skck) {
            return res.status(404).send({ error: "SKCK not found" });
        }
        res.send({ message: "SKCK deleted" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// // Search SKCK
// const searchSKCK = async (req, res) => {
//     try {
//         const { nama_lengkap, nomor_skck } = req.query;
//         const query = {};
//         if (nama_lengkap) query.nama_lengkap = new RegExp(nama_lengkap, 'i');
//         if (nomor_skck) query.nomor_skck = nomor_skck;
//         const skcks = await SKCK.find(query);
//         res.send(skcks);
//     } catch (error) {
//         res.status(400).send({ error: error.message });
//     }
// };


module.exports = {
    getSKCK,
    createSKCK,
    getByIdSKCK,
    updateSKCK,
    deleteSKCK,
    // searchSKCK,
  };