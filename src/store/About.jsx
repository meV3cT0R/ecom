import { WhereAboutBar } from "./utility/Utility";
import { ABOUT } from "./constants";

const About = ()=>{ 
    const page = [{
        name: ABOUT,
        changeState: false
    }]
    return (
        <>
            <WhereAboutBar page={page} />
            <div className="px-10">
                <div className="max-w-[1170px] grid sm:grid-cols-2 gap-10 pb-20">
                    <div>
                        <img className="h-[500px] w-full" src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg"/>
                    </div>
                    <div>
                        <div className="mb-10">

                            <h1 className="text-5xl mb-5 font-bold">our story</h1>
                            <div className="h-[3px] w-[100px] bg-amber-700"></div>
                        </div>
                        <p className="text-gray-600 leading-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;