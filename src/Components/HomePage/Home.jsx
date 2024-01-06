import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Navbar from "../Navbar";
import Footer from "../Footer";
import MainImage from "../../assets/Images/Home Page/Learn Daily Cover Photo.png";
import Course1 from "../../assets/Images/Home Page/biology.jpg";
import Course2 from "../../assets/Images/Home Page/current electricity.jpg";
import Course3 from "../../assets/Images/Home Page/matrix.jpg";



export default function HomePage() {
  return (
    <div>
 
        <Navbar />
        <section className="mb-4 py-5 px-3 bg-img text-light text-center">
          <p className="container pt-3">
              টেকনোলজির এই যুগে আমাদের হাতে সময় এতটাই কম যে , আমরা প্রতিদিন
              আমাদের পাঠ্যবইয়ে চোখ বুলানোর সময়টুকুও হয়ত পাই না। এতে করে নতুন
              জিনিস শেখার প্রতি আমাদের আগ্রহ হারিয়ে যাচ্ছে দিন দিন। তাই লার্ন
              ডেইলির মাধ্যমে আমরা চেষ্টা করবো অল্প হলেও প্রতিদিন তোমাদের কিছু না
              কিছু শেখানোর,তুমি যদি ক্লাসের সবচাইতে ফাঁকিবাজ ছাত্র অথবা ছাত্রীও
              হও, এই প্রশ্নগুলোর উত্তর তুমি নিয়মিত করতে থাকলে তুমি একটা সময়
              অনুভব করতে পারবে তুমি অনেক কিছুই শিখে ফেলেছো মনের অজান্তেই। তাহলে
              আর দেরী কেনো, কোমর বেঁধে লেগে পড়ো লার্ন ডেইলির সাথে আর--
          </p>
          <h2 className="container">"শিখতে থাকো প্রতিদিন"</h2>
          <section className='container elm-blocking'>
        <h3 className='text-center pt-4'>আমাদের টপ রেটেড কোর্সসমূহ</h3>
        <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="card text-center my-4 mx-3">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
        </SwiperSlide>
      </Swiper>
        </section>
        <section className='container elm-blocking-b'>
        <h3 className='text-center pt-4'>আমাদের টপ রেটেড কোর্সসমূহ</h3>
        
<div id="demo" className="carousel slide m-4" data-bs-ride="carousel">
  
  
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="card text-center">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
    </div>
    <div className="carousel-item">
    <div className="card text-center">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
    </div>
    <div className="carousel-item">
    <div className="card text-center">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
    </div>
    <div className="carousel-item">
    <div className="card text-center">
    <img className="card-img-top" src={Course1} alt="Card image" style={{width: "100%"}} />
    <div className="card-body p-0">
      <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
      <p className="card-text m-0">ব্যাপ্তি: ১ সপ্তাহ</p>
      <p className="card-text m-0">ইনস্ট্রাক্টর</p>
      <p className="card-text m-0">ওসমানী মেডিকেল কলেজ, সিলেট</p>
      <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
    </div>
  </div>
      </div>
  </div>
  
 
  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>
        </section>
        </section>


        <section className='container mt-4'>
        <h3 className='text-center'>আমাদের টপ রেটেড কোর্সসমূহ</h3>
        <div className='d-sm-flex justify-content-center'>
          <div>
          <article className='border pe-5 py-4 ps-4 m-5 position-relative bg-light rounded'>
            <div className='d-flex align-items-center'>
            <i className="bi bi-book fs-1 me-4"></i>
            <h4 className=''>School education</h4>
            </div>
            <button type='button' className='btn position-absolute top-50 end-0 translate-middle-y'><i className="bi bi-chevron-right"></i></button>
          </article>
          <article className='border pe-5 py-4 ps-4 m-5 position-relative bg-light rounded'>
            <div className='d-flex align-items-center'>
            <i className="bi bi-columns-gap fs-1 me-4"></i>
            <h4 className=''>Skills</h4>
            </div>
            <button type='button' className='btn position-absolute top-50 end-0 translate-middle-y'><i className="bi bi-chevron-right"></i></button>
          </article>
          </div>
          <div>
          <article className='border pe-5 py-4 ps-4 m-5 position-relative bg-light rounded'>
            <div className='d-flex align-items-center'>
            <i className="bi bi-mortarboard-fill fs-1 me-4"></i>
            <h4 className=''>University admission</h4>
            </div>
            <button type='button' className='btn position-absolute top-50 end-0 translate-middle-y'><i className="bi bi-chevron-right"></i></button>
          </article>
          <article className='border pe-5 py-4 ps-4 m-5 position-relative bg-light rounded'>
            <div className='d-flex align-items-center'>
            <i className="bi bi-briefcase-fill fs-1 me-4"></i>
            <h4 className=''>Job preparation</h4>
            </div>
            <button type='button' className='btn position-absolute top-50 end-0 translate-middle-y'><i className="bi bi-chevron-right"></i></button>
          </article>
          </div>
        </div>
        </section>
        <section>
        <div className='text-center'>
        <iframe width="280" height="158" className='rounded' src="https://www.youtube.com/embed/sS5KYVGtAcQ?si=fIWpZQHZwA648kwP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="280" height="158" className='rounded' src="https://www.youtube.com/embed/sS5KYVGtAcQ?si=fIWpZQHZwA648kwP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe width="280" height="158" className='rounded' src="https://www.youtube.com/embed/sS5KYVGtAcQ?si=fIWpZQHZwA648kwP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </section>
        <Footer />
    
    </div>
  );
}