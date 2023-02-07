import { Experience } from "../components/Experience"

export const Resume = () => {
    const histories = [
        {
            university: 'University of Victoria',
            year: '2014 - 2018',
            title: 'Bachelor of Science',
            content: 'Under the recommendation and Guidance of the Head Coach of the UVIC soccer team, I transferred to the University of Victoria. Here I took my Bachelors of Computer Science with a Software Engineering Specialty and achieved a much more thorough education in the underlying theory, concepts, and science behind more complex programming. It was here that I discovered my passion for scalable application programming (web and mobile), the security behind computer and application systems, and found that I have a knack for understanding complex algorithms.'
        },
        {
            university: 'Grande Prairie Regional College',
            year: '2011 - 2013',
            title: 'Bachelor of Science',
            content: 'I attended GPRC for my first 2 years of post-secondary on a scholarship for the college soccer team. While here, I studied Computer Systems Technology, a 2 year lead-in to a Bachelors of Computer Science. This was a very hands-on experience focused more on building projects than general theory. Here I built database structures for fictional companies, created small video games, hand-coded Space Invaders from scratch in Assembly Language, built and coded an Arduino Robot to navigate obstacle courses, a lot of Java and C++ programming for data structures, and much more.'
        }
    ];
    return (
        <>
            {
                histories.map((history, key) => 
                   <Experience key = {key} history={history} />
                )
            }
        </>
    )
}