import { ListItem } from "./components/list-item"

export const ProjectsCompleted = () => {
    return <div className="py-4 flex flex-col gap-3">
        <div>
            <h1 className="font-medium text-lg">Projects Completed/Involved</h1>
            <ul>
                {[
                    "Rigo ERP",
                    "Rigo HRMS",
                    "Benequick - claims portal",
                    "Document Imaging system",
                    "Enterprise CMS for construction companies",
                ].map((content, index) => <ListItem key={`project-completed-${index}`} content={content} />)}

                <li className="flex gap-2"><p>-</p>
                    <p>
                        Medium Clone (<a href="https://github.com/sanskarsakya/bp_ci">https://github.com/puzansakya/bp_ci</a>)
                    </p>
                </li>
            </ul>
        </div>

        <div>
            <h1 className="font-medium text-lg">Side project in production:</h1>
            <ul>
                <ListItem>Zenwind Studio (<a href="http://zenwind.io">tailwind site builder</a>)</ListItem>
                <ListItem><a href="https://puzansakya.com.np">puzansakya.com.np</a> <a href="https://github.com/puzansakya/puzan-portfolio">- repo</a></ListItem>
                <ListItem>Waqt Android app</ListItem>
            </ul>
        </div>

        <div>
            <h1 className="font-medium text-lg">Npm Packages:</h1>
            <ul>
                <ListItem><a href="https://www.npmjs.com/package/nepali-dayjs-date-converter">nepali-dayjs-date-converter</a> <a href="https://github.com/puzansakya/nepali-date-monorepo">- repo</a></ListItem>
                <ListItem><a href="https://www.npmjs.com/package/nepali-react-datepicker">nepali-react-datepicker</a> <a href="https://github.com/puzansakya/nepali-date-monorepo">- repo</a></ListItem>
            </ul>
        </div>
    </div>
}