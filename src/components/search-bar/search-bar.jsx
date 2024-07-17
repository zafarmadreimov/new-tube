import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
   const [value,setValue]=useState('')
  const navigate= useNavigate()

  const changeHandler=e=> {
   e.preventDefault()
   if(value) {
    navigate(`/search/${value}`)
    setValue('')
   }
  }
  return (
    <Paper
      component={'form'}
       onSubmit={changeHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: 'none',
        marginInline: 3,
        display: 'flex', 
        alignItems: 'center', 
        width: { xs: '220px', sm: '300px', md: '400px' } 
      }}
    >
      <input
        type='text'
        placeholder='Search...'
        className='search-bar'
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{
          border: 'none',
          outline: 'none',
          width: '100%', 
        }}
      />
      <IconButton type='submit' sx={{ p: '10px', color: colors.secondary }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
