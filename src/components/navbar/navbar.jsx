import { Stack, Box } from "@mui/material";
import { logo } from "../../constants";
import {colors} from "../../constants/colors"; 
import {Link} from 'react-router-dom'
import {SearchBar} from '../'

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={'space-between'}
      p={2}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: colors.primary ,
      }}
    >
      <Link to={'./'}>
      <img src={logo} alt="logo" height={50} width={60} />
      </Link>
      <SearchBar/>
    <Box sx={{display:{xs:'none',sm:'flex'}}}/>
    </Stack>
  );
}

export default Navbar;
