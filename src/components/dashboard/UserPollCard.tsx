import { useThemeContext } from "@/lib/hooks"
import { Poll } from "@/lib/types"
import { ntoq, stoc, tstos } from "@/utils"
import { Description } from "@mui/icons-material"
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

interface UserPolLCardProps {
  pid: string
  poll: Poll
}

/**
 * Displays users created poll
 */
export default function UserPollCard(props: UserPolLCardProps) {
  const { pid, poll } = props
  const navigate = useNavigate()
  const theme = useThemeContext()

  const handleClick = () => {
    void navigate(`/poll/${pid}/edit`)
  }

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Box
            display={"flex"}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}>
            <Avatar
              sx={{ width: 24, height: 24, mr: 1, bgcolor: stoc(poll.title) }}>
              <Description
                fontSize='small'
                color={theme.mode === "light" ? "inherit" : "action"}
              />
            </Avatar>
            <Typography flex={1}>{poll.title}</Typography>
          </Box>
          <Typography textAlign={"right"} variant='body2' color='textSecondary'>
            {ntoq(poll.questions.length)}
          </Typography>
          <Typography textAlign={"right"} variant='body2' color='textSecondary'>
            Updated {tstos(poll.updated_at)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
