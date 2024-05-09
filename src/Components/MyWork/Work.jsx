import { useNavigate, useParams } from 'react-router-dom'
import mywork_data from '../../assets/mywork_data'
import './Work.css'


export default function Work() {

    const { id } = useParams();
    const project = mywork_data[id]
    const navigate = useNavigate();

    return (
        <div style={{ color: "white" }} className='project'>

            <div className='project-banner'>

                <a href={project.address}>{project.w_name}</a>
                <button className='back' onClick={() => navigate(-1)}>back</button>

            </div>
            <a href={project.address}><img src={project.img} alt={project.img} /></a>
            <p><b>SKILLS : </b>{project.skills}</p>

        </div>
    )
}
