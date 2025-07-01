const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error("GET /api/projects error:", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.createProject = async (req, res) => {
    try {
        const { name, description } = req.body || {};
        const image = req.file?.filename;

        if (!name || !description || !image) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newProject = new Project({ name, description, image });
        await newProject.save();

        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (err) {
        console.error('Project Create Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
