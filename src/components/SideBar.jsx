import React from 'react'
import { Box,Button,Stack,Typography,useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';
import icon from "../assets/minlogo.png"
import img from "../assets/pencil.png"
const SideBar = ({setChat,closeMenu}) => {
    const isSmallDevice=useMediaQuery(("max-width:800px"))
  return (
    <Box>
        {isSmallDevice&&<Button
        endIcon={<CloseIcon />}
        onClick={closeMenu}color='text.primary'>
            Close</Button>}
            
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Stack
                    onClick={() => {
                        setChat([])
                        closeMenu()
                    }}
                    sx={{
                        bgcolor: 'primary.main',
                        '&:hover ': {
                            bgcolor: 'primary.bg'
                        }
                    }}
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    py={2}
                    px={{xs:2, md:3}}
                >
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box
                            component={'img'}
                            src={icon}
                            height={42}
                            width={42}
                            borderRadius={2}
                            boxShadow={4}
                            flexShrink={0}
                        />
                        <Typography
                            variant={'heading'}
                            fontSize={{xs:16, md:20}}
                            color={'text.primary'}
                        >
                            New Chat
                        </Typography>
                    </Stack>

                    <Box component={"img"} height={"20px"} src={img}  />

                </Stack>
            </Link>

            <Box p={{xs:2, md:3}}>
                <Link to={'/history'}>
                    <Button
                        variant="contained" sx={{ width: 1 }}
                        onClick={closeMenu}
                    >
                        Past Conversations
                    </Button>
                </Link>
            </Box>

    </Box>
  )
}

export default SideBar