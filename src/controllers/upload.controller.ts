import { Request, Response } from 'express';

export const uploadController = (req: Request, res: Response) => {
  try{
    if (!req.file) throw new Error('No file uploaded');

    const folder = (req as any).uploadFolder;
    if (!folder) throw new Error('Upload folder information missing');

    const path = `/${folder}/${req.file.filename}`;
    res.status(200).json({path: path});
  }catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    }
  }
};