import { useState, useEffect } from "react";
import styles from "./Slide.module.css";
import Movie from "./Movie";
import Loading from "./Loading";
import img1 from '../images/xmas1.jpg'
import img2 from '../images/xmas2.jpg'
import img3 from '../images/xmas3.jpg'

function Slide() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);

    const onClickL = () => {
      if (trans >= 0) {
        return;
      }
      setTrans(current => current + 1050);
    }
    const onClickR = () => {
      if (trans <= -2450) {
        return;
      }
      setTrans(current => current - 1050);
    }
  const getMovies = async () => {
    // const json = await (
    //   await fetch(ytsApi)
    // ).json();
    // setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

    return (
        <div className={styles.container}>
          {loading ? <Loading /> :    
            <div className={styles.slide__show}>
              <div className={styles.slide} style={{
                  transform: `translateX(${trans}px)`
              }}>
                
                  <img src={img1} alt='대타' width='1050px' height='500px'/>
                  <img src={img2} alt='대타' width='1050px' height='500px'/>
                  <img src={img3} alt='대타' width='1050px' height='500px'/>
              </div>
            </div>
          }
          {loading ? null : (
            <div>
              <button class={styles.left} onClick={onClickL}><i class="fas fa-chevron-left"></i></button>
              <button class={styles.right} onClick={onClickR}><i class="fas fa-chevron-right"></i></button>          
            </div>
          )}
          
        </div>
    )
}

export default Slide;