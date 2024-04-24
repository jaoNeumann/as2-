import { SectionTitle } from "../SectionTitle/section-title"
import Image from "next/image"
import "./experience.css"

export function Experience(){
    return(
        <div className="experience">
            <SectionTitle text="Experience"/>
            <p>1 year working as technical support</p>
            <div className="experience-time">
                <div>
                    <div className="experience-language">
                        <Image
                            src="/react.png"
                            alt="React logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-2">
                                <span>2 years</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-language">   
                        <Image
                            src="/ts.png"
                            alt="Typescript logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-1">
                                <span>1 year</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-language">
                        <Image
                            src="/java.png"
                            alt="Java logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-1">
                                <span>1 year</span>
                            </div>
                        </div>
                    </div>
                    <div className="experience-language">
                        <Image
                            src="/js.png"
                            alt="Javascript logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="experience-unit">
                            <div className="experience-measure measure-3">
                                <span>3 years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}