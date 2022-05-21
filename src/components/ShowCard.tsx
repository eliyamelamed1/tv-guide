import { ListOfShowsType } from '../utils/endpoints';
import Rating from '@mui/material/Rating';
import React from 'react';
import styles from '../styles/components/ShowCard.module.scss';

const ShowCard: React.FC<{ show: ListOfShowsType }> = ({ show }) => {
    const rating = show?.rating?.average;
    return (
        <div className={styles.container}>
            <img src={show?.image?.medium} alt='Show' className={styles.image} />
            <div className={styles.middle}>
                <h2 className={styles.text}>{show?.name}</h2>
                <Rating value={(rating && rating / 2) || null} readOnly className={styles.rating} precision={0.5} />
            </div>
        </div>
    );
};

export default ShowCard;
