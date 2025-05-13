// Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        const id = roomId.trim() || uuidv4();
        navigate(`/room/${id}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-4 text-white">Join or Create a Meeting</h1>
                <input
                    className="w-full p-2 mb-4 rounded text-black"
                    placeholder="Enter Room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <button
                    onClick={handleJoin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                >
                    Enter
                </button>
            </div>
        </div>
    );
}
