import "../css/bootstrap.css"
import data from '../data/blog.json'
import '../css/Cards.css'
export default function Cards() {
  return (
    <div className="container mt-4">
            <div className='row'>
                {
                    data.map((item) =>
                        <div key={item.id} className="col-md-4 mb-3">
                            <div className="card h-100 shadow">
                                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                    <img src={item.image} alt="" height={100} width={100} />
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.city}</p>
                                </div>
                                <div className="card-footer d-flex align-items-end bg-dark justify-content-center">
                                    <small className="text-date d-flex p-1">{item.date}</small>
                                    <small className="text-time d-flex p-1">{item.time}</small>
                                </div>
                            </div>
                        </div>                     
                    )
                }
            </div>
        </div>
  )
}
