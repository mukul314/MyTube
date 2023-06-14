// import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading....";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
