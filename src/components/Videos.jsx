import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      justifyContent='center'
      gap={2}
      sx={{ flexWrap: 'wrap' }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos