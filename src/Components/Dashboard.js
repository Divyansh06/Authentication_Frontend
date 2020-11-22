import React, { useEffect } from "react";
import {
  Card,
  Grid,
  Button,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { FetchPosts } from "../Redux/Actions/action";
import { connect } from "react-redux";

function DashboardComponent(props) {
  const { posts, sign_in, signed_in } = props;
  useEffect(() => {
    if (signed_in) {
      props.FetchPosts();
    }
  }, [signed_in]);
  return (
    <>
      {!signed_in ? (
        <Grid
          container
          justify={"center"}
          style={{ marginTop: window.innerHeight / 4 }}
        >
          <Grid item>
            <h1>You are Not authorized to view this Page</h1>
            <Button
              style={{ float: "inline-end" }}
              color={"primary"}
              onClick={() => props.history.push("/signin")}
            >
              Please Login to Proceed
            </Button>
          </Grid>
        </Grid>
      ) : (
        <div style={{ padding: 50 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>
              <small>Welcome {sign_in.username}</small>
            </h1>
          </div>
          <Grid container spacing={4} style={{ marginTop: 50 }}>
            {posts.map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    style={{ paddingTop: "56.25%" }}
                    image={item.image}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography>{item.body}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    sign_in: state.sign_in,
    signed_in: state.signed_in,
    loading: state.postloading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    FetchPosts: () => FetchPosts(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
