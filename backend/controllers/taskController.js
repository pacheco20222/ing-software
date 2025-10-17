const getTasks = (req, res) => {
    res.status(200).json({ "message": "Get all tasks from controller" });
}

const createTasks = (req, res) => {
    const { title, description } = req.body;
    res.status(201).json({ "message": `Task created with title: ${title} and description: ${description}` });
}

module.exports = { 
    getTasks,
    createTasks
 };