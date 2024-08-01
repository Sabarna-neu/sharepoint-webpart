import { Dropdown, IDropdownOption } from "@fluentui/react";
import * as React from "react";
const cascadingDropdown = [
  {
    key: "red",
    text: "red",
    dep: "apple",
  },
  {
    key: "yellow",
    text: "yellow",
    dep: "banana",
  },
  {
    key: "green",
    text: "green",
    dep: "apple",
  },
];
export const CustomDropdown = () => {
  const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();
  const [selectedItem2, setSelectedItem2] = React.useState<IDropdownOption>();
  const [secondItemList, setSecondItemList] =
    React.useState<IDropdownOption[]>(cascadingDropdown);

  const dropdownOption = [
    { key: "apple", text: "Apple" },
    { key: "banana", text: "Banana" },
  ];

  console.log("Selected Item", selectedItem);
  const onChange = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    setSelectedItem(item);
    setSecondItemList(cascadingDropdown.filter((x) => x.dep === item.key));
  };
  const onChange2 = (
    event: React.FormEvent<HTMLDivElement>,
    item: IDropdownOption
  ): void => {
    setSelectedItem2(item);
    // cascadingDropdown.filter((x) => x.dep === item.key);
  };
  return (
    <>
      <Dropdown
        label="Controlled example"
        selectedKey={selectedItem ? selectedItem.key : undefined}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange}
        placeholder="Select an option"
        options={dropdownOption}
      />

      <Dropdown
        label="Controlled example 2"
        selectedKey={selectedItem2 ? selectedItem2.key : undefined}
        // eslint-disable-next-line react/jsx-no-bind
        onChange={onChange2}
        placeholder="Select an dependent option"
        options={secondItemList}
      />
    </>
  );
};
