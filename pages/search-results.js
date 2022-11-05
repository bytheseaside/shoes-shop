import React, { useState, useEffect } from 'react'
import { Box, Typography, InputBase } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import HeaderLoggedIn from '../src/components/HeaderLoggedIn/HeaderLoggedIn'
import ProductCard from '../src/components/ProductCard/ProductCard'
import FilterTitle from '../src/components/FilterTitle/FilterTitle'
import CheckBox from '../src/components/CheckBox/CheckBox'
import SeparationLine from '../src/components/SeparationLine/SeparationLine'
// import useWindowDimensions from '../src/hooks/useWindowDimensions'
import { theme } from '../styles/theme'

export default function SearchResults () {
  // const { width } = useWindowDimensions()
  // console.log(width)

  const [showFilters, setShowFilters] = useState(true) // State to show/hide the side filters
  const [width, setWidth] = useState(0)

  // Filters
  const [filterGender, setFilterGender] = useState(true) // State to show/hide Gender filters
  const [filterKids, setFilterKids] = useState(true) // State to show/hide Kids filters
  const [filterBrand, setFilterBrand] = useState(true) // State to show/hide Brand filters
  const [filterPrice, setFilterPrice] = useState(true) // State to show/hide Price filters
  const [filterColor, setFilterColor] = useState(true) // State to show/hide Color filters

  // Checkboxes
  const [checkedAdidas, setCheckedAdidas] = useState(true) // State to show/hide the stock
  const [checkedAsics, setCheckedAsics] = useState(true) // State to show/hide the stock
  const [checkedNB, setCheckedNB] = useState(true) // State to show/hide the stock
  const [checkedNike, setCheckedNike] = useState(true) // State to show/hide the stock
  const [checkedPuma, setCheckedPuma] = useState(true) // State to show/hide the stock
  const [checkedReebok, setCheckedReebok] = useState(true) // State to show/hide the stock

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

  // Arrays for Header
  const pages = ['Home', 'For women', 'For Men', 'Accesories', 'Sale']
  const links = ['/', '/for-women', '/for-men', '/accesories', '/sale']

  const showFiltersBlock = () => {
    return setShowFilters(!showFilters)
  }

  function handleGender () {
    return setFilterGender(!filterGender)
  }

  function handleKids () {
    return setFilterKids(!filterKids)
  }

  function handleBrand () {
    return setFilterBrand(!filterBrand)
  }

  function handlePrice () {
    return setFilterPrice(!filterPrice)
  }

  function handleColor () {
    return setFilterColor(!filterColor)
  }

  function handleChangeAdidas () {
    setCheckedAdidas(!checkedAdidas)
  }

  function handleChangeAsics () {
    setCheckedAsics(!checkedAsics)
  }

  function handleChangeNB () {
    setCheckedNB(!checkedNB)
  }
  function handleChangeNike () {
    setCheckedNike(!checkedNike)
  }
  function handleChangePuma () {
    setCheckedPuma(!checkedPuma)
  }
  function handleChangeReebok () {
    setCheckedReebok(!checkedReebok)
  }

  return (
    <>
      <HeaderLoggedIn pages={pages} links={links} cart={true} burger={true}/>
      <Box display={{ xs: 'flex', sm: 'flex' }} sx={{ maxWidth: '1920px', mt: 'auto' }}>

        {/* DESKTOP */}
        {showFilters &&
        <Box sx={{ width: '320px', heigth: 'auto', display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', ml: '40px', mr: '40px' }}>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '18px'
            }}
          >
            Shoes/Air Force 1
          </Typography>
          <Typography {...theme.typography.h1}>
            Air Force 1 (137)
          </Typography>
          <SeparationLine/>

          {/* FILTER BLOCK */}
          <Box sx={{ maxWidth: '320px' }}>
            {/* Gender */}
            <FilterTitle filterName={'Gender'} handleGender={handleGender}/>
            {filterGender && <> <CheckBox label="Men"/> <CheckBox label="Women"/></>}
            <SeparationLine/>

            {/* Kids */}
            <FilterTitle filterName={'Kids'} handleKids={handleKids}/>
            {filterKids && <> <CheckBox label="Boys"/> <CheckBox label="Girls"/></>}
            <SeparationLine/>

            {/* Brand */}
            <FilterTitle filterName={'Brand'} handleBrand={handleBrand}/>
            {filterBrand &&
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: '35px' }}>
                <SearchOutlinedIcon
                  sx={{
                    color: '#494949',
                    position: 'absolute',
                    ml: '16px',
                    width: '18px',
                    height: '18px'
                  }} />
                <InputBase
                  sx={{
                    [theme.breakpoints.up('sm')]: {
                      border: '1px solid #494949',
                      borderRadius: '42px',
                      width: '260px',
                      height: '33px',
                      paddingLeft: '40px',
                      input: {
                        '&::placeholder': {
                          fontSize: '1.25rem',
                          color: '#494949'
                        }
                      }
                    }
                  }}
                  type="text"
                  placeholder='Search' />
              </Box>

              <CheckBox label="Adidas" handleChangeAdidas={handleChangeAdidas}/>
              {checkedAdidas && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>}
              <CheckBox label="Asics" handleChangeAsics={handleChangeAsics}/>
              {checkedAsics && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>}
              <CheckBox label="New Balance" handleChangeNB={handleChangeNB}/>
              {checkedNB && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '140px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Nike" handleChangeNike={handleChangeNike}/>
              {checkedNike && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '80px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Puma" handleChangePuma={handleChangePuma}/>
              {checkedPuma && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Reebok" handleChangeReebok={handleChangeReebok}/>
              {checkedReebok && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '100px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
            </>}
          </Box>

          <SeparationLine/>

          {/* Price */}
          <FilterTitle filterName={'Price'} handlePrice={handlePrice}/>
          <SeparationLine/>

          {/* Color */}
          <FilterTitle filterName={'Color'} handleColor={handleColor}/>
          <SeparationLine/>

        </Box> }

        {/* MOBILE FILTERS */}

        {/* FILTER BLOCK */}
        {showFilters &&
        <Box
          sx={{
            width: '320px',
            height: 'auto',
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            // ml: '40px',
            right: '-85px',
            position: 'absolute',
            zIndex: 100,
            background: 'grey'
          }}>
          {/* <Typography
            sx={{
              fontWeight: 300,
              fontSize: '15px',
              lineHeight: '18px'
            }}
          >
            Shoes/Air Force 1
          </Typography>
          <Typography {...theme.typography.h1}>
            Air Force 1 (137)
          </Typography>
          <SeparationLine/> */}

          <Box sx={{ maxWidth: '320px', ml: '15px' }}>
            <Typography sx={{ display: 'flex', justifyContent: 'end', mt: '25px', mr: '20px' }}
              onClick={showFiltersBlock} > X</Typography>

            {/* Gender */}
            <FilterTitle filterName={'Gender'} handleGender={handleGender}/>
            {filterGender && <> <CheckBox label="Men"/> <CheckBox label="Women"/></>}
            <SeparationLine/>

            {/* Kids */}
            <FilterTitle filterName={'Kids'} handleKids={handleKids}/>
            {filterKids && <> <CheckBox label="Boys"/> <CheckBox label="Girls"/></>}
            <SeparationLine/>

            {/* Brand */}
            <FilterTitle filterName={'Brand'} handleBrand={handleBrand}/>
            {filterBrand &&
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: '35px' }}>
                <SearchOutlinedIcon
                  sx={{
                    color: '#494949',
                    position: 'absolute',
                    ml: '16px',
                    width: '18px',
                    height: '18px'
                  }} />
                <InputBase
                  sx={{
                    [theme.breakpoints.up('sm')]: {
                      border: '1px solid #494949',
                      borderRadius: '42px',
                      width: '260px',
                      height: '33px',
                      paddingLeft: '40px',
                      input: {
                        '&::placeholder': {
                          fontSize: '1.25rem',
                          color: '#494949'
                        }
                      }
                    }
                  }}
                  type="text"
                  placeholder='Search' />
              </Box>

              <CheckBox label="Adidas" handleChangeAdidas={handleChangeAdidas}/>
              {checkedAdidas && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>}
              <CheckBox label="Asics" handleChangeAsics={handleChangeAsics}/>
              {checkedAsics && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography>}
              <CheckBox label="New Balance" handleChangeNB={handleChangeNB}/>
              {checkedNB && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '140px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Nike" handleChangeNike={handleChangeNike}/>
              {checkedNike && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '80px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Puma" handleChangePuma={handleChangePuma}/>
              {checkedPuma && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '90px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
              <CheckBox label="Reebok" handleChangeReebok={handleChangeReebok}/>
              {checkedReebok && <Typography sx={{ position: 'absolute', mt: '-31px', ml: '100px', fontSize: '16px', color: '#6E7278', lineHeight: '19px' }}>stock</Typography> }
            </>}
          </Box>

          <SeparationLine/>

          {/* Price */}
          <FilterTitle filterName={'Price'} handlePrice={handlePrice}/>
          <SeparationLine/>

          {/* Color */}
          <FilterTitle filterName={'Color'} handleColor={handleColor}/>
          <SeparationLine/>

        </Box> }

        {/* CONTAINER ZAPATILLAS */}
        <Box sx={{ maxWidth: '1540px', m: '20px', width: 'auto', opacity: '0.2' }}>
          <Box sx={{
            // width: 'auto',
            [theme.breakpoints.up('sm')]: {
              mt: '68px',
              display: 'flex',
              justifyContent: 'space-between'
            },
            [theme.breakpoints.down('sm')]: {
              width: 'auto',
              mt: 'auto'
            }
          }}>
            <Typography sx={{
              fontWeight: 500,
              [theme.breakpoints.up('sm')]: {
                fontSize: '45px',
                lineHeight: '53px'
              },
              [theme.breakpoints.down('sm')]: {
                fontSize: '30px',
                lineHeight: '35px'
              }
            }}> Search Results
            </Typography>

            {console.log(`soy  width ${width}`)}
            {width <= '600px' && <SeparationLine/>}
            {/* {window.innerWidth < 600 ? console.log('menor a 600') : console.log('mayor a 600')} */}

            <Typography
              sx={{
                [theme.breakpoints.down('sm')]: {
                  mt: '8px',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: '18px'
                },
                [theme.breakpoints.up('sm')]: {
                  display: 'none'
                }
              }}
            >
            Shoes/Air Force 1
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between ' }}>
              <Typography {...theme.typography.h6}
                sx={{
                  [theme.breakpoints.up('sm')]: {
                    display: 'none'
                  }
                }}
              >
            Air Force 1 (137)
              </Typography>
              <Box sx={{ display: 'flex' }}>
                {showFilters
                  ? <Typography sx={{
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '28px',
                    mr: '6px'
                  }}>
              Hide Filters
                  </Typography>
                  : <Typography sx={{
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '28px',
                    mr: '6px'
                  }}>
              Filters
                  </Typography>}
                {/* FILTER-REMOVE ICON */}
                <Box
                  onClick={() => { showFiltersBlock() }}
                  component="img"
                  src="/filter-remove.png"
                  sx={{ width: '24px', height: '24px', cursor: 'pointer' }}/>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
            <ProductCard image={'/airmax-270.png'} productTitle="Nike AirMax 90" productPrice="140" productDescription="Men's Shoes"/>
          </Box>
        </Box>
      </Box>
    </>
  )
}
