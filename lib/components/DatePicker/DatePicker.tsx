import React from "react";
import moment from "moment";
import { twMerge } from "tailwind-merge";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Datepicker } from "@aliakbarazizi/headless-datepicker";

export type DatePickerProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  showTime?: boolean;
  readOnly?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = ({
  name,
  value,
  showTime,
  onChange,
  readOnly,
}) => {
  return (
    <>
      <input
        className={twMerge(
          "w-full bg-white dark:bg-gray-800",
          showTime === true ? "!hidden" : "md:hidden"
        )}
        type={showTime === true ? "datetime-local" : "date"}
        value={moment(new Date(+value * 1000)).format(
          showTime === true ? "YYYY-MM-DD HH:mm" : "YYYY-MM-DD"
        )}
        onChange={(e) =>
          onChange(Math.round(new Date(e.target.value).getTime() / 1000) + "")
        }
      />
      <div className={twMerge(showTime === true ? "" : "hidden md:flex")}>
        <Datepicker
          disabledKeyboardNavigation={true}
          {...{
            value: value ? new Date(+value * 1000) : new Date(),
            onChange: (v) =>
              onChange(Math.round((v as Date).getTime() / 1000) + ""),
          }}
        >
          <Datepicker.Input
            name={name}
            value={new Date(+value * 1000).getTime() / 1000 || ""}
            format={showTime === true ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd"}
            id={name}
          />
          <Datepicker.Picker
            id="Picker-Date"
            defaultType="day"
            className="xs:max-w-[320px] z-50 rounded-md border border-gray-300 bg-white p-2 shadow-2xl dark:border-gray-700 dark:bg-gray-900 md:p-4"
          >
            {({ year, monthName, month, hour, minute }) => (
              <div className="flex w-[320px] flex-col gap-2">
                <div className="flex justify-between w-full">
                  <div className="flex text-2xl font-bold text-black gap-1 dark:text-white">
                    <Datepicker.Button action="toggleMonth">
                      {monthName}
                    </Datepicker.Button>
                    <Datepicker.Button action="toggleYear">
                      {year}
                    </Datepicker.Button>
                  </div>
                  <div className="flex gap-2">
                    <Datepicker.Button
                      className="p-3 bg-gray-300 rounded-md hover:bg-gray-400 dark:bg-gray-700"
                      action="prev"
                    >
                      <AiOutlineArrowLeft size={20} />
                    </Datepicker.Button>
                    <Datepicker.Button
                      className="p-3 bg-gray-300 rounded-md hover:bg-gray-400 dark:bg-gray-700"
                      action="next"
                    >
                      <AiOutlineArrowRight size={20} />
                    </Datepicker.Button>
                  </div>
                </div>

                <Datepicker.Items
                  className={({ type }) =>
                    twMerge(
                      "grid auto-rows-max gap-1 overflow-y-auto scroll-smooth",
                      type === "day" && "grid-cols-7",
                      type === "month" && "grid-cols-3",
                      type === "year" && "max-h-[300px] grid-cols-5",
                      type === "hour" && "grid-cols-2"
                    )
                  }
                >
                  {({ items }) =>
                    items.map((it) => (
                      <Datepicker.Item
                        key={it.key}
                        item={it}
                        disabled={
                          it.isHeader || it.disabled || readOnly === true
                        }
                        className={twMerge(
                          "rounded-md p-2 dark:hover:bg-gray-700",
                          it.isToday &&
                            "border border-gray-800 dark:border-gray-600",
                          it.isSelected && "bg-primary-600 text-white",
                          !it.isHeader &&
                            !it.isSelected &&
                            "hover:bg-primary-50",
                          !it.isHeader &&
                            moment(new Date(it.value)).format("YYYY-M") !==
                              year + "-" + month &&
                            "text-gray-300"
                        )}
                        {...(it.type === "day" &&
                          showTime === false && { action: "close" })}
                        {...(it.type === "minute" &&
                          showTime === true && { action: "close" })}
                        {...(it.type === "month" || it.type === "year"
                          ? { action: "showDay" }
                          : undefined)}
                      >
                        {it.type === "day" && (
                          <>{it.isHeader ? it.text.substring(0, 3) : it.text}</>
                        )}
                        {it.type === "month" && <>{it.text.substring(0, 3)}</>}
                        {it.type === "year" && <>{it.text}</>}
                        {it.type === "hour" && <>{it.text}</>}
                      </Datepicker.Item>
                    ))
                  }
                </Datepicker.Items>

                <Datepicker.Button
                  className={twMerge(
                    "relative w-full p-2 text-white rounded bg-primary-600",
                    "after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:rounded-l after:bg-gray-400 after:opacity-0 dark:after:bg-gray-600", //after:
                    "hover:after:w-full hover:after:transform hover:after:opacity-20 hover:after:transition-all hover:after:duration-300" //hover:
                  )}
                  action="todayHour"
                >
                  Today
                </Datepicker.Button>

                <Datepicker.Button
                  action="toggleHourPicker"
                  className={twMerge(
                    "rounded-md p-1 text-2xl hover:bg-primary-100 dark:hover:bg-gray-700",
                    showTime === true ? "" : "hidden"
                  )}
                >
                  {("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2)}
                </Datepicker.Button>
                <Datepicker.Picker
                  className="flex py-2 bg-white border border-gray-300 shadow-md max-h-56 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  id="HourPicker"
                >
                  <Datepicker.Items
                    type="hour"
                    className="px-4 overflow-y-auto scroll-smooth"
                    disableAutoScroll
                  >
                    {({ items }) =>
                      items.map((item) => (
                        <Datepicker.Item
                          key={item.key}
                          item={item}
                          action="next"
                          className={twMerge(
                            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ",
                            item.isSelected
                              ? "bg-primary-600 text-white dark:bg-gray-700"
                              : "hover:bg-primary-50 dark:hover:bg-gray-700"
                          )}
                        >
                          {("0" + item.text).slice(-2)}
                        </Datepicker.Item>
                      ))
                    }
                  </Datepicker.Items>
                  <Datepicker.Items
                    type="minute"
                    className="px-4 overflow-y-auto scroll-smooth"
                    disableAutoScroll
                  >
                    {({ items }) =>
                      items.map((item) => (
                        <Datepicker.Item
                          key={item.key}
                          item={item}
                          action="closePicker-Date"
                          className={twMerge(
                            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ",
                            item.isSelected
                              ? "bg-primary-600 text-white dark:bg-gray-700"
                              : "hover:bg-primary-50 dark:hover:bg-gray-700"
                          )}
                        >
                          {("0" + item.text).slice(-2)}
                        </Datepicker.Item>
                      ))
                    }
                  </Datepicker.Items>
                </Datepicker.Picker>
              </div>
            )}
          </Datepicker.Picker>
        </Datepicker>
      </div>
    </>
  );
};

export default DatePicker;
