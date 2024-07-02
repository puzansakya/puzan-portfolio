import dayjs from "dayjs";

export const Experience = () => {
        const experiences = [
            {
                company: "Rigo Technologies",
                position: "Senior Software Engineer",
                from: "2021-06-21",
                to: "",
                description: "Working as a frontend lead to develop and maintain enterprise resouce planning and human resource management software, Includes technology stack like react, redux"
            },
            {
                company: "Smart Data Solutions",
                position: "Senior Full Stack Developer",
                from: "2020-12-20",
                to: "2022-02-01",
                description: "Worked as full stack developer. Developed and maintained a claim portal application to manage insurance claims for us based cosumer gorups, Includes technology stack like angular js, java, spring boot, mysql, selenium, queryDSL, JPA and hibernate"
            },
            {
                company: "Cloudtai/Clinis PVT LTD",
                position: "Senior Angular Developer",
                from: "2019-04-20",
                to: "2020-03-30",
                description: "Worked as angular developer for Australian based company. Developed and maintained a health portal application application that deals with image scanning and upload the medical documents, Includes technology stack like angular, scss, ngrx, .net, postgresql"
            },
            {
                company: "ESC PVT LTD",
                position: "Full Stack Developer",
                from: "2018-02-29",
                to: "2019-03-30",
                description: "Worked as full stack developer. Maintained govenment portal site application like (https://www.bolpatra.gov.np/egp/). Developed and maintained a erp apps as well for private construction clients, Includes technology stack like react, java, spring boot, mysql"
            },
            {
                company: "Waqt Nepal",
                position: "Node js Developer",
                from: "2017-01-01",
                to: "",
                description: "Started as a pet project with friend, worked as backend node js developer. Create apis to be consumed by andriod and ios mobile client, Includes technology stack like typescript, node, mysql, nginx"
            },
        ]

    return <div id="sgl5RoIW1e2Hzs5_y9ywg" className="mx-auto max-w-screen-lg sm:px-5 sm:py-24 xl:px-0 px-5 py-24">
        <h1 id="b_BzKvGaBH29CxOBZyC2D" className="font-bold text-4xl">Experience</h1>
        <div id="N9OA8JPop77RNSw-JubzX" className="flex mt-14 md:flex-row md:gap-10 flex-col gap-5">
            <p id="U7EPRcT3asIdP520hCQzP" className="sm:w-full">Career Journey till date</p>
        </div>

        <div id="KM_O79ma_t8hXPj0A-enw" className="flex mt-12 md:flex-row md:items-center md:gap-10 gap-5 flex-col">
                <ol className="relative border-s border-gray-200 dark:border-gray-500">
                    {experiences.map((e:any, index: number) => {
                        return <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-amber-100"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">{dayjs(e.from).format("MMM YYYY")} - {e.to ? dayjs(e.to).format("MMM YYYY"): "present"}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{e.company}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                                {e.description}
                            </p>
                        </li>
                    })}

                </ol>
        </div>
    </div>
}