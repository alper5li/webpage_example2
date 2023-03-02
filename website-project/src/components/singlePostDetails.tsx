import "../css/singlePostDetails.css";

export default function postJSX(data:any,id:any)
{

    // Array of index set
    id=id-1;
    
    // unique id == /yyyyy/dd/mm/[id]
    
    return (
        <div key={data[id].id} className="col-md-4 mb-r py-5 px-5 box" >
            <div className="card h-100 shadow">
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <img className="img-thumbnail" src={data[id].image} alt="" height={300} width={300} />
                    <h5 className="card-title">{data[id].name}</h5>
                    <p className="card-text">{data[id].city}</p>
                </div>

                <div className="card-footer d-flex align-items-end bg-dark justify-content-end">
                    <small className="text-time d-flex mr-auto p-2">ID : {data[id].uniqueID}</small>
                    <small className="text-date d-flex p-2">{data[id].date}</small>
                    <small className="text-time d-flex p-2">{data[id].time}</small>
                </div>
            </div>
            <div className="card h-100 shadow bg-dark">
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                    <p className="information">
                        {data[id].information}
                    </p>
                </div>
            </div>
        </div>
    );
}