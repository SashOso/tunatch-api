import {Router} from 'express';

import albumRoutes from './album.routes';
import artistRoutes from './artist.routes';
import authRoutes from './auth.routes';
import genreRoutes from './genre.routes';
import playlistRoutes from './playlist.routes';
import roleRoutes from './role.routes';
import songRoutes from './song.routes';
import userRoutes from './user.routes';
import uploadRoutes from './upload.routes';

const router = Router();

router.use('/albums', albumRoutes);
router.use('/artists', artistRoutes);
router.use('/auth', authRoutes);
router.use('/genres', genreRoutes);
router.use('/playlists', playlistRoutes);
router.use('/roles', roleRoutes);
router.use('/songs', songRoutes);
router.use('/users', userRoutes);
router.use('/upload', uploadRoutes);


export default router;