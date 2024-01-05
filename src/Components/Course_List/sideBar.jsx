
export default function SideBar() {
  return (
    <div>
      <div>
        <h1>কোর্স খুঁজুন</h1>
        <div>
          <h2>কোর্স টাইপ:</h2>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">মিনি কোর্স</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">লং কোর্স</label>
          </div>
        </div>
        <div>
          <h2>শ্রেণি:</h2>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">৯ম-১০ম শ্রেণি</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">একাদশ-দ্বাদশ</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">এডমিশন</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">৬ষ্ঠ-৮ম</label>
          </div>
        </div>
        <div>
          <h2>বিভাগ:</h2>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">বিজ্ঞান</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">মানবিক</label>
          </div>
          <div>
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">বাণিজ্য</label>
          </div>
        </div>
      </div>
    </div>
  );
}
