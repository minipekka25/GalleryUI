import React, { ReactNode } from 'react';
import styles from './layouts.module.css';

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.LeftContainer}>
        <div className={styles.LeftFlex}>
          <div className={styles.LeftTopItemContainer}>
            <div className={styles.LeftTopItemTitle}>Creator :</div>
            <div>
              <div className={styles.LeftTopItemName}>Gowri Shankar S</div>
              <div className={styles.LeftTopItemSub}>
                Willing to create something similar Together!
              </div>
            </div>
          </div>

          <div className={styles.LeftBottomItemContainer}>
            <div className={styles.LeftBottomItemTitle}>{'{ 001 }'}</div>
            <div>
              <div className={styles.LeftBottomItemPage}>{'{ Home }'}</div>
              <div>
                <div className={styles.LeftBottomItemSubTop}>
                  Your Moments
                </div>
                <div className={styles.LeftBottomItemSubBottom}>
                  Your album
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.MiddleContainer}>
        <div className={styles.MiddlePhoneContainer}>
          <div className={styles.MiddlePhoneInternalContainer}>
            {props.children}
          </div>
        </div>
      </div>

      <div className={styles.RightContainer}>
        <div className={styles.RightFlex}>
          <div className={styles.RightTopItemContainer}>
            <div className={styles.RightTopItemTitle}>Task :</div>
            <div>
              <div className={styles.RightTopItemName}>Gallery UI</div>
              <div className={styles.RightTopItemSub}>
                Every user has their own albums and on selecting the album they
                should be able to see the photos inside the album.
              </div>
            </div>
          </div>
          <div className={styles.RightBottomItemContainer}>
            <div className={styles.RightBottomItemTitle}>About</div>
            <div>
              <div className={styles.RightBottomItemDesc}>
                The right place to preserve your memories with ease
              </div>
              <div className={styles.RightBottomItemFeaturesFlex}>
                <div>Bookmarks</div>
                <div>Folders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
