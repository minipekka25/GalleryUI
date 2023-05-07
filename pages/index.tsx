import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './UserList.module.css';
import Layout from "../components/layouts.tsx"
import BreadCrumbs from '../components/BreadCrumbs.tsx';
import Header from "../components/Header.tsx"

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function UserList(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const padNumber = (num: number): string => {
    const normalized = num + 1;
    if(normalized < 10) {
      return "0" + normalized;
    } else {
      return normalized.toString();
    }
  }

  const handleNavigation = (userId: number): void => {
    router.push(`/albums?userId=${userId}`);
  }

  return (
    <Layout>
      <div>
      <BreadCrumbs 
            crumbs={[
                {text:"Home",uri:""}
            ]}
        />
        <Header 
          DetailName = {"Total Users"}
          DetailVal = {users.length}
        />
      
      <div className={styles.UserListContainer}>
        <div className={styles.UserItemsContainer}>
          {users.map((user: User, idx: number) => (
            <div key={user.id} className={styles.UserItem} onClick={()=>handleNavigation(user.id)}>
              <div className={styles.UserItemNum}>{padNumber(idx)}</div>
              <div className={styles.UserItemUserName}>{user.username}</div>
              <div className={styles.UserItemName}>{user.name}</div>
              <div className={styles.UserItemEmail}>{user.email}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default UserList;