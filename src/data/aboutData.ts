import school from '../assets/School Image.jpg'
import visionImg from '../assets/School Vision.jpg'
import missionImg from '../assets/Mission.jpg'

interface IAboutSection {
    id: number;
    title: string;
    description: string;
    image: string;
    reverse: boolean;
}

export const Abouts: IAboutSection[] = [
    {
        id: 1,
        title: "Buddha English Boarding School",
        description: "Established in 2056 B.S., Buddha English Boarding School is a pioneering institution that offers innovative opportunities within a highly academic environment. Our objective is to provide value-based, quality education while prioritizing the personal and professional growth of our students through experienced faculty and modern teaching practices.",
        image: school,
        reverse: false
    },
    {
        id: 2,
        title: "Our Vision",
        description: "Buddha English Boarding School offers a comprehensive educational experience that enhances both practical and theoretical abilities of students, and provides an outstanding opportunity for making a positive impact on the world. It is a place where those who strive for excellence and constantly seek improvement can find ample opportunities to achieve their goals. We firmly believe in the potential of our students and are committed to providing them with the resources and support needed to realize their dreams and aspirations.",
        image: visionImg,
        reverse: true
    },
    {
        id: 3,
        title: "Our Mission",
        description: "The mission of Buddha English Boarding School is to empower students to become successful global citizens. We achieve this by providing students with both theoretical and practical exposure in all areas of study, thereby fostering academic and practical excellence. Our institution values students as valuable assets and creates an environment that enables them to meet industry standards. Our ultimate objective is to encourage excellence, diversity, and engaged learning by providing a contemporary and accessible education.",
        image: missionImg,
        reverse: false
    },
    {
        id: 4,
        title: "Why Choose Us?",
        description:
            "Buddha English Boarding School provides a caring and disciplined learning environment where students receive quality education, strong moral values, and individual attention. We focus on academic excellence, practical learning, and overall personality development to help every child grow with confidence and succeed in the future.",
        image: missionImg,
        reverse: true
    }

];