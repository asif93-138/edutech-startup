
export default function SideBar() {
  function btnFt() {
    document.getElementById('btn-1').className = 'd-none';
    document.getElementById('btn-2').className = 'btn elm-blocking-b mx-2';
    document.getElementById('res-drop-m').className = '';
  }
  function btnSd() {
    document.getElementById('btn-1').className = 'btn elm-blocking-b mx-2';
    document.getElementById('btn-2').className = 'd-none';
    document.getElementById('res-drop-m').className = 'elm-blocking';
  }
  return (
    <div className="bg-light text-center w-cstm">
      <div>
        <div className="d-flex justify-content-center"><h4 className="py-3">কোর্স খুঁজুন</h4><button onClick={btnFt} id="btn-1" type="button" className="btn elm-blocking-b mx-2"><i className="bi bi-chevron-down"></i></button><button onClick={btnSd} id="btn-2" type="button" className="btn d-none elm-blocking-b mx-2"><i className="bi bi-chevron-up"></i></button></div>
        <div id="res-drop-m" className="elm-blocking">
        <div>
          <h5  className="py-2">কোর্স টাইপ:</h5>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">মিনি কোর্স</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">লং কোর্স</button>
            
          </div>
        </div>
        <div>
          <h5  className="py-2">শ্রেণি:</h5>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">৯ম-১০ম শ্রেণি</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">একাদশ-দ্বাদশ</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">এডমিশন</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">৬ষ্ঠ-৮ম</button>
            
          </div>
        </div>
        <div>
          <h5  className="py-2">বিভাগ:</h5>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">বিজ্ঞান</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">মানবিক</button>
            
          </div>
          <div>
            <button type="button" className="my-1 w-75 btn btn-outline-dark card-btn rounded">বাণিজ্য</button>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
