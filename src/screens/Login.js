import {
    faFacebook,
    faInstagram,
    faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { REST_API_KEY, REDIRECT_URI } from 'components/KakaoLoginData';
import { useState } from 'react';
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
    margin-top: 12px;
`;
const Button = styled.input`
    width: 100%;
    border: none;
    border-radius: 3px;
    margin-top: 12px;
    background-color: #0095f6;
    color: white;
    text-align: center;
    padding: 8px 0;
    font-weight: 600;
`;
const Line = styled(WhiteBox)`
    height: 1px;
`;

function Login() {
    // useState() : 컴포넌트에서 바뀌는 변수 또는 값을 관리해주는 함수
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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

    const onChange = (e) => {
        const { name, value } = e.currentTarget; //e.currentTarget 이라는 객체에 들어있을 name 과 value를
        // name, value라는 변수에 할당한다.
        console.log('name', name, 'value', value);

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
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

                    <form onSubmit={onSubmit}>
                        <Input
                            type="text"
                            name="username"
                            placeholder="유저네임"
                            onChange={onChange}
                            required
                        ></Input>
                        <Input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            onChange={onChange}
                            required
                        ></Input>
                        <Button type="submit" value="로그인 하기"></Button>
                    </form>

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
                    <div style={{ display: 'flex' }}>
                        <span style={{ marginRight: '10px' }}>
                            <FontAwesomeIcon
                                style={{
                                    color: '563624',
                                }}
                                icon={faMessage}
                                size="1x"
                            />
                        </span>
                        <div
                            onClick={handleKakaoLogin}
                            style={{ fontWeight: 550, cursor: 'pointer' }}
                        >
                            카카오톡으로 로그인
                        </div>
                    </div>
                </TopBox>

                <BottomBox>
                    <span>
                        {' '}
                        계정이 없으신가요? <Link to="/signup">가입하기</Link>
                    </span>
                </BottomBox>
            </Wrapper>
        </Container>
    );
}
export default Login;
