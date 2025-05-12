import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    const appID = 68903004;
    const serverSecret = '395fc387e5511690340bdbcc8be6213a';
    const userID = String(Math.floor(Math.random() * 10000));
    const userName = 'User_' + userID;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userID,
        userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    return (
        <div className="w-full h-screen">
            {zp.joinRoom({
                container: document.querySelector('#zego-container'),
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `${window.location.origin}/room/${roomId}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
                showPreJoinView: false,
            })}
            <div id="zego-container" className="w-full h-full" />
        </div>
    );
}
