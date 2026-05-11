import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: "Latest Electronics",
    desc: "Shop the best electronics at amazing prices!",
    bg: "bg-blue-600",
    emoji: "🎧"
  },
  {
    id: 2,
    title: "Fashion Collection",
    desc: "Discover the newest fashion trends!",
    bg: "bg-purple-600",
    emoji: "👗"
  },
  {
    id: 3,
    title: "Special Offers",
    desc: "Up to 50% off on selected items!",
    bg: "bg-green-600",
    emoji: "🛍️"
  },
]

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full"
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className={`${slide.bg} text-white flex flex-col justify-center 
            items-center h-64 text-center px-8`}>
            <span className="text-6xl mb-4">{slide.emoji}</span>
            <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg opacity-80">{slide.desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider