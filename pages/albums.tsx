import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import BreadCrumbs from '../components/BreadCrumbs';
import Header from "../components/Header"
import Layout from "../components/layouts"
import styles from "./Albums.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { setAlbums, setUserId } from '../redux/albumsSlice';


interface Album {
  userId: number;
  id: number;
  title: string;
}

function AlbumList(): JSX.Element {

  const albums = useSelector((state:any) => state.album.albums);
  const userId = useSelector((state:any) => state.album.userId);
  const dispatch = useDispatch();

  const router = useRouter()

  useEffect(() => {
    if(router.isReady){
        dispatch(setUserId(Number(router.query.userId)));
        axios
        .get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${router.query.userId}`)
        .then((response) => {
          dispatch(setAlbums(response.data));
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
