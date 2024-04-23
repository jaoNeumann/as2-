import { SectionTitle } from "../SectionTitle/section-title"
import "./information.css"

interface InfoProps{
    
}
export function Info(proprs: InfoProps) {
    return(
        <div className="infos">

            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>EN-🇺🇸 - Advanced</span>
                <span>PT-🇧🇷 - Native Speaker</span>
            </div>

            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>🎓 </span>
                <span> Information Systems Bachelors Degree - Universidade Positivo</span>
            </div>
      </div>
    )
}