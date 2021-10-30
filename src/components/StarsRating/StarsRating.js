import StarRatings from "react-star-ratings";

export default function StarsRating({item}) {

    const {vote_average} = item;

    return (
        <div>

            <StarRatings
                rating={vote_average / 2}
                starRatedColor="red"
                starDimension="26px"
            />

        </div>

    );
}