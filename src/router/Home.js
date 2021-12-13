import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Movie from "../components/Movie";
import Slide from "../components/Slide";
import navList from "../atom/NavList";

function Home() {
  return (
      <div className={styles.container}>

            <div className={styles.slide__box}>
                <h1 className={styles.title}>
                  Apple Market  
                </h1>
                <p className={styles.p}>사과마켓에서는 이런 일들을 할 수 있어요!</p>
                {/* <Slide ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${slide.path}&sort_by=year`} /> */}
                <Slide />
            </div>
    
      </div>
  )
}

export default Home;