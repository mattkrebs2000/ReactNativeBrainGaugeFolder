import React, { useState, useEffect } from "react";

import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";
import Survey3 from "./components/Survey3";
import Survey4 from "./components/Survey4";
import Review from "./components/Review";
import Instructions from "./components/Instructions";

export default Braingauge = ({navigation}) => {
  const [value1, setValue1] = useState(0);
  const [texts1, setText1] = useState("Not Included");
  const [value2, setValue2] = useState(0);
  const [texts2, setText2] = useState("Not Included");
   const [value3, setValue3] = useState(0);
   const [texts3, setText3] = useState("Not Included");
  const [value4, setValue4] = useState(0);
  const [texts4, setText4] = useState("Not Included");


  const [page, setPage] = useState(1);

  useEffect(() => {
    texting();
  }, [value1]);

  texting = () => {
    switch (value1) {
      case 0:
        setText1("Not Included");
        break;
      case 1:
        setText1("Very Tired");
        break;
      case 2:
        setText1("Tired");
        break;
      case 3:
        setText1("Refreshed");
        break;
      case 4:
        setText1("Very Refreshed");
        break;
    }
    console.log("YYYYY", texts1, "YYYYYY");
  };


  useEffect(() => {
    texting2();
  }, [value2]);

  texting2 = () => {
    switch (value2) {
      case 0:
        setText2("Not Included");
        break;
      case 1:
        setText2("Upset");
        break;
      case 2:
        setText2("Mildly Upset");
        break;
      case 3:
        setText2("Content");
        break;
      case 4:
        setText2("Happy");
        break;
    }
  };

  useEffect(() => {
    texting3();
  }, [value3]);

  texting3 = () => {
    switch (value3) {
      case 0:
        setText3("Not Included");
        break;
      case 1:
        setText3("Very Hungry");
        break;
      case 2:
        setText3("Little Bit Hungry");
        break;
      case 3:
        setText3("Fed");
        break;
      case 4:
        setText3("Stuffed");
        break;
    }
  };

  useEffect(() => {
    texting4();
  }, [value4]);

  texting4 = () => {
    switch (value4) {
      case 0:
        setText4("Not Included");
        break;
      case 1:
        setText4("Not Active");
        break;
      case 2:
        setText4("Somewhat Active");
        break;
      case 3:
        setText4("Active");
        break;
      case 4:
        setText4("Very Active");
        break;
    }
  };

  componentsFinder = () => {
    switch (page) {
      case 1:
        return (
          <Survey
            setValue1={setValue1}
            setText1={setText1}
            setPage={setPage}
            value1={value1}
            texts1={texts1}
          />
        );
      case 2:
        return (
          <Survey2
            setValue2={setValue2}
            setText2={setText2}
            setPage={setPage}
            value2={value2}
            texts2={texts2}
          />
        );
      case 3:
        return (
          <Survey3
            setValue3={setValue3}
            setText3={setText3}
            setPage={setPage}
            value3={value3}
            texts3={texts3}
          />
        );
      case 4:
        return (
          <Survey4
            setValue4={setValue4}
            setText4={setText4}
            setPage={setPage}
            value4={value4}
            texts4={texts4}
          />
        );
      case 5:
        return (
          <Review
            value1={value1}
            texts1={texts1}
            value2={value2}
            texts2={texts2}
            value3={value3}
            texts3={texts3}
            value4={value4}
            texts4={texts4}
            setPage={setPage}
            navigation ={navigation}
          />
        );
      case 6:
        return (
          <Instructions
          setPage={setPage}
          />
        );
    }
    console.log("YYYYY", texts1, "YYYYYY");
  };

  return componentsFinder();
};
