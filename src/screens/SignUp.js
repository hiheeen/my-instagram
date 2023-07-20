import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Kakao from 'components/Kakao';
import { REST_API_KEY, REDIRECT_URI } from 'components/KakaoLoginData';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
// import ReactFacebookLogin from 'react-facebook-login';
// import FaceBook from './FaceBook';
const Container = styled.div`
    //전체
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    // border: 1px solid black;
    margin: 0 auto;
`;
const Wrapper = styled.div`
    //실제 보여지는 박스의 사이즈 조정
    max-width: 350px;
    width: 100%;
`;

const WhiteBox = styled.div`
    background-color: white;
    border: 0.5px solid rgb(219, 219, 219);
    width: 100%;
`;
const TopBox = styled(WhiteBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 40px 25px 40px;
`;
const BottomBox = styled(WhiteBox)`
    margin-top: 20px;
    padding: 20px 0;
    text-align: center;
`;
const Input = styled.input`
    width: 100%;
    border-radius: 3px;
    padding: 7px 0;
    background-color: #fafafa;
    border: 0.5px solid rgb(219, 219, 219);
    margin-top: 10px;
`;
const Button = styled.input`
    width: 100%;
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 10px 0;
    font-weight: 600;
`;
const Line = styled(WhiteBox)`
    height: 1px;
`;
const LogIn = styled.button`
    all: unset;

    border: none;
    border-radius: 3px;
    margin-top: 10px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 10px 54px;
    font-weight: 600;
`;

function SignUp() {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleKakaoLogin = () => {
        setTimeout(() => {
            window.location.href = kakaoURL;
        }, 1000);

        const code = new URL(window.location.href).searchParams.get('code');
        console.log('code', code);
        // axios.post('http://localhost:8000', code).then((res) => {
        //     //카카오 토큰 x 프로젝트 전용 토큰 -> 백엔드에서 넘겨줌
        // });
    };
    return (
        <Container>
            <Helmet>
                <title>Instagram</title>
            </Helmet>
            <Wrapper>
                <TopBox>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </div>
                    <div>
                        <div style={{ fontSize: '12px', padding: '10px 0' }}>
                            유저들의 사진과 동영상을 보려면 가입하세요
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <LogIn onClick={handleKakaoLogin} type="submit">
                            <span style={{ marginRight: '10px' }}>
                                <FontAwesomeIcon icon={faMessage} size="1x" />
                            </span>
                            카카오톡으로 로그인
                        </LogIn>
                        {/* <Kakao /> */}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            margin: '20px 0',
                        }}
                    >
                        <Line />
                        <span style={{ padding: '0 10px', color: 'grey' }}>
                            {' '}
                            OR{' '}
                        </span>
                        <Line />
                    </div>
                    <form>
                        <Input
                            type="text"
                            name="username"
                            placeholder="휴대폰 번호 또는 이메일 주소"
                        ></Input>
                        <Input
                            type="text"
                            name="name"
                            placeholder="성명"
                        ></Input>
                        <Input
                            type="text"
                            name="username"
                            placeholder="사용자 이름"
                        ></Input>
                        <Input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                        ></Input>
                        <Button type="submit" value="가입"></Button>
                    </form>
                </TopBox>

                <BottomBox>
                    <span>
                        계정이 있으신가요? <Link to="/login">로그인하기</Link>
                    </span>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}
export default SignUp;
