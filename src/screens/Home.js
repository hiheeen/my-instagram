import styled from 'styled-components';
import InstaImg from '../img/instaimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCircle,
    faComment,
    faMessage,
    faSave,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faHeart as SolidHeart } from '@fortawesome/free-solid-svg-icons';

const FeedContainer = styled.div`
    width: 100%;
    border: 1px solid black;
    // height: 630px;
    border-radius: 5px;
    margin-bottom: 20px;
`;
const Wrapper = styled.div`
    height: 100%;
`;
const FeedHeader = styled.div`
    height: 50px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: left;
    align-items: center;
    & > * {
        margin-left: 8px;
    }
`;
const FeedImg = styled.div`
    height: auto;
`;
const FeedAction = styled.div`
    & > * {
        margin-right: 8px;
        margin-left: 8px;
    }
`;
const ActionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;
const ActionIconBoxLeft = styled.div`
    & > * {
        margin-right: 8px;
    }
`;
const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 0;
    font-size: 10px;
    & > * {
        padding: 4px 0;
    }
`;
function Home() {
    return (
        <div>
            <FeedContainer>
                <Wrapper>
                    <FeedHeader>
                        <div>
                            <FontAwesomeIcon icon={faCircle} size="2xl" />
                        </div>
                        {/* //변수로 사용할 아이디 */}
                        <div>heeen</div>
                    </FeedHeader>
                    <FeedImg>
                        {/* //변수로 사용할 이미지 src */}
                        <img
                            style={{
                                maxWidth: '630px',
                                width: '100%',
                                height: '450px',
                            }}
                            alt=""
                            src={InstaImg}
                        />
                    </FeedImg>
                    <FeedAction>
                        <ActionWrapper>
                            <ActionIconBoxLeft>
                                <FontAwesomeIcon
                                    style={{
                                        color: 'tomato',
                                    }}
                                    icon={true ? SolidHeart : far.faHeart}
                                    size="lg"
                                />

                                <FontAwesomeIcon
                                    icon={far.faComment}
                                    size="lg"
                                />

                                <FontAwesomeIcon
                                    icon={far.faPaperPlane}
                                    size="lg"
                                />
                            </ActionIconBoxLeft>
                            <div style={{ marginRight: '5px' }}>
                                <FontAwesomeIcon
                                    icon={far.faBookmark}
                                    size="lg"
                                />
                            </div>
                        </ActionWrapper>
                        {/* //변수로 사용할 숫자 */}
                        <div style={{ marginTop: 10 }}>
                            <div>100 likes</div>
                        </div>
                        {/* //변수로 사용할 아이디? */}
                        <div
                            style={{
                                marginTop: 15,
                                display: 'flex',
                            }}
                        >
                            <div style={{ marginRight: 5 }}>작성자</div>
                            <div>작성내용</div>
                        </div>
                        {/* //변수로 사용할 댓글 갯수 */}
                        <div style={{ marginTop: 10 }}>
                            <div>댓글 58개 모두 보기</div>
                        </div>
                        <ReviewContainer>
                            <div>
                                <span>작성자</span>
                                <span>댓글내용</span>
                            </div>
                            <div>
                                <span>작성자</span>
                                <span>댓글내용</span>
                            </div>
                        </ReviewContainer>
                    </FeedAction>
                </Wrapper>
            </FeedContainer>
        </div>
    );
}
export default Home;
