import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../components/Header"
import Layout from "../components/layouts"
import styles from "./Photos.module.css"
import BreadCrumbs from '../components/BreadCrumbs';
import { useSelector, useDispatch } from 'react-redux';
import { setPhotos, setUserId, setAlbumId } from '../redux/photosSlice';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function PhotosList(): JSX.Element {

  const photos = useSelector((state:any) => state.photo.photos);
  const userId = useSelector((state:any) => state.photo.userId);
  const albumId = useSelector((state:any) => state.photo.albumId);
  const dispatch = useDispatch();

  const router = useRouter()

  useEffect(() => {
    if(router.isReady){
        dispatch(setUserId(Number(router.query.userId)));
        dispatch(setAlbumId(Number(router.query.albumId)));
        axios
        .get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${router.query.albumId}`)
        .then((response) => {
          dispatch(setPhotos(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
  }, [router.isReady, router.query.albumId]);

  return (
    <Layout>
    <div>
        <BreadCrumbs 
        crumbs={[
            {text:"Home",uri:"/"},
            {text:`User ${userId}`,uri:`/albums?userId=${userId}`},
            {text:`Album ${albumId}`,uri:""}
            ]}></BreadCrumbs>
      <Header 
      DetailName = {"Total Photos"}
      DetailVal = {photos.length}
      />
      <div className={styles.PhotosItemsContainer}>
        {photos.map((photo: Photo, idx: number) => (
        <div className={styles.PhotoItem} key={idx}>     
            <img src={photo.thumbnailUrl} className={styles.PhotoThumb}/>
            <div className={styles.PhotoName}>{photo.title}</div>
        </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default PhotosList;
