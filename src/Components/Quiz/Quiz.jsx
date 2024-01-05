

import Navbar from "../Navbar";
import Footer from "../Footer";
import Option from "./Option";
export default function Quiz() {
  return (
    <div>
      
        <Navbar />
        <div>
          <div>
            <h2>What is the capital of France?</h2>
            <div>
              <Option text="Paris" />
              <Option text="Rome" />
              <Option text="Dhaka" />
              <Option text="Mumbai" />
            </div>
          </div>
        </div>
        <button>Next</button>
        <Footer />
    
    </div>
  );
}
