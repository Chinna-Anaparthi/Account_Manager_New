const RelugarFieldWork=require("./DataBase_Connection/RelugarFieldWork")

const FieldworkStatusUpdate = async (req, res) => {
    try {
        const { status } = req.body; 
        const { employeeId } = req.params; 

        const updatedRecord = await RelugarFieldWork.findOneAndUpdate(
            { employeeId: employeeId },
            { $set: { status: status } },
            { new: true }
        );

        if (!updatedRecord) {
            res.status(404).json({ error: 'Record with the provided employeeId not found in the database.' });
        } else {
            res.status(200).json({ message: 'Status updated successfully.', updatedRecord });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating status in MongoDB' });
    }
}

const FieldworkGet = async (req, res) => {
    try {
        const results = await RelugarFieldWork.find();
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching data from MongoDB' });
    }
  }

  module.exports={FieldworkGet,FieldworkStatusUpdate}