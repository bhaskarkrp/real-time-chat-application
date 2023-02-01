import cloudinary from 'cloudinary';
require('dotenv').config();

const uploadImage = (req, res) => {
    if (req.file) {
        try {
            cloudinary.config({
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
                api_key: process.env.CLOUDINARY_API_KEY,
                api_secret: process.env.CLOUDINARY_API_SECRET
            });

            cloudinary.uploader.upload_stream((result) => {
                res.status(201).json({ avatar_url: result.secure_url });
            }).end(req.file.buffer);
        } catch (error) {
            res.status(500).json({ status: e })
        }
    } else {
        res.status(204);
    }
};

export default uploadImage;