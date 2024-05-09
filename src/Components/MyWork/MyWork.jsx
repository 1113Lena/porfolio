import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Worklist from './Worklist'

export default function MyWork() {




    return (
        <>
            <Navbar />
            <div className='mywork'>
                <div className="mywork-title">
                    <h1>My latest work</h1>
                    <img src={theme_pattern} alt="theme_pattern" />
                </div>
                <div className="mywork-container">
                    {mywork_data.map((work, index) => (
                        <Worklist key={work.id} work={work} />
                    ))}
                </div>
                <div className="mywork-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="arrow_icon" />
                </div>
            </div>
            <Footer />
        </>
    )
}
