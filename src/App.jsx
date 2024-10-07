import React, { useState } from "react";

const App = () => {
  const [windowContent, setWindowContent] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
  });
  const [dismissPeriod, setDismissPeriod] = useState("xDays");
  const [maxSpinTries, setMaxSpinTries] = useState("");
  const [dismissDays, setDismissDays] = useState("");
  const [wheelSections, setWheelSections] = useState({
    lucky: false,
    input: "",
  });

  const spinners = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7",
    "test8",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Add Item Button */}

      {/* Dismiss Period Section */}

      <div className="bg-white p-4 rounded shadow">
        <label className="block font-semibold text-lg">Dismiss Period</label>
        <small className="block text-gray-600 mb-2">
          If user spins the wheel, next time he can do it after...
        </small>
        <div className="flex space-x-6">
          <label className="flex items-center">
            <input
              type="radio"
              value="xDays"
              checked={dismissPeriod === "xDays"}
              onChange={() => setDismissPeriod("xDays")}
              className="mr-2"
            />
            X Days
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="never"
              checked={dismissPeriod === "never"}
              onChange={() => setDismissPeriod("never")}
              className="mr-2"
            />
            Never
          </label>
        </div>
      </div>

      {/* Max Spin Tries Section */}
      <div className="bg-white p-4 rounded shadow">
        <label className="block font-semibold text-lg">Max Spin Tries</label>
        <small className="block text-gray-600 mb-2">
          How many times each visitor can spin the wheel
        </small>
        <input
          type="number"
          value={maxSpinTries}
          onChange={(e) => setMaxSpinTries(e.target.value)}
          className="border rounded px-2 py-1 w-full mb-4"
        />
        <label className="block font-semibold">Dismiss Period X Days</label>
        <small className="block text-gray-600 mb-2">
          Works if you picked X days
        </small>
        <input
          type="number"
          value={dismissDays}
          onChange={(e) => setDismissDays(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      {/* Window Content Box */}
      <div className="bg-[#f8f9fc] p-6 rounded shadow">
        <h5 className="text-lg font-semibold mb-4">Window Content</h5>
        <div className="space-y-4">
          <div className="flex items-center">
            <label className="w-1/3 font-semibold">Title</label>
            <input
              type="text"
              value={windowContent.title}
              onChange={(e) =>
                setWindowContent({ ...windowContent, title: e.target.value })
              }
              className="border rounded px-2 py-1 w-2/3"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 font-semibold">Subtitle</label>
            <input
              type="text"
              value={windowContent.subtitle}
              onChange={(e) =>
                setWindowContent({ ...windowContent, subtitle: e.target.value })
              }
              className="border rounded px-2 py-1 w-2/3"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/3 font-semibold">Button Text</label>
            <input
              type="text"
              value={windowContent.buttonText}
              onChange={(e) =>
                setWindowContent({
                  ...windowContent,
                  buttonText: e.target.value,
                })
              }
              className="border rounded px-2 py-1 w-2/3"
            />
          </div>
        </div>
      </div>

      {/* Wheel Sections Box */}
      {spinners.map((_, e) => (
        <div className="relative bg-[#f8f9fc] p-6 rounded shadow">
          {/* Cancel SVG Icon */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={() => {
              /* Add your cancel logic here */
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h5 className="text-lg font-semibold mb-4">Wheel Sections</h5>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Input..."
              value={wheelSections.input}
              onChange={(e) =>
                setWheelSections({ ...wheelSections, input: e.target.value })
              }
              className="border rounded px-2 py-1 w-2/3"
            />
            <label className="flex items-center ml-2">
              <input
                type="checkbox"
                checked={wheelSections.lucky}
                onChange={() =>
                  setWheelSections({
                    ...wheelSections,
                    lucky: !wheelSections.lucky,
                  })
                }
                className="mr-1"
              />
              Lucky
            </label>
          </div>
          <input
            type="text"
            placeholder="Additional Input..."
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      ))}

      <button className="mb-4 bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition">
        Add Item
      </button>
    </div>
  );
};

export default App;
