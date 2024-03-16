import React from "react";

const GetMonth = (month) => {
  // List of month with their values
  const monthList = {
    january: 31,
    feburary: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
  };
  const calendar = new Date();
  const monthCalendar = [];
  // const dayCalendar = {
  //   date: "",
  //   day: "",
  //   events: [],
  // };

  // const day = new Date().getDay();
  // console.log(day);

  // console.log(monthList.january);
  for (let i = 1; i < monthList.january + 1; i++) {
    // const date = i;
    // const day = new Date(2024, 2, 1);
    monthCalendar.push(i);
    console.log(monthCalendar);
  }

  // const monthArray = Object.entries(monthList);
  // console.log(monthArray);
  // for (let i = 1; i <= monthArray[0][2]; i++) {
  //   console.log(i);
  // }

  // const currentMonth = () => {
  // Replace this with the current month
  // return calendar.getMonth(11);
  // console.log(Object.keys(monthList));

  // return monthList;
  // };

  // const getMonthlist = () => {};
  // const dayofweek = () => {
  //   return calendar.setMonth(11);
  // };

  // console.log(currentMonth());

  return <div>GetMonth</div>;
};

export default GetMonth;
