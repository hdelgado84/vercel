import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    const user = { id: userData.id, email: userData.email };// acá podemos pasarle a user todo lo que queremos que vaya en el payload
    const expiration = { expiresIn: '1h' };
    return jwt.sign(user, secret_key, expiration);
}