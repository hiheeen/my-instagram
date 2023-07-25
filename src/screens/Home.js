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
import Feed from 'components/Feed';
// import api from '../api';
function Home() {
    // const datas = getAllFeeds();
    const data = [
        {
            id: 1,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'heeen',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 100,
            reviewsNum: 33,
            isLiked: false,
            reviews: [
                {
                    id: 1,
                    payload: '첫 번째 댓글',
                    user: {
                        username: 'nickname2',
                        profileImg:
                            'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
                {
                    id: 2,
                    payload: '두 번째 댓글',
                    user: {
                        username: 'korean_tiger',
                        profileImg:
                            'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
            ],
        },
        {
            id: 2,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'heeen',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 123,
            reviewsNum: 33,
            isLiked: true,
        },
        {
            id: 3,
            contentImg:
                'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            caption: '내용입니다',
            user: {
                username: 'heeen',
                profileImg:
                    'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjQ4/MDAxNTg2NDgyNTMyMTQ1.dtZ7rR07L9U8giv9ea4juxflcnz18ZoF17_CnW6NHVsg.uPXYgoyZyQCrdSRsGNJYyMSQbhnK0Nh1BN4xUfOq_E4g.PNG.zencstory/0.png?type=w800',
            },
            likesNum: 93,
            reviewsNum: 33,
            isLiked: false,
            reviews: [
                {
                    id: 1,
                    payload: '첫 번째 댓글',
                    user: {
                        username: 'nickname2',
                        profileImg:
                            'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
                {
                    id: 2,
                    payload: '두 번째 댓글',
                    user: {
                        username: 'korean_tiger',
                        profileImg:
                            'https://en.pimg.jp/081/949/515/1/81949515.jpg',
                    },
                },
            ],
        },
    ];
    return (
        <div>
            {data?.map((feed) => (
                <Feed
                    // key={feed.id}
                    // contentImg={feed.contentImg}
                    // caption={feed.caption}
                    // username={feed.user.username}
                    // reviewsNum={feed.reviewsNum}
                    // likesNum={feed.likesNum}
                    key={feed.id}
                    {...feed}
                />
            ))}
        </div>
    );
}
export default Home;
