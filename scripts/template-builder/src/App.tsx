import "./App.css";

// COMPONENTS
import {ProjectsCompleted} from "./ProjectsCompleted";
import {WhoAmI} from "./WhoAmI";
import {Education} from "./Education";
import {PersonalInfo} from "./PersonalInfo";
import {Objective} from "./Objective";
import {AdditionalSkills} from "./AdditionalSkills";
import {WorkExperience2, WorkExperiences1} from "./WorkExperiences";
import {Repositories} from "./Repositories";
import {References} from "./References";
import {ProfessionalSummary} from "./ProfessionalSummary";
import {PageWrapper} from "./PageWrapper";

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
