import { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';
import io from 'socket.io-client';

function LiveChat(props) {
    const [startLive, setStartLive] = useState(false);
    const videoRef = useRef(null);
    const peerRef = useRef(null);
    const socket = useRef(null);
    useEffect(() => {
        //웹캠 스트림 얻기
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;

                //simple-peer 인스턴스 생성
                peerRef.current = new SimplePeer({
                    initiator: window.location.hash === '#initiator',
                    stream,
                });

                // socket.io 클라이언트 연결
                socket.current = io('http://your-socket-io-server-url');

                // 시그널링 데이터 전송 및 수신
                peerRef.current.on('signal', (data) => {
                    // 시그널링 데이터를 서버를 통해 다른 사용자에게 전달합니다.
                    socket.current.emit('signal', data);
                });

                // 시그널링 데이터 수신
                socket.current.on('signal', (data) => {
                    // 다른 사용자로부터 수신한 시그널링 데이터를 simple-peer에 입력합니다.
                    peerRef.current.signal(data);
                });

                // 원격 피어의 스트림을 받아올 때 처리
                peerRef.current.on('stream', (remoteStream) => {
                    // 원격 피어의 비디오 스트림을 비디오 요소에 연결하여 상대방 화면을 보여줌
                    videoRef.current.srcObject = remoteStream;
                });
            })
            .catch((error) =>
                console.error('Error accessing media devices:', error)
            );
    }, []);

    const handleStartChat = () => {
        //사용자가 버튼을 누르면 시그널링 데이터 교환을 시작한다.
        //시그널링 데이터는 다른 사용자에게 전달해야 한다.
        // peerRef.current.signal('SIGNAL_DATA_RECEIVED_FROM_OTHER_USER');
        setStartLive(true);
    };
    return (
        <div>
            {startLive ? (
                <video ref={videoRef} autoPlay playsInline muted></video>
            ) : (
                ''
            )}
            <button onClick={handleStartChat}>Start LiveChat</button>
        </div>
    );
}
export default LiveChat;
