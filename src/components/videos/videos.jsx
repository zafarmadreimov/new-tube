import { Stack, Box } from '@mui/material'
import VideoCard from '../video-card/video-card'
import ChannelCard from '../channel-card/channel-card'
import Loader from '../loader/loader'


const Videos = ({ videos }) => {
	if (!videos.length) return <Loader/>
	return (
		<Stack
			width={'100%'}
			direction={'row'}
			flexWrap='wrap'
			justifyContent='center'
			alignItems='start'
			gap={2}
		>
			{videos.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard video={item} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos