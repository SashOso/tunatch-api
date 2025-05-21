import {Request,Response} from 'express'
import { User } from '../entities/User'
import bcrypt from 'bcrypt';
import {generateToken} from '../utils/jwt';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, ...rest } = req.body;

    // Verificar si ya existe un usuario con el mismo username
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {  res.status(400).json({ error: 'Username already exists' }); }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = User.create({
      username,
      password: hashedPassword,
      ...rest,
    });

    // Guardar el usuario en la base de datos
    const createdUser = await user.save();

    // Eliminar la contraseña del objeto de respuesta
    const { password: _, ...publicUser } = createdUser;

    // Devolver el usuario creado sin la contraseña
     res.status(201).json(publicUser);  // Aquí siempre debes devolver la respuesta
  } catch (error: any) {
    // Si ocurre un error, devolverlo con un código de estado 500
     res.status(500).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    // Verificar que se pasen username y password
    if (!username || !password) { throw new Error("Username and password are required"); }

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ where: { username } });
    if (!user) { throw new Error("Username does not exist"); }

    // Verificar si la contraseña es válida
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) { throw new Error("Password is invalid"); }

    // Crear un objeto para el usuario sin la contraseña
    const publicUser = { id: user.id, username: user.username };

    // Generar el token JWT
    const token = generateToken(publicUser);

    res.set('Authorization', `Bearer ${token}`).json({ jwt: token, roles: [] });
  } catch (error: any) {
     res.status(500).json({ error: error.message});
  }
};

export const me = async (req: Request, res: Response) => {
  const user = (req as any).user;
  res.json(user);
};