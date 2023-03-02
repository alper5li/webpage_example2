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
                            <div className="card h-100 shadow backgr">
                                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                    <a href={`/posts/${item.id}`}>
                                    <img className="rounded img-fluid maxOptimization" src={item.image} alt="" height={200} width={200} />
                                    </a>
                                    <h5 className="card-title sehir ">{item.name}</h5>
                                    <p className="card-text sehir">{item.city}</p>
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
