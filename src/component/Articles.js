import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getArticle } from "../action";
import {
  List,
  Segment,
  Button,
  Dimmer,
  Loader,
  Image
} from "semantic-ui-react";

function getPost(time) {
  const dt = new Date(time);
  return dt.getDate() + "/" + dt.getMonth() + 1 + "/" + dt.getFullYear();
}
function Articles({ state, fetchArticles, loading }) {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);
  if (loading)
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  return (
    <Segment inverted>
      <List divided animated inverted relaxed>
        {state &&
          state.map((e, i) => {
            return <List.Item key={i} />;
          })}
      </List>
    </Segment>
  );
}
const mapStateToProps = state => {
  return {
    state: state.article,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(getArticle());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
