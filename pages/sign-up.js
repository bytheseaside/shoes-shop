import { Box, Button, Checkbox, InputLabel, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../src/components/Form/Form'
import PrimaryInput from '../src/components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../src/components/PrimaryButton/PrimaryButton'
import SignUpOverlay from '../src/components/SignUpOverlay/SignUpOverlay'
import Link from 'next/link'
import useSignUpForm from '../src/hooks/useSignUpForm'
import HeaderBeforeLogin from '../src/components/Header/Header'
import Blockquote from '../src/components/Blockquote/Blockquote'

const SignUp = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [mobileWidth, setMobileWidth] = useState()

  const theme = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMobileWidth(window.innerWidth)
    }
  }, [mobileWidth])

  const { handleSubmit, handleInputChange } = useSignUpForm()

  return (

    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
          flexDirection: 'row'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          [theme.breakpoints.up('lg')]: {
            width: '50%'
          }

        }}
      >
        <HeaderBeforeLogin />
        <Box
          sx={{
            display: 'grid',
            placeContent: 'center',
            flex: 1,
            paddingInline: '1.25rem',
            paddingBlock: '2rem'
          }}
        >
          <Typography variant="h1">Create an account</Typography>
          <Typography variant='p'>Create an account to get an easy access to your dream shopping</Typography>
          <Form onSubmit={handleSubmit}>
            <PrimaryInput label='Name' placeholder='Hayman Andres' name='name' onChange={handleInputChange} />
            <PrimaryInput label='Email' placeholder='example@gmail.com' name='email' onChange={handleInputChange} />
            <PrimaryInput label='Password' placeholder='at least 8 characters' name='password' onChange={handleInputChange} />
            <PrimaryInput label='Repeat password' placeholder='at least 8 characters' name='repeatedPassword' onChange={handleInputChange} />
            <InputLabel
              sx={{
                fontSize: '10px',
                color: '#494949',
                display: 'flex',
                fontWeight: '500',
                alignItems: 'center',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '15px'
                }
              }}
            >
              <Checkbox />
                Remember me
            </InputLabel>
            <PrimaryButton>
                Sign up
            </PrimaryButton>
            <Typography
              variant='p'
              sx={{
                textAlign: 'center',
                fontWeight: '500'
              }}
            >
                Already have an account?
              <Link href='/'>
                <Button
                  variant='text'
                  sx={{
                    textTransform: 'none',
                    fontSize: '15px'
                  }}
                >
                  Log in
                </Button>
              </Link>
            </Typography>
          </Form>
        </Box>
      </Box>

      {/* Right container */}
      <Blockquote />

      {
        isOverlayVisible && mobileWidth < 380 && (
          <SignUpOverlay setIsOverlayVisible={setIsOverlayVisible} />
        )
      }
    </Box>

  )
}

export default SignUp
