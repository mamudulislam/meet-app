// Room.jsx
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Room() {
    const { roomId } = useParams();
    const containerRef = useRef(null);

    useEffect(() => {
        const appID = 68903004;
        const serverSecret = '395fc387e5511690340bdbcc8be6213a';
        const userID = String(Math.floor(Math.random() * 10000));
        const userName = 'meetapp_' + userID;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            userID,
            userName
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: containerRef.current,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `${window.location.origin}/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            showPreJoinView: true,
        });

    }, [roomId]);

    return <div ref={containerRef} className="w-full h-screen" />;
}
