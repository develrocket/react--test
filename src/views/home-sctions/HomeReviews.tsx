import React, {useState} from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Col,
    Container,
    Row, Button, Input
} from "reactstrap";
import IconStar from "../../assets/img/icons/icon_star.svg";
import JobsImg from '../../assets/img/jobs.png';
import UserImg1 from '../../assets/img/avatar.png';
import IconLocation from '../../assets/img/icons/icon_outline_place.svg';
import IconStarRate from '../../assets/img/icons/icon_star_rate.svg';
import IconArrowLeft from '../../assets/img/icons/icon_arrow_left_gray.svg';
import IconArrowRight from '../../assets/img/icons/icon_arrow_right_green.svg';

const items = [
    {
        avatar_url: UserImg1,
        name: 'Yeonseo Choi',
        review_count: 1,
        location: 'KR',
        rate: 5,
        review_title: 'Highly Recommend',
        review_date: 'Mar 20, 2023',
        review_content: 'Nikka was a very professional consultant, always ready to assist us each step of the way. I was reminded of everthing and I had to take with to the interview and also later to pick my passport and my son`s. Thanks once more, I certainly recommend the service.',
        created_at: 'Feburary 28, 2023'
    },
    {
        avatar_url: UserImg1,
        name: 'Yeonseo Choi',
        review_count: 1,
        location: 'KR',
        rate: 5,
        review_title: 'Highly Recommend',
        review_date: 'Mar 20, 2023',
        review_content: 'Nikka was a very professional consultant, always ready to assist us each step of the way. I was reminded of everthing and I had to take with to the interview and also later to pick my passport and my son`s. Thanks once more, I certainly recommend the service.',
        created_at: 'Feburary 28, 2023'
    },
];

function HomeReviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: any) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className="carousel-avatar-container">
                    <img src={item.avatar_url} />

                    <div className="info">
                        <p className="user-name">{item.name}</p>
                        <div>
                            <p>{item.review_count} Review</p>
                            <p><img src={IconLocation} /> {item.location}</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-review-container">
                    <img src={IconStarRate}/>

                    <label className="review-created-at">{item.review_date}</label>

                    <p className="review-title">{item.review_title}</p>

                    <p className="review-content">{item.review_content}</p>

                    <p className="created-at">Date of experience: {item.created_at}</p>
                </div>

            </CarouselItem>
        );
    });

    return (
        <>
            <div className="section section-home-reviews">
                <Container>
                    <Row>
                        <Col sm="12" className="home-content-tip">
                            <img src={IconStar} />
                            Our Jobs Speaks for Ourselves
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="8" className="reviews-container">
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                <CarouselIndicators
                                    items={items}
                                    activeIndex={activeIndex}
                                    onClickHandler={goToIndex}
                                />
                                {slides}
                                <div className="carousel-custom-control">
                                    <a onClick={previous}>
                                        <img src={IconArrowLeft}/>
                                    </a>
                                    <a onClick={next}>
                                        <img src={IconArrowRight}/>
                                    </a>
                                </div>
                            </Carousel>
                        </Col>
                        <Col sm="4">
                            <img src={JobsImg} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <hr className="section-divider"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="news-container">
                                <p className="news-title">Let's keep in touch for news</p>
                                <div className="news-content-box">
                                    <Row>
                                        <Col sm={6}>
                                            <div className="text">
                                                Subscribe to be the first do receive updates and be in advantage on your application proccess
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="input-box">
                                                <Input type="text" placeholder="your email here"/>
                                                <Button className="btn btn-danger">
                                                    Subscribe &nbsp;
                                                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default HomeReviews;
