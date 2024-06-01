import FavFcon from './fav-icon'
import styles from '@/styles/user/user-favorite.module.css'
import { IoMdTrash } from 'react-icons/io'
import { favs } from '@/pages/pets/index'

export default function petCard({ addFav = () => {} }) {
  return (
    <div>
      {pets.map((v, i) => {
        return (
          <Link href={`/pets/${v.pet_id}`}>
            <div className={styles['card']}>
              <div className={styles['card-img']}>
                <p className={styles['state']} key={v.pet_id}>
                  {v.state}
                </p>
                <img
                  key={v.pet_id}
                  src={`/img/pet-info/${v.phone1}.jpg`}
                  alt=""
                />
                <FaHeart
                  className={styles['favorite']}
                  onClick={() => {
                    addFav(v)
                  }}
                />
              </div>
              <div className={styles['pet-name']}>
                <span key={v.pet_id}>{v.tag}</span>
                <p key={v.pet_id}>{v.name}</p>
                <div className={styles['pet-desc']}>
                  <span key={v.pet_id}>今年約莫 {v.age}歲</span>
                  {v.gender === '男生' ? (
                    <img
                      src="/img/pets/icon_boy.png"
                      alt=""
                      draggable="false"
                    />
                  ) : (
                    <img
                      src="/img/pets/icon_girl.png"
                      alt=""
                      draggable="false"
                    />
                  )}
                </div>
              </div>
            </div>
          </Link>
        )
      })}

      <div className={styles['pet-card']}>
        <img src={`/img/pet-info/10001-1.jpg`} alt="" />
        <div className={styles['card-desc']}>
          <p>小飛機</p>
          <span>66 歲</span>
          <div>
            <span>12 KG</span>
            {/* {v.gender === '男生' ? ( */}
            <img src="/img/pets/icon_boy.png" alt="" draggable="false" />
            {/* ) : (
            <img src="/img/pets/icon_girl.png" alt="" draggable="false" />
            )} */}
            <IoMdTrash className={styles['trash-icon']} />
          </div>
          {/* <Link href={`/pets/${v.pet_id}`}> */}
          <button className={styles['cta']}>
            <span className={styles['hover-underline-animation']}>
              {' '}
              前往頁面{' '}
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
