import { ListItem } from "./components/list-item"

export const AdditionalSkills = () => {
    return <div className="py-4">
        <h1 className="font-medium text-lg">Additional Skills</h1>
        <ul>
            {[
                "Knowledge on PHP based framework Laravel.",
                "Android mobile application development.",
                "Workshop / Training.",
                "Little bit of rust and wasm.",
            ].map((content, index) => <ListItem key={`additional-skills-${index}`} content={content} />)}
        </ul>
    </div>
}