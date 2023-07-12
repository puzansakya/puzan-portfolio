import "./App.css";

// COMPONENTS
import {ProjectsCompleted} from "./ProjectsCompleted.tsx";
import {WhoAmI} from "./WhoAmI.tsx";
import {Education} from "./Education.tsx";
import {PersonalInfo} from "./PersonalInfo.tsx";
import {Objective} from "./Objective.tsx";
import {AdditionalSkills} from "./AdditionalSkills.tsx";
import {WorkExperience2, WorkExperiences1} from "./WorkExperiences.tsx";
import {Repositories} from "./Repositories.tsx";
import {References} from "./References.tsx";
import {ProfessionalSummary} from "./ProfessionalSummary.tsx";
import {PageWrapper} from "./PageWrapper.tsx";

export const Template = () => {
    return (
        <>
            <PageWrapper>
                <WhoAmI/>
                <Objective/>
                <Education/>
                <PersonalInfo/>
            </PageWrapper>

            <PageWrapper>
                {/*<SkillsAndAbilities/>*/}
                <ProfessionalSummary/>
                <AdditionalSkills/>
            </PageWrapper>

            <WorkExperiences1/>

            <PageWrapper>
                <WorkExperience2 />
                <ProjectsCompleted/>
                <Repositories/>
                <References/>
            </PageWrapper>

        </>
    );
};

function App() {
    return (
        <div className="max-w-screen-md mx-auto ">
            <Template/>
        </div>
    );
}

export default App;
