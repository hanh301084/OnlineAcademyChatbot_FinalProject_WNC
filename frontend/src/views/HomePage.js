import React from 'react'
import '../index.css'
import LCourse from '../components/LCourse'
import LCategory from '../components/LCategory'
import Header from '../components/header'

const dbcoursesList = [
  {
    id: 1,
    img:
      'https://img-c.udemycdn.com/course/240x135/2281794_46a6_19.jpg?Expires=1622985714&Signature=XrgNSyfIJsWPU8v-Glx9CkvakRCwBDlEJZgTl6PMGDEDGl6iCPLYzngQZrvYkgNRZp8H62HtcrTbY~0d9S0XgSgIRQadJIcUSP1SGp5HLf6hAyjl7J6GVUHd6-dOsUSo-RyRD60AWy1aw1Uvr1FGw47dvksCiLJoG5~xegvZhaV7Z~b0qwghzDQYCDJlFKyYCrhOZUwAUw07vBsqtrsfWSoXfZuapbixLwdNbkPKek4qB3Q1aOfeTGkqNJJTv-aKULg7NEmLStrgHc7qWckCNZEnYenXor9HBkpHsSfX3ynfhsxYw0MtRRvaeK8i2euAB-aO5HIge-ZU4o9rluIHJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    title: 'title',
    category: 'category',
    teacher: 'teacher',
    evaluate: 5,
    amountEval: 320,
    price: 45,
  },
  {
    id: 2,
    img:
      'https://img-c.udemycdn.com/course/240x135/2281794_46a6_19.jpg?Expires=1622985714&Signature=XrgNSyfIJsWPU8v-Glx9CkvakRCwBDlEJZgTl6PMGDEDGl6iCPLYzngQZrvYkgNRZp8H62HtcrTbY~0d9S0XgSgIRQadJIcUSP1SGp5HLf6hAyjl7J6GVUHd6-dOsUSo-RyRD60AWy1aw1Uvr1FGw47dvksCiLJoG5~xegvZhaV7Z~b0qwghzDQYCDJlFKyYCrhOZUwAUw07vBsqtrsfWSoXfZuapbixLwdNbkPKek4qB3Q1aOfeTGkqNJJTv-aKULg7NEmLStrgHc7qWckCNZEnYenXor9HBkpHsSfX3ynfhsxYw0MtRRvaeK8i2euAB-aO5HIge-ZU4o9rluIHJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A',
    title: 'title',
    category: 'category',
    teacher: 'teacher',
    evaluate: 5,
    amountEval: 320,
    price: 45,
  },
]

const dbcategoriesList = [
  {
    id: 1,
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg',
    title: 'title',
    amount: 50,
  },
  {
    id: 2,
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg',
    title: 'title',
    amount: 50,
  },
]
export default function HomePage() {
  return (
    <div>
      <Header />

      <section style={{ padding: '0', margin: '0', width: '100%' }}>
        <div
          style={{
            backgroundImage:
              'url(https://img-c.udemycdn.com/notices/home_banner/image_udlite/8a5d045c-2dd2-4a4d-bb0e-a487af8a5aa0.jpg?Expires=1622999931&Signature=hew4JofBiJ9teHvMxGmRHwUHckGVWjH~msg1~rymuVmOIFF~kS6uFEKy8ewUUHUFWGTPe-2rklvogQIwnamAos21Ui5aY1FLxrY0JZgA-ar43mJ~~~ZBQb9Ys~QxfQxFNRUePjcLcoxYZYA52B439Qbac-Xs3FJcWIyx01~5ucpFUw8pJyYZ-9ksj~S~IFGjjf10q9AtTCztSYsgihDNxH0-8aueY9BSSl8EuVpD9P0PIhrlWF1ElH7bmsbcXzYq4n-0pEXaqavLbWfbGGvdKcIkYE1eeO1d2X5ndDz-5cwG7XQAEZb2tVvpDUFC1z8otC3DpfGcUc1CwqiiEZFFqw__&Key-Pair-Id=APKAITJV77WS5ZT7262A)',
            width: '100%',
            height: '400px',
            display: 'flex',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              height: '252px',
              width: '392px',
              fontFamily: 'Courier New',
              marginTop: '6.5rem',
              marginLeft: '4.5rem',
              padding: '24px',
            }}
          >
            <h1 style={{ fontSize: '2.6rem' }}>Theo ??u???i ?????c m?? c???a b???n</h1>
            <br></br>
            <p style={{ fontSize: '1.3rem' }}>
              H??y t??? do theo ??u???i tham v???ng c???a b???n.
              <br></br>
              Ph??t tri???n c??c k??? n??ng c???a ng??y mai ????? ?????t ???????c m???c ti??u ngh???
              nghi???p c???a b???n.
            </p>
          </div>
        </div>
      </section>

      <LCourse title="Kh??a h???c n???i b???t nh???t tu???n qua" List={dbcoursesList} />
      <LCourse title="Kh??a h???c ???????c xem nhi???u nh???t" List={dbcoursesList} />
      <LCourse title="Kh??a h???c m???i nh???t" List={dbcoursesList} />
      <LCategory
        title="L??nh v???c ???????c ????ng k?? h???c nhi???u nh???t trong tu???n qua"
        List={dbcategoriesList}
      />
    </div>
  )
}
