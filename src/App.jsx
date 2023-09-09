import "./global.css";
import s from "./App.module.css";
import { TvShowAPI } from "./api/TvShowAPI";
import { useEffect, useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const [currentTVShow, setCurrentTvShow] = useState();
  const [resomendationList, setResomendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TvShowAPI.getPopulars();

    if (popularTVShowList.length > 0) {
      setCurrentTvShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TvShowAPI.fetchRecommendations(tvShowId);

    if (recommendations.length > 0) {
      setResomendationList(recommendations);
    }
  }

  async function fetchByTitle(title) {
    const searchResp = await TvShowAPI.fetchByTitle(title);

    if (searchResp.length > 0) {
      setCurrentTvShow(searchResp[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logo}
              title="What to Watch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvshow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={resomendationList}
            onClick={setCurrentTvShow}
          />
        )}
      </div>
    </div>
  );
}
