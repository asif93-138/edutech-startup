import Navbar from "../Navbar";

import Footer from "../Footer";
import SideBar from "./sideBar";


import image1 from "../../assets/Images/CoursePage/Presentation1.jpg";
import image2 from "../../assets/Images/CoursePage/ch-8.jpg";
import image3 from "../../assets/Images/CoursePage/Thermodynamics.jpg";
import image4 from "../../assets/Images/CoursePage/chemestry ch1.jpg";
import image5 from "../../assets/Images/CoursePage/chemestry ch1-02.jpg";
import image6 from "../../assets/Images/CoursePage/chemestry ch1-03.jpg";
import image7 from "../../assets/Images/CoursePage/Biology-01.jpg";
import image8 from "../../assets/Images/CoursePage/b-2.jpg";
import image9 from "../../assets/Images/CoursePage/b-03.jpg";
export default function CourseList() {
  return (
    <div>

      <Navbar />
      <div className="d-sm-flex">
        <SideBar />
        <section className="w-80">
          <div className="d-sm-flex justify-content-around my-4 d-ex">
            <div className="card text-center w-30">
              <img className="card-img-top" src={image1} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">স্থির তড়িৎ</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image2} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">আধুনিক পদার্থবিজ্ঞানের সূচনা</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image3} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">তাপগতিবিদ্যা</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            </div>
            <div className="d-sm-flex justify-content-around my-4 d-ex">
            <div className="card text-center w-30">
              <img className="card-img-top" src={image4} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">গুনগত রসায়ন (পর্ব ১)</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image5} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">গুনগত রসায়ন (পর্ব ২)</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image6} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">গুনগত রসায়ন (পর্ব ৩)</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            </div>
            <div className="d-sm-flex justify-content-around my-4 d-ex">
            <div className="card text-center w-30">
              <img className="card-img-top" src={image7} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">কোষ ও কোষের গঠন</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image8} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">কোষ বিভাজন</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
            <div className="card text-center w-30">
              <img className="card-img-top" src={image9} alt="Card image" style={{ width: "100%" }} />
              <div className="card-body p-0">
                <p className="card-text m-0">মূল্য : ৳ ৫০.০০</p>
                <p className="card-text m-0">রক্ত ও রক্ত সংবহন্তন্ত্র</p>
                <a href="#" className=""><button type="button" className="btn btn-outline-dark card-btn">View Details</button></a>
              </div>
            </div>
          </div>
        </section>
        {/* <div>
            <Course
              image={image1}
              courseName={"স্থির তড়িৎ"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image2}
              courseName={"আধুনিক পদার্থবিজ্ঞানের সূচনা"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image3}
              courseName={"তাপগতিবিদ্যা"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image4}
              courseName={"গুনগত রসায়ন (পর্ব ১)"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image5}
              courseName={"গুনগত রসায়ন (পর্ব ২)"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image6}
              courseName={"গুনগত রসায়ন (পর্ব ৩)"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image7}
              courseName={"কোষ ও কোষের গঠন"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image8}
              courseName={"কোষ বিভাজন"}
              coursePrice={"৳ ৫০.০০"}
            />
            <Course
              image={image9}
              courseName={"রক্ত ও রক্ত সংবহন্তন্ত্র"}
              coursePrice={"৳ ৫০.০০"}
            />
          </div> */}
      </div>
      <Footer />
    </div>
  );
}
