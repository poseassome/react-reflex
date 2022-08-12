import React, { useState, useEffect } from 'react'
import { addDays } from 'date-fns';
import moment from "moment";
import { Calendar, DefinedRange, DateRange, DateRangePicker, defaultStaticRanges, createStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';

function CalendarCustom() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      // endDate: addDays(new Date(), 7),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  useEffect(() => {
    console.log(state)
    console.log(moment(state[0].startDate))
  }, [state])

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

  
  return (
    <div>
      {/* <DefinedRange
        onChange={item => setState([item.selection])}
        ranges={state}
      /> */}
      <DateRangePicker 
        onChange={item => setState([item.selection])}
        rangeColors={['#7A86B6']}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
        locale={locales.ko}
        editableDateInputs={false}
        staticRanges={staticRanges}
        inputRanges={[]}
        maxDate={new Date()}
      />
    </div>
  )
}

export default CalendarCustom