import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Header from "../components/Header"
import Layout from "../components/layouts"
import styles from "./Photos.module.css"
import BreadCrumbs from '../components/BreadCrumbs';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function PhotosList() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [userId, setUserId] = useState<string | string[]>([]);
  const [albumId, setAlbumId] = useState<string | string[]>([]);

  const router = useRouter()

  useEffect(() => {
    if(router.isReady){
        setUserId(router.query.userId as string);
        setAlbumId(router.query.albumId as string);
        axios
        .get<Photo[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${router.query.albumId}`)
        .then((response) => {
            setPhotos(response.data);
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
        {photos.map((photo,idx) => (
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
