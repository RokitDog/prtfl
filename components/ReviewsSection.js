import React from 'react'
import { ReviewItem } from './ReviewItem'
import { Title } from './Title'


export const ReviewsSection = () => {
    return (
        <section className="reviewsStyled">
            <Title title={'Reviews'} span={'Reviews'}/>
            <div className="reviews">
                <ReviewItem text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam neque."} />
                <ReviewItem text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam neque."} />
            </div>
        </section>
    )
}
