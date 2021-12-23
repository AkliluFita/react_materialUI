import {
  Avatar,
  AvatarGroup,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { itemData } from "./imageData";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    border: "1px solid #ccd1c6",
    borderRadius: 5,
    position: "sticky",
    top: 0,
  },
  item: {
    marginBottom: 20,
  },
  link: {
    marginRight: 5,
  },
}));

export default function RightBar() {
  const classes = useStyles({});

  return (
    <Container className={classes.container}>
      <Typography className={classes.item}>my freind lists</Typography>
      <AvatarGroup max={4} className={classes.item}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>

      <Typography className={classes.item}>Gallery</Typography>
      <ImageList variant="masonry" cols={3} gap={6} className={classes.item}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Typography className={classes.item}>Categories</Typography>
      <Link href="#" variant="body2" className={classes.link}>
        Sport
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Science
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Art
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Social
      </Link>
      <Link href="#" variant="body2" className={classes.link}>
        Life
      </Link>
    </Container>
  );
}
