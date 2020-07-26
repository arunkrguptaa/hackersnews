import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getArticle, delArticle, setUpvote } from "../action";
import {
  Table,
  Button,
  Dimmer,
  Loader,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";

function getPost(time) {
  const dt = new Date(time);
  return dt.getHours();
}
const backcolor = {
  background: "orange"
};

function Articles({ state, fetchArticles, deleteArticle, newUpvode, loading }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetchArticles(count);
  }, [count, fetchArticles]);

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
    <div>
      <Segment>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={backcolor}>Comments</Table.HeaderCell>
              <Table.HeaderCell style={backcolor}>Vote Count</Table.HeaderCell>
              <Table.HeaderCell style={backcolor}>UpVote</Table.HeaderCell>
              <Table.HeaderCell style={backcolor}>New Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {state &&
              state.map((e, i) => {
                return (
                  <Table.Row key={i}>
                    <Table.Cell>{e.num_comments}</Table.Cell>
                    <Table.Cell>{e.points}</Table.Cell>
                    <Table.Cell>
                      <Icon
                        name="caret up"
                        size="large"
                        style={{ cursor: "pointer" }}
                        onClick={() => newUpvode(+e.points + 1, e.objectID)}
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <a href={e.url} target="_blank" rel="noopener noreferrer">
                        <b>{e.title}</b>
                        <small> ({e.url}) </small>
                      </a>
                      by {e.author}&nbsp;
                      {getPost(e.created_at_i)} hour
                      {+getPost(e.created_at_i) === 1 ? "" : "s"} ago&nbsp;
                      <Button
                        color="red"
                        size="mini"
                        onClick={() => deleteArticle(e.objectID)}
                      >
                        hide
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </Segment>
      <Button
        onClick={() => setCount(count + 1)}
        content="Next"
        floated="right"
        color="orange"
      />
      <Button
        onClick={() => setCount(count - 1)}
        content="Previous"
        disabled={!count ? true : false}
        floated="right"
        color="orange"
      />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    state: state.article,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: count => {
    dispatch(getArticle(count));
  },
  deleteArticle: id => {
    dispatch(delArticle(id));
  },
  newUpvode: (point, id) => {
    dispatch(setUpvote({ point, id }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
