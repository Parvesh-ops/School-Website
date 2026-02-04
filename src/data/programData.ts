import nurseryImg from '../assets/nurseryImg.jpg';
import scienceImg from '../assets/scienceImg.jpg';
import commerceImg from '../assets/commerceImg.jpg';
import hotelImg from '../assets/hotelImg.jpg'

interface IProgram {
    id: number;
    program: string;
    title: string;
    description: string;
    image: string;
    reverse: boolean
}


export const programs: IProgram[] = [
    {
        id: 1,
        program: "Education Programs",
        title: "Nursery to Class 10",
        description: "We provide a nurturing and supportive environment for young learners, focusing on foundational knowledge, creativity, and holistic development from Nursery to Class 10. Our curriculum emphasizes critical thinking, interactive learning, and character building to ensure students develop strong core competencies. Students are encouraged to explore their interests in arts, sports, and technology alongside academics, fostering well-rounded growth. We aim to build confident, responsible, and well-rounded individuals ready for higher education and life challenges.",
        image: nurseryImg,
        reverse: false,
    },
    {
        id: 2,
        program: "Education Programs",
        title: "+2 Science",
        description: "Advanced Science curriculum designed to prepare students for higher education in engineering, medical, and other science-related fields with practical labs and expert faculty. The program emphasizes hands-on experiments and laboratory work to enhance analytical skills and deepen understanding of scientific concepts. Students are guided by experienced teachers who employ modern teaching methodologies to build strong problem-solving abilities. We aim to inspire curiosity, foster scientific temperament, and prepare students for competitive exams and scientific research opportunities.",
        image: scienceImg,
        reverse: true,
    },
    {
        id: 3,
        program: "Education Programs",
        title: "+2 Commerce",
        description: "Commerce stream focused on accounting, economics, and business studies, preparing students for professional courses and future career opportunities in the business world. The curriculum integrates practical projects, case studies, and internships to build real-world skills and industry exposure. Students develop financial literacy, business acumen, and strategic thinking through interactive classroom sessions and business simulations. We aim to nurture competent professionals ready to excel in commerce, finance, management, and entrepreneurship.",
        image: commerceImg,
        reverse: false,
    },
    {
        id: 4,
        program: "Education Programs",
        title: "+2 Hotel Management",
        description: "Hospitality and Hotel Management program offering practical skills, industry knowledge, and internships to groom future professionals in the hospitality sector. Students learn customer service excellence, front office operations, culinary arts, and hotel administration through comprehensive training modules. The program provides extensive exposure to real hotel environments through industry tie-ups and on-site training at premier hospitality establishments. Our goal is to develop skilled, confident, and professional individuals ready to thrive in the fast-paced and dynamic hospitality industry.",
        image: hotelImg,
        reverse: true,
    },
];