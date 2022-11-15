import React from 'react'
import { Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import Image from 'next/image'

import Star from '../Star/Star'
import Wedge from '../Wedge/Wedge'

const Blockquote = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'none',
        width: '50%',
        position: 'relative',
        [theme.breakpoints.up('xl')]: {
          display: 'grid',
          placeContent: 'center',
          padding: '2rem',
          position: 'relative',
          zIndex: 1
        }
      }}
    >
      <Image src='/sign-up-shoes-desktop.png' layout='fill' objectFit='cover' alt='pair of shoes' priority />
      <Box
        sx={{
          [theme.breakpoints.up('lg')]: {
            background:
          'radial-gradient(55.99% 112.1% at 69.71% 44.01%, rgba(253, 253, 253, 0.074) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(64.9% 185.04% at 19.81% 27.89%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.06) 100%)',
            backdropFilter: 'blur(12px)',
            width: '90%',
            maxWidth: '756px',
            height: '317px',
            borderRadius: '32px',
            display: 'flex',
            alignItems: 'center',
            border: '2px solid white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
      </Box>
      <Box
        sx={{
          fontSize: '20px',
          color: '#0D0D0D',
          maxWidth: '450px',
          position: 'relative',
          paddingBlock: '2rem',
          [theme.breakpoints.up('lg')]: {
            fontSize: '25px',
            maxWidth: '550px'
          }
        }}
      >
        <Box
          component='button'
          sx={{
            width: '38px',
            height: '38px',
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: '10px',
            right: '75px',
            borderRadius: '50%',
            border: '2px solid white',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            [theme.breakpoints.up('xl')]: {
              top: '40px',
              right: '-5px'
            }
          }}
        >
          <Wedge />
        </Box>
        <Box
          component='button'
          sx={{
            width: '38px',
            height: '38px',
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: '10px',
            right: '15px',
            borderRadius: '50%',
            border: '2px solid white',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transform: 'rotate(180deg)',
            zIndex: 3,
            [theme.breakpoints.up('xl')]: {
              top: '40px',
              right: '-70px'
            }
          }}

        >
          <Wedge />
        </Box>
            &quot;Lorem Ipsum is a really great company because the team is passionate about the projects they produce, the people they work with, the quality of the work they do.&quot;`
        <Typography
          variant='p'
          sx={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.75rem',
            fontWeight: '600',
            color: '#0D0D0D',
            zIndex: 1,
            [theme.breakpoints.up('lg')]: {
              fontSize: '25px'
            }
          }}
        >
      John Stone <Star /><Star /><Star /><Star /><Star />
        </Typography>

        <Typography
          sx={{
            color: '#797979',
            zIndex: 1
          }}
        >
      Ukraine, Chernivtsi
        </Typography>
      </Box>
    </Box>
  )
}

export default Blockquote