import io from 'socket.io-client';
const scocket = io('http://localhost:3500')
export default scocket;