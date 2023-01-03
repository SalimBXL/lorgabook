import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./ReviewsResume.css";

const ReviewsResume = ({notReviewed, notCompleted, totalArticles, fullyReviewed, verbose}) => {
    const percent = (totalArticles && fullyReviewed) 
        ? Math.floor(fullyReviewed / totalArticles * 100) 
        : null;
    if (verbose) return (<div>
        <p>
        <Badge bg="danger">{notReviewed} article{notReviewed > 1 ? "s are" : " is"} not yet reviewed.</Badge>
        <br />
        <Badge bg="warning" text="dark">{notCompleted} review{notCompleted > 1 ? "s are" : " is"}s not complete.</Badge>
        </p>
        {percent && <p>
        <Badge bg="success">{percent}% of articles are fully reviewed ({fullyReviewed}/{totalArticles}).</Badge>
        </p>}
    </div>);

    return (<Badge bg="light" text="dark" className='Articles-revs'>
        Reviews: &nbsp;
        {notReviewed && <Badge bg="danger">{notReviewed}</Badge>}&nbsp;
        {notCompleted && <Badge bg="warning" text="dark">{notCompleted}</Badge>}
    </Badge>)
};

export default ReviewsResume;