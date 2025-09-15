const Services = require("../Models/ServicesModel");

//   Create Service
async function handleCreateServices(req, res) {
    try {
        const { title, description, icon, features, price } = req.body;

        // Validation
        if (!title || !description || !icon || !features || !price) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Check for duplicate
        const existingService = await Services.findOne({ title });
        if (existingService) {
            return res.status(400).json({ message: "Service with this title already exists", success: false });
        }

        const newService = await Services.create({ title, description, icon, features, price });

        return res.status(201).json({
            message: "Service created successfully",
            success: true,
            service: newService,
        });
    } catch (error) {
        console.error("Error creating service:", error);
        return res.status(500).json({ message: error.message, success: false });
    }
}

//   Update Service
async function handleUpdateServices(req, res) {
    try {
        const { id, title, description, icon, features, price } = req.body;

        if (!id || !title || !description || !icon || !features || !price) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const updatedService = await Services.findByIdAndUpdate(
            id,
            { title, description, icon, features, price },
            { new: true, runValidators: true }
        );

        if (!updatedService) {
            return res.status(404).json({ message: "Service not found", success: false });
        }

        return res.status(200).json({
            message: "Service updated successfully",
            success: true,
            service: updatedService,
        });
    } catch (error) {
        console.error("Error updating service:", error);
        return res.status(500).json({ message: error.message, success: false });
    }
}

//   Delete Service
async function handleDeleteServices(req, res) {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Service id is required", success: false });
        }

        const deletedService = await Services.findByIdAndDelete(id);

        if (!deletedService) {
            return res.status(404).json({ message: "Service not found", success: false });
        }

        return res.status(200).json({ message: "Service deleted successfully", success: true });
    } catch (error) {
        console.error("Error deleting service:", error);
        return res.status(500).json({ message: error.message, success: false });
    }
}

//   Get All Services
async function handleGetServices(req, res) {
    try {
        const services = await Services.find().sort({ createdAt: -1 });

        return res.status(200).json({
            message: "Services fetched successfully",
            success: true,
            services,
        });
    } catch (error) {
        console.error("Error fetching services:", error);
        return res.status(500).json({ message: error.message, success: false });
    }
}

module.exports = {
    handleCreateServices,
    handleDeleteServices,
    handleUpdateServices,
    handleGetServices,
};
