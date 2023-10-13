const Database1=require("./DataBase_Connection/RelugarFieldWork")


const FieldworkGet = async (req, res) => {
    try {
        const results = await Database1.find();
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from MongoDB' });
    }
  }

  module.exports={FieldworkGet}