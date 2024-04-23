import { SectionTitle } from "../SectionTitle/section-title"
import "./experience.css"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>1 year working as technical support</p>
            <div className="experience-time"></div>
        </div>    
    )
}