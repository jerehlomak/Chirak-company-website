import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postSubscription } from "../../store/features/Subscription";
import Footer from "../Footer/Footer";
import News from "../NewsLetter/News";

const MainFooter = ({ color }) => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;
  console.log(formData);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = { email };
    console.log(userEmail);
    dispatch(postSubscription(userEmail));
    setFormData({
      email: "",
    });
  };
  return (
    <div id="main-footer" className={`${color} pt-6 md:pt-20`}>
      <div className="flex flex-col items-center justify-center py-20">
        <News
          email={email}
          setFormData={setFormData}
          formData={formData}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MainFooter;
