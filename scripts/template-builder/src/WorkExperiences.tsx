import { ListItem } from "./components/list-item";
import { PageWrapper } from "./PageWrapper";

export const WorkExperiences1 = () => {
    return <PageWrapper>
        <div className="py-4">
            <h1 className="font-medium text-lg">Work Experiences</h1>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <div>
                        <p className="underline">Rigo Technologies | Senior software Engineer | Tech Lead - Frontend </p>
                        <p className="italic">Date: 2021 June&ndash; present</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div>
                            <p className="italic text-sm font-medium">Human resource (HR)</p>
                            <ul>
                                {[
                                    "Maintain design systems.",
                                    "Write and maintain cypress test.",
                                    "Converted monolithic react app to mono repo architecture using NX",
                                    "Maintain internal tooling scripts",
                                    "Oversee and optimize overall application",
                                ].map((content, index) => {
                                    return <ListItem key={`work-experience-1-hr-${index}`} content={content} />;
                                })}
                            </ul>
                        </div>

                        <div>
                            <p className="italic text-sm font-medium">Enterprise Resource Planning(ERP)</p>
                            <ul>
                                {[
                                    "Maintain design systems.",
                                    "Write and maintain cypress test.",
                                    "Converted monolithic react app to mono repo architecture (Yarn workspace/lerna), now turborepo",
                                    "Maintain internal tooling scripts",
                                    "Oversee and optimize overall application",
                                    "Create and maintain form heavy components",
                                    "Maintain table and data-grids",
                                ].map((content, index) => {
                                    return <ListItem key={`work-experience-1-erp-${index}`} content={content} />;
                                })}
                            </ul>
                        </div>
                    </div>
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
        </div>
    </PageWrapper>
}

export const WorkExperience2 = () => {
    return <div className="py-4">
        <h1 className="font-medium text-lg">Work Experience </h1>
        <div className="flex flex-col gap-3">

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
    </div>
}