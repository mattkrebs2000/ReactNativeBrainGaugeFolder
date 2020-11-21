import React, { useState, useEffect } from "react";


import Survey from "./components/Survey";
import Survey2 from "./components/Survey2";
import Survey3 from "./components/Survey3";
import Survey4 from "./components/Survey4";
import Review from "./components/Review";
import Instructions from "./components/Instructions";
import Game from "./components/Game";

export default Braingauge = ({ navigation }) => {
  const [value1, setValue1] = useState(0);
  const [texts1, setText1] = useState("Not Included");
  const [value2, setValue2] = useState(0);
  const [texts2, setText2] = useState("Not Included");
  const [value3, setValue3] = useState(0);
  const [texts3, setText3] = useState("Not Included");
  const [value4, setValue4] = useState(0);
  const [texts4, setText4] = useState("Not Included");
 const [page, setPage] = useState(1);
   const [average, setAverage] = useState(0);
  


  useEffect(() => {
    texting();
  }, [value1]);

  const texting = () => {
    switch (true) {
      case value1 === 0:
        setText1("Not Included");
        break;
      case 0 < value1 && value1 < 25:
        setText1("Very Tired");
        break;
      case 25 < value1 && value1 < 50:
        setText1("Tired");
        break;
      case 50 < value1 && value1 < 75:
        setText1("Refreshed");
        break;
      case 75 < value1 && value1 <= 100:
        setText1("Very Refreshed");
        break;
    }
    console.log("YYYYY", texts1, "YYYYYY");
  };

  useEffect(() => {
    texting2();
  }, [value2]);

  const texting2 = () => {
    switch (true) {
      case value2 === 0:
        setText2("Not Included");
        break;
      case 0 < value2 && value2 < 25:
        setText2("Upset");
        break;
      case 25 < value2 && value2 < 50:
        setText2("Mildly Upset");
        break;
      case 50 < value2 && value2 < 75:
        setText2("Content");
        break;
      case 75 < value2 && value2 <= 100:
        setText2("Happy");
        break;
    }
  };

  useEffect(() => {
    texting3();
  }, [value3]);

  const texting3 = () => {
    switch (true) {
      case value3 === 0:
        setText3("Not Included");
        break;
      case 0 < value3 && value3 < 25:
        setText3("Very Hungry");
        break;
      case 25 < value3 && value3 < 50:
        setText3("Little Bit Hungry");
        break;
      case 50 < value3 && value3 < 75:
        setText3("Fed");
        break;
      case 75 < value3 && value3 <= 100:
        setText3("Stuffed");
        break;
    }
  };

  useEffect(() => {
    texting4();
  }, [value4]);

  const texting4 = () => {
    switch (true) {
      case value4 === 0:
        setText4("Not Included");
        break;
      case 0 < value4 && value4 < 25:
        setText4("Not Active");
        break;
      case 25 < value4 && value4 < 50:
        setText4("Somewhat Active");
        break;
      case 50 < value4 && value4 < 75:
        setText4("Active");
        break;
      case 75 < value4 && value4 <= 100:
        setText4("Very Active");
        break;
    }
  };

  const componentsFinder = () => {
    switch (page) {
      case 1:
        return (
          <Survey
            setValue1={setValue1}
            setText1={setText1}
            setPage={setPage}
            value1={value1}
            texts1={texts1}
            navigation={navigation}
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
            page={page}
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
            navigation={navigation}
            page={page}
          />
        );
      case 6:
        return <Instructions setPage={setPage} navigation={navigation} />;
      case 7:
        return (
          <Game
            setPage={setPage}
            average={average}
            setAverage={setAverage}
          />
        );
    }
  };

  return componentsFinder();
};
