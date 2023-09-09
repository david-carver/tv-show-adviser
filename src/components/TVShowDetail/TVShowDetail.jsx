import FiveStarRating from "../FiveStarRating/FiveStarRating";
import s from "./TVShowDetail.module.css";

export default function TVShowDetail({ tvshow }) {
  const rating = tvshow.vote_average / 2;

  return (
    <div>
      <div className={s.title}>{tvshow.name}</div>
      <div className={s.rating_contianer}>
        <FiveStarRating rating={rating} />
        {/* <span className={s.rating}>{rating}/5</span> */}
      </div>
      <div className={s.rating}>{tvshow.vote_average / 2}/5</div>
      <div className={s.overview}>{tvshow.overview}</div>
    </div>
  );
}
