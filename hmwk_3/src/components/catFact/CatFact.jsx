import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatFact } from '../../redux/actions';
import styles from './catFact.module.css'

const CatFact = () => {
   const dispatch = useDispatch();
   const { catFact, loading, error } = useSelector((state) => state);

   useEffect(() => {
      dispatch(fetchCatFact());
   }, [dispatch]);

   return (
      <div className={styles.cat_fact_container}>
         <h1 className={styles.cat_fact_title}>🐱 Random Cat Fact 🐱</h1>
         {loading && <p>Loading... 😺</p>}
         {error && <p>Oops! Something went wrong... 🙀</p>}
         {catFact && <p className={styles.cat_fact}>{catFact}</p>}
         <button className={styles.new_fact_button} onClick={() => dispatch(fetchCatFact())}>
            Get Another Fact
         </button>
      </div>
   );
};

export default CatFact;
