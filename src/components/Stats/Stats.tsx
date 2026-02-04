import { stats } from "../../data/statsData"


const Stats = () => {
    return (
        <section className="py-10">
            <div className="
        max-w-2xl mx-auto px-2
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-8
      ">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="
              flex items-center justify-center gap-2
              px-7 py-1
              bg-white 
              border rounded-xl
              shadow-lg
              cursor-pointer
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-2xl
            "
                    >
                        <span className=" font-bold text-black">
                            {stat.value}
                        </span>
                        <span className="text-lg font-medium text-black">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
