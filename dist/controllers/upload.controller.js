"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const uploadController = (req, res) => {
    try {
        if (!req.file)
            throw new Error('No file uploaded');
        const path = `/${req.file.filename}`;
        res.status(200).json({
            path: path,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};
exports.uploadController = uploadController;
