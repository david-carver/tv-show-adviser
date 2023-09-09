import s from "./TVShowList.module.css";
import TVShowListItem from "../TVShowListItem/TVShowListItem";

export default function TVShowList({ tvShowList, onClick }) {
  return (
    <div>
      <div className={s.title}>You'll prabably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => (
          <TVShowListItem key={tvShow.id} tvshow={tvShow} onClick={onClick} />
        ))}
      </div>
    </div>
  );
}
