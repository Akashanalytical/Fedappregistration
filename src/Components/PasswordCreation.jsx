import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography,TextField } from '@mui/material'
import React from 'react'

export default function PasswordCreation() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Typography sx={{fontSize:20,mb:5}}>Password Creation</Typography>
    <Grid item xs={12} sm={8}>
    <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined">Create Password</InputLabel>
          <OutlinedInput sx={{color:'#323F8D'}}
            id="outlined"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff sx={{color:'#323F8D'}}/> : <Visibility sx={{color:'#323F8D'}}/>}
                </IconButton>
              </InputAdornment>
            }
            label="CreatePassword"
          />
        </FormControl>
        </Grid>
        <Grid xs={12} sm={8}>
        <TextField sx={{mt:5}} variant="outlined" label="Confirm Password" type="password" fullWidth />

        </Grid>
    </>
  )
}
