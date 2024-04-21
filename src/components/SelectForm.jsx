import React, { useState } from 'react';
import Select from 'react-select';

const location = [
  { value: 'Washington', label: 'Washington' },
  { value: 'New York', label: 'New York' },
  { value: 'New Mexico', label: 'New Mexico' },
];
const price= [
  {value: "0 - 100$",label: "0 - 100$"    },
  { value: '101$ -250$', label: '101$ -250$' },
  { value: '251$ - 400$', label: '251$ - 400$' },
]
const appertments = [
  { value: 'Apartment', label: 'Apartment' },
  { value: 'Penthouse', label: 'Penthouse' },
  { value: 'Room', label: 'Room' },
];
export default function App() {
  const [selectedOption, setSelectedOption] = useState("yiuo");
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  return (
    < >
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={location}
        className="w-100"
        placeholder="Location"
      />
     
      <Select
        defaultValue={selectedOption3}
        onChange={setSelectedOption3}
        options={appertments}
        className="w-100"
        placeholder="Apertment"

      />
      <Select
        defaultValue={selectedOption2}
        onChange={setSelectedOption2}
        options={price}
        className="w-100"
        placeholder="Price"

      />
    </>
  );
}