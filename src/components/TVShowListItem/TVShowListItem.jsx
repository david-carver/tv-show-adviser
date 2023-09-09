import { SMALL_IMG_BASE_URL } from "../../config";
import s from "./TVShowListItem.module.css";

export default function TVShowListItem({ tvshow, onClick }) {
  return (
    <div className={s.container} onClick={onClick.bind(null, tvshow)}>
      <img
        className={s.img}
        src={SMALL_IMG_BASE_URL + tvshow.backdrop_path}
        alt={tvshow.name}
      />
      <div className={s.title}>{tvshow.name}</div>
    </div>
  );
}
