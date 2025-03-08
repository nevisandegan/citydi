import { Box, MenuItem, SelectChangeEvent } from "@mui/material";
import CustomSelect from "../../core/CustomSelect";

interface Props {
  filterValue: string;
  onFilterValue: (value: string) => void;
}

function FilterSelect({ filterValue, onFilterValue }: Props) {
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    onFilterValue(event.target.value);
  };

  return (
    <Box sx={{ padding: 0.1 }}>
      <CustomSelect
        value={filterValue}
        onChange={(e) => onFilterValue(e.target.value as string)}
        displayEmpty
        size="small"
        fullWidth
        sx={{ minWidth: 200 }}
        renderValue={(selected) => {
          if (!selected) {
            return <span style={{ color: "#757575" }}>فیلتر بر اساس</span>;
          }
          return selected === "all"
            ? "همه"
            : selected === "favorites"
            ? "علاقه‌مندی‌ها"
            : "غیرعلاقه‌مندی‌ها";
        }}
      >
        <MenuItem value="all">همه</MenuItem>
        <MenuItem value="favorites">علاقه‌مندی‌ها</MenuItem>
        <MenuItem value="nonFavorites">غیرعلاقه‌مندی‌ها</MenuItem>
      </CustomSelect>
    </Box>
  );
}

export default FilterSelect;
