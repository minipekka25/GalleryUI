import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import BreadCrumbs from '../components/BreadCrumbs';
import Header from "../components/Header"
import Layout from "../components/layouts"
import styles from "./Albums.module.css"

interface Album {
  userId: number;
  id: number;
  title: string;
}

function AlbumList() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [userId, setUserId] = useState<number>(1);

  const router = useRouter()

  useEffect(() => {
    if(router.isReady){
        setUserId(Number(router.query.userId))
        axios
        .get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${router.query.userId}`)
        .then((response) => {
          setAlbums(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
  }, [router.isReady]);

  const PadNumber = (num: number): string => {
    const normalized = num + 1
    if(normalized < 10) {
      return "0" + normalized 
    }else{
      return normalized.toString();
    }
  }

  const handleNavigation = (albumId: number) => {
    router.push(`/photos?userId=${userId}&albumId=${albumId}`)
  }

  return (
    <Layout>
      <div>
        <BreadCrumbs 
            crumbs={[
                {text:"Home",uri:"/"},
                {text:`User ${userId}`,uri:`/albums?userId${userId}`},
            ]}
        />
        <Header 
          DetailName = {"Total Albums"}
          DetailVal = {albums.length}
        />
        <div className={styles.AlbumItemsContainer}>
          {albums.map((album: Album, idx: number) => (
            <div className={styles.AlbumItem} key={album.id} onClick={()=>handleNavigation(album.id)}>
              <div>
                  <div className={styles.AlbumItemNum}>{PadNumber(album.id - 1)}</div>
                  <div className={styles.AlbumItemName}>{album.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default AlbumList;
