import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import axios from 'axios'

import { Videos, ChannelCard } from './'
import { options } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchFromAPI = async categoryUrl => {
      axios
        .request({ ...options, url: options.url + categoryUrl })
        .then(res => {
          setChannelDetail(res?.data?.items[0])
        })
    }
    const fetchVideos = async categoryUrl => {
      axios
        .request({ ...options, url: options.url + categoryUrl })
        .then(res => {
          setVideos(res?.data?.items)
        })
    }

    fetchFromAPI(`channels?part=snippet&id=${id}`)
    fetchVideos(`search?channelId=${id}&part=snippet&order=date`)
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            background:
              'linear-gradient(45deg, rgba(255,20,128,1) 0%, rgba(109,13,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
export default ChannelDetail
