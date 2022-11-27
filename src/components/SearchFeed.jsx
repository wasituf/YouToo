import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Videos } from './'
import { options } from '../utils/fetchFromAPI'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    const fetchFromAPI = async categoryUrl => {
      axios
        .request({ ...options, url: options.url + categoryUrl })
        .then(res => {
          setVideos(res.data.items)
        })
    }

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  }, [searchTerm])

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}
    >
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for:{' '}
        <span style={{ color: '#F31503' }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}
export default SearchFeed
