import {Request,Response} from 'express';
import { Playlist } from '../entities/Playlist';
import { PublicPlaylistDTO } from '../dtos/PublicPlaylistDTO';

export const getAll= async(req:Request,res:Response)=>{
    try{
        const list=await Playlist.find();
        const data=list.map(item=>new PublicPlaylistDTO(item));
        res.json(data);
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({message:error.message});
        }
    }
}
export const getOne=  async(req:Request,res:Response)=>{
    try{
        const { id } = req.params;
        const item = await Playlist.findOne({where: { id: parseInt(id) } });

        if (!item) {
             res.status(404).json({ message: "Not found" });
        }

        //const data = new PublicPlaylistDTO(item);
         res.json(item);
    }catch(error){
        if(error instanceof Error){
             res.status(500).json({message:error.message})
        }
    }
};
export const create=  async(req:Request,res:Response)=>{
    try{
        const { id, ...data } = req.body;
        const item = Object.assign(new Playlist(), data);
        await item.save();
        res.json(item);
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
    }
}
export const update=  async(req:Request,res:Response)=>{
    try{
        const { id, ...data } = req.body;

        const item = await Playlist.findOne({where: { id: parseInt(id) }});

        if (!item) {
            throw new Error ('Not found')
        }

        Object.assign(item, data);

        if (data.songs) {
            item.songs = data.songs;
        }

        await item.save();
        res.status(200).json(item);
    }catch(error){
        if(error instanceof Error){
            res.status(500).json({message:error.message})
        }
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const item = await Playlist.findOne({where: { id: parseInt(id) }});
        if (!item) {
            res.status(404).json({ message: "Not found" });
            return;
        }

        await Playlist.remove(item);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};
