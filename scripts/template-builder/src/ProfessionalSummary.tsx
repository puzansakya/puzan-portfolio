import { ListItem } from "./components/list-item"

export const ProfessionalSummary = () => {
    return <div className="py-4">
        <h1 className="font-medium text-lg">Professional Summary</h1>
        <ul>
            {[
                "Familiar with software development methodologies like SDLC, agile, scrum.",
                "Proficient on frontend technologies like vanilla javascript, React, Storybook, Angular, HTML, CSS, state management tools (zustand, signal, redux, ngrx).",
                "Proficient on backend javascript technologies like knex, express, mongoose.",
                "Java Application Development - spring, spring boot, hibernate, jpa, queryDSL etc.",
                "Distributed Application Development.",
                "Object-Oriented Programming (OOP).",
                "Experienced in using various design patterns such as MVC (Model-View-Controller) in the development of Multi-Tier Distributed Applications, Feature sliced design etc.",
                "Able to write SQL Queries.",
                "Able to work with databases like POSTGRES, MySql, MongoDB, SQLite.",
                "Able to use version control tools like Git.",
                "Strong initiation, teamwork, responsible, and profound communication skills.",
                "Able to bootstrap projects from scratch using vite, webpack, turobrepo, nx etc.",
                "Integration of real-time notification system with Firebase.",
                "Configure GitLab, Github actions and Docker containers for continuous integration and deployment.",
                "Able to write test using Mocha - chai, vitest, selenium, cypress.",
            ].map(content => <ListItem content={content} />)}


        </ul>
    </div >
}