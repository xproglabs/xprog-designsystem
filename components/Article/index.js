import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Grid from '../Grid';
import Subject from '../Subject';
import Typography from '../Typography';
import TextBody from './TextBody';

const Article = ({content, embeds}) => {

  const {subject, subtitle, title, text, author} = content;
  const createdAt = content['time-created'];
  const updatedAt = content['time-modified'];

  return (
    <Block alignCenter style='article'>
      <Block alignCenter pb='xl' width="full">
        <Grid columns={12}>
          <Subject filled>{subject}</Subject>
          <Typography tokenVariant='article-title'>{title}</Typography>
          <Typography tokenVariant='article-subtitle'>{subtitle}</Typography>
        </Grid>
      </Block>
      <Block alignCenter pb='xl' width="full">
        <Grid columns={12}>
          <Block column>
            <Typography tokenVariant='system-bold'>{author}</Typography>
            <Typography tokenVariant='system'>Criado em: {createdAt}</Typography>
            {updatedAt && <Typography tokenVariant='system'>Atualizado em: {updatedAt}</Typography>}
          </Block>
        </Grid>
      </Block>
      <Block alignCenter pb='xl' width="full">
        <Grid columns={12}>
          <TextBody content={text} embeds={embeds} />
        </Grid>
      </Block>
    </Block>
  );
};

Article.propTypes = {
  content: PropTypes.shape({
    author: PropTypes.string.isRequired,
    subject: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    ['time-created']: PropTypes.string.isRequired,
    ['time-modified']: PropTypes.string.isRequired,
  }),
  embeds: PropTypes.object
};

Article.defaultProps = {
  content: {}
};

export default Article;