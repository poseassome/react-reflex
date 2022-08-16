import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import { addDays, format, isToday } from 'date-fns';
import moment from "moment";
import { Calendar, DefinedRange, DateRange, DateRangePicker, defaultStaticRanges, createStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
import { useRef } from 'react';



const SpanToday = styled.span`
  &:after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #7A86B6 !important;
  }
`

const IndexDate = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-weight: bold;
  line-height: 50px;
`


function CalendarCustom() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const [state, setState] = useState([
    {
      startDate: new Date(),
      // endDate: addDays(new Date(), 7),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    setDateRange({
      ...dateRange,
      startDate: state[0].startDate,
      endDate: state[0].endDate,
    })
  }, [state])

  function customDayContent(day) {
    let datestyle = (
      <span>{format(day, "d")}</span>
    );
    if (isToday(day)) {
      datestyle = (
        <SpanToday>{format(day, "d")}</SpanToday>
      )
    }
    return (
      <div>
        {datestyle}
      </div>
    )
  }

  const staticRanges = createStaticRanges([
    // ...defaultStaticRanges,
    // {
    //   label: "This Year",
    //   range: () => ({
    //     startDate: moment()
    //       .startOf("year")
    //       .toDate(),
    //     endDate: moment()
    //       .endOf("day")
    //       .toDate()
    //   })
    // },
    // {
    //   label: "Last Year",
    //   range: () => ({
    //     startDate: moment()
    //       .subtract(1, "years")
    //       .startOf("year")
    //       .toDate(),
    //     endDate: moment()
    //       .subtract(1, "years")
    //       .endOf("year")
    //       .toDate()
    //   })
    // }

    {
      label: "오늘",
      range: () => ({
        startDate: new Date(),
        endDate: new Date(),
      })
    },
    {
      label: "이번 주",
      range: () => ({
        startDate: moment()
          .startOf('isoWeek')
          .toDate(),
        endDate: moment()
          .endOf('isoWeek')
          .toDate(),
      })
    },
    {
      label: "지난 주",
      range: () => ({
        startDate: moment()
          .subtract(1, "week")
          .startOf('isoWeek')
          .toDate(),
        endDate: moment()
          .subtract(1, "week")
          .endOf('isoWeek')
          .toDate(),
      })
    },
    {
      label: "이번 달",
      range: () => ({
        startDate: moment()
          .startOf('Month')
          .toDate(),
        endDate: moment()
          .endOf('Month')
          .toDate(),
      })
    },
    {
      label: "< 이전 달",
      range: () => ({
        startDate: moment(state[0].startDate)
          .subtract(1, "Month")
          .startOf('Month')
          .toDate(),
        endDate: moment(state[0].startDate)
          .subtract(1, "Month")
          .endOf('Month')
          .toDate(),
      })
    },
    {
      label: "다음 달 >",
      range: () => ({
        startDate: moment(state[0].startDate)
          .add(1, "Month")
          .startOf('Month')
          .toDate(),
        endDate: moment(state[0].startDate)
          .add(1, "Month")
          .endOf('Month')
          .toDate(),
      })
    },
  ]);


  const [show, setShow] = useState(false)
  const onClick = () => {
    if(show === false) setShow(true);
    if(show === true) setShow(false);
  }
  const calendar = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", onClickCal);
    return () => {
      document.removeEventListener("mousedown", onClickCal)
    }
  }, [])
  const onClickCal = (e) => {
    const btn = document.querySelector('.button')
    if(!show && calendar.current && !calendar.current.contains(e.target) && e.target.contains(btn)) setShow(false)
  }

  return (
    <div style={{position: 'relative'}}>

      <div onClick={onClick} className="button" style={{width: '300px', cursor:'pointer'}}>
        <IndexDate>
          {format(dateRange.startDate, "yyyy-MM-dd")}
          &nbsp; - &nbsp;
          {format(dateRange.endDate, "yyyy-MM-dd")}
        </IndexDate>
      </div>


      {/* <DefinedRange
        onChange={item => setState([item.selection])}
        ranges={state}
      /> */}
      { show ?
          <div style={{textAlign: 'left', width: 'fit-content', boxShadow: '0 4px 12px 0 rgba(0,0,0,0.2)'}} ref={calendar}>
            <DateRangePicker 
              onChange={item => setState([item.selection])}
              rangeColors={['#7A86B6']}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={1}
              ranges={state}
              direction="vertical"
              locale={locales.ko} // 언어설정
              editableDateInputs={false}
              staticRanges={staticRanges} // 왼쪽 날짜선택 메뉴 지정
              inputRanges={[]} // 왼쪽 input 여부
              maxDate={new Date()}
              dayContentRenderer={customDayContent} // date style 지정
            />
          </div>
        :
          null
      }

    </div>
  )
}

export default CalendarCustom