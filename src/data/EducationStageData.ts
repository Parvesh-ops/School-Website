import higherEducation from '../assets/higher education.webp'
import nursery from '../assets/nurseryImg.jpg'
import primaryEducation from '../assets/commerceImg.jpg'

type Stage = {
  title: string
  description: string
  image: string
}

export const stages: Stage[] = [
  {
    title: "Higher Secondary / +2",
    description:
      "Higher Secondary education provides specialized learning in chosen streams to prepare students for future careers.",
    image: higherEducation  ,
  },
  {
    title: "Pre-Primary / Nursery",
    description:
      "Pre-Primary education focuses on developing social, emotional, and cognitive skills through playful learning.",
    image: nursery,
  },
  {
    title: "Primary Education",
    description:
      "Primary education builds the foundation for academic and personal growth through structured learning.",
    image: primaryEducation,
  },
]