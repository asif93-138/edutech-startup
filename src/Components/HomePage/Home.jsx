import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";
import MainImage from "../../assets/Images/Learn Daily Cover Photo.png";
import classes from "../../styles/Homepagemain.module.css";
import TopRatedCourse from "./TopRatedCourse";
import Course1 from "../../assets/Images/biology.jpg";
import Course2 from "../../assets/Images/current electricity.jpg";
import Course3 from "../../assets/Images/matrix.jpg";
import Course4 from "../../assets/Images/organic.jpg";
export default function HomePage() {
  return (
    <div>
      <Container>
        <Navbar />
        <div className={classes.mainSection}>
          <div className={classes.image}>
            <img src={MainImage} alt="" height="500px" width="850px" />
          </div>
          <div className={classes.text}>
            <p>
              টেকনোলজির এই যুগে আমাদের হাতে সময় এতটাই কম যে , আমরা প্রতিদিন
              আমাদের পাঠ্যবইয়ে চোখ বুলানোর সময়টুকুও হয়ত পাই না। এতে করে নতুন
              জিনিস শেখার প্রতি আমাদের আগ্রহ হারিয়ে যাচ্ছে দিন দিন। তাই লার্ন
              ডেইলির মাধ্যমে আমরা চেষ্টা করবো অল্প হলেও প্রতিদিন তোমাদের কিছু না
              কিছু শেখানোর,তুমি যদি ক্লাসের সবচাইতে ফাঁকিবাজ ছাত্র অথবা ছাত্রীও
              হও, এই প্রশ্নগুলোর উত্তর তুমি নিয়মিত করতে থাকলে তুমি একটা সময়
              অনুভব করতে পারবে তুমি অনেক কিছুই শিখে ফেলেছো মনের অজান্তেই। তাহলে
              আর দেরী কেনো, কোমর বেঁধে লেগে পড়ো লার্ন ডেইলির সাথে আর--
            </p>
            <span className={classes.highlight}>"শিখতে থাকো প্রতিদিন"</span>{" "}
          </div>
        </div>
        <div class={classes.ratedCourse}>
          <h1>আমাদের টপ রেটেড কোর্সসমূহ!</h1>
          <section class={classes.cardContainer}>
            <TopRatedCourse
              image={Course1}
              price={"৳ ৫০.০০"}
              duration={"১ সপ্তাহ"}
              instructorName={"সোহাগ খান"}
              department={"ওসমানী মেডিকেল কলেজ"}
              institution={"সিলেট"}
            />
            <TopRatedCourse
              image={Course2}
              price={"৳ ৫০.০০"}
              duration={"১ সপ্তাহ"}
              instructorName={"মিনহাজ চৌধুরী"}
              department={"গণিত বিভাগ"}
              institution={"শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"}
            />
            <TopRatedCourse
              image={Course3}
              price={"৳ ৫০.০০"}
              duration={"১ সপ্তাহ"}
              instructorName={"জুয়েল রানা"}
              department={"গণিত বিভাগ"}
              institution={"শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"}
            />
            <TopRatedCourse
              image={Course4}
              price={"৳ ৫০.০০"}
              duration={"১ সপ্তাহ"}
              instructorName={"শাফিন রেদোয়ান"}
              department={"রসায়ন বিভাগ"}
              institution={"শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়"}
            />
          </section>
        </div>
        <Footer />
      </Container>
    </div>
  );
}
