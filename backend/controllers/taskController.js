const getTasks = (req, res) => {
    res.status(200).json({ "message": "Get all tasks from controller" });
}

module.exports = { 
    getTasks
 };