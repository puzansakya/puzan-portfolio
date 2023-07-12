import {PageWrapper} from "./PageWrapper.tsx";

export const WorkExperiences1 = () => {
    return <>
        <PageWrapper>
            <div className="py-5 space-y-5">
                <h1 className="font-medium text-lg">Work Experiences:</h1>
                <div>
                    <p className="underline">Rigo Technologies | Senior software Engineer</p>
                    <p className="italic">Date: 2021 June&ndash; present</p>
                    <p className="italic font-medium">Human resource (HR) | Frontend Lead</p>
                    <ul>
                        <li>- Maintain design systems.</li>
                        <li>- Write and maintain cypress test</li>
                        <li>- Converted monolithic react app to mono repo architecture using NX</li>
                        <li>- Maintain internal tooling scripts</li>
                        <li>- Oversee and optimize overall application</li>
                    </ul>

                    <p className="italic font-medium">Enterprise Resource Planning(ERP) | Frontend Lead</p>
                    <ul>
                        <li>- Maintain design systems.</li>
                        <li>- Write and maintain cypress test</li>
                        <li>- Converted monolithic react app to mono repo architecture (Yarn workspace/lerna)</li>
                        <li>- Maintain internal tooling scripts</li>
                        <li>- Oversee and optimize overall application</li>
                        <li>- Create and maintain form heavy components</li>
                        <li>- Maintain table and data-grids</li>
                    </ul>

                </div>
                <div>
                    <p className="underline">Smart Data Solution | Senior Full-stack Engineer</p>
                    <p className="italic">Date: 2020 December &ndash; 2022 January</p>
                    <p className="italic">Description: Worked on tech-stack including java and angular
                        JS.</p>
                </div>
                <div>
                    <p className="underline">Freelancing | Freelance developer</p>
                    <p className="italic">Date: 2020 march - present</p>
                    <p className="italic">Description: Worked as backend developer to node and typescript
                        and elastic search for the contract based vet project.</p>
                </div>
                <div>
                    <p className="underline">Clinis technology | Associate Software Developer</p>
                    <p className="italic">Date: 2019 June &ndash; 2020 March</p>
                    <p className="italic">Description: Worked on Australian project on medical data as
                        frontend technologies involving angular and typescript.</p>
                </div>
                <div>
                    <p className="underline">Esc PVT LTD | Associate Software Developer</p>
                    <p className="italic">Date: 2018 Jan &ndash; 2019 June</p>
                    <p className="italic">Description: Worked on government project on java stacks.
                        Completed projects of react and java stack as well.</p>
                </div>
            </div>
        </PageWrapper>

    </>

}

export const WorkExperience2 = () => {
    return <div className="py-5 space-y-5">

        <div>
            <p className="underline">Dnarzu Production | Backend developer</p>
            <p className="italic">Date: 2017 May &ndash; present</p>
            <p className="italic">Description: Worked as backend developer to developer API using
                node and typescript for the WAQT Nepal android application</p>
        </div>
        <div>
            <p className="underline">Leapfrog academy | Trainee</p>
            <p className="italic">Date: 2017 Jan &ndash; 2018 Jan</p>
            <p className="italic">Description: I worked as a trainee in Leapfrog academy on spring,
                hibernate, java core and Java stacks.</p>
        </div>
    </div>
}