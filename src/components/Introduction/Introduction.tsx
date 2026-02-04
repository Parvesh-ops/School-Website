import Stats from "../Stats/Stats"


const Introduction = () => {
    return (
        <section className="py-6 mt-3 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    <span className="text-blue-600">Introduction</span>
                </h2>

                {/*Description */}
                <p className="mt-4 text-sm text-black  text-center leading-7  mx-auto ">
                    Buddha English Boarding School provides quality education from <strong>Nursery to Grade 12</strong>,
                    offering higher secondary programs in <strong>Science, Hotel Management (HM),
                        and Commerce</strong>. We focus on academic excellence, discipline, and overall
                    student development in a caring learning environment.
                    We focus on creating a disciplined, caring, and student-friendly learning
                    environment where learners are guided by experienced teachers and modern
                    teaching methods. Our classrooms, laboratories, and learning facilities are
                    designed to support both theoretical knowledge and practical skills.
                </p>

            </div>
            {/* <div className="w-auto  mx-auto h-auto p-4 flex items-center flex-wrap justify-center gap-10 ">
                <div className="flex min-w-50 py-2 dark:bg-card px-8 items-center  rounded shadow-2xl border cursor-pointer  transition duration-300 ease-in  hover:-translate-1 hover:shadow-2xl"><span className="mr-1 dark:text-white font-medium">500+</span><span className="mr-1 dark:text-white font-medium">Students</span></div>
                <div className="flex min-w-50 py-2 dark:bg-card px-8 items-center  rounded shadow-2xl border cursor-pointer  transition duration-300 ease-in  hover:-translate-1 hover:shadow-2xl"><span className="mr-1 dark:text-white font-medium">100%</span><span className="mr-1 dark:text-white font-medium">Results</span></div>
                <div className="flex min-w-50 py-2 dark:bg-card px-8 items-center  rounded shadow-2xl border cursor-pointer  transition duration-300 ease-in  hover:-translate-1 hover:shadow-2xl"><span className="mr-1 dark:text-white font-medium">100%</span><span className="mr-1 dark:text-white font-medium">Services</span></div>
            </div> */}
            <Stats />
        </section>
    )
}

export default Introduction
