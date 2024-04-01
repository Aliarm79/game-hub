import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (value: string) => void;
  sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by :{" "}
        {sortOrder
          ? sortOders.find((i) => i.value === sortOrder)?.label
          : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOders.map((s) => (
          <MenuItem onClick={() => onSelectSortOrder(s.value)} key={s.label}>
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
